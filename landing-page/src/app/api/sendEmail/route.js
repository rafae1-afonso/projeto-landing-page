import { SMTPClient } from 'emailjs';
import { NextResponse } from 'next/server'

export async function POST(req) {

    const {messageBody} = await req.json();

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: 'rafael.afonsof.lima@gmail.com',
            to: 'rafael.afonsof.lima@gmail.com',
            subject: 'Lead - Landingpage',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    return NextResponse.json({message: 'Send Mail'})
   // res.status(200).json({ message: 'Send Mail' })
}