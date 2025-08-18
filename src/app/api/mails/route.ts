import { NextRequest, NextResponse } from "next/server";
const mailChecker = import('mailchecker');

const nodemailer = require('nodemailer');

export async function POST(req: Request) {

    
    // @ts-ignore
    const { name, email, message } = await req.json();

    if(!(await mailChecker).isValid(email)){
        return NextResponse.json({message:"wth is this email?.......uhhhhhh do you think I am dumb!?."}), {status:400}
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing required fields!" }), {status: 400}
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

        return NextResponse.json({success: true});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error:"Error while processing request!" }),{status:500}
    }
}

