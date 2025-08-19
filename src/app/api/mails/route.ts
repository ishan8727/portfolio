import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
const mailChecker = import('mailchecker');
const nodemailer = require('nodemailer');

const redis = new Redis({
    url: 'https://fresh-kitten-55052.upstash.io',
    token: 'AdcMAAIncDFlYzg5YTVkYzY2NzQ0ZGY4YWFmYzQyMzlkNzA3YmJiNXAxNTUwNTI',
})
const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1, "10 m"), // max 1 requests in 10 minutes!
    analytics: true,
});

export async function POST(req: NextRequest) {
    
    // rate limit checking using @upstash/ratelimit & @upstash/redis
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    const {success} = await ratelimit.limit(ip);

    if(!success) {
        return NextResponse.json({message:"Too many requests wait for some time now!", success:false}, {status:400})
    }

    // @ts-ignore
    const { name, email, message } = await req.json();

    if(!(await mailChecker).isValid(email)){
        return NextResponse.json({ message: "wth is this email?.......uhhhhhh do you think I am dumb!?.", success:false}, { status: 400 });
    }

    if (!name || !email || !message) {
        return NextResponse.json({
            error: "Missing required fields!", success:false },
            {
                status: 400
            });
    }


    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `'Ishan Portfolio' <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `${name} Hiring messafe from portFolio!`,
            text: `
            Name: ${name},
            Email: ${email},
            Message:${message}
        `,
            html: `
            <p><b>Name: <b>${name}</p>
            <p><b>email: <b>${email}</p>
            <p><b>Message: <b>${message}</p>
        `,
            replyTo: email, // reply to user directly
        })

        return NextResponse
        .json({message:'Mail sent successfully!', success: true}, {status:200});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error while processing request!" , success:false },
            {status: 500}
        )
    }
}

