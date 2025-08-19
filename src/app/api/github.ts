import axios from 'axios'

const projects = [];

export async function GET() {
    const response = await axios.get('https://api.github.com/users/ishan8727/')
    return new Response(JSON.stringify(response.data), {
        headers: { 'Content-Type': 'application/json' },
    })
}