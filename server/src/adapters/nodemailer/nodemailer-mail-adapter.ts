import { MailAdapter, SendMailData } from "./mail-adapters";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c2c403c77f65fe",
      pass: "d1a61f76f2169c"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Team Ghost <dev@ghost.org>',
            to: 'Andrew Aimone <andrewaimone.info@gmail.com>',
            subject: 'New Feedback',
            html:body,

        })
    }
}