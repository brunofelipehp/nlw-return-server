import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "00923064fa3a68",
    pass: "fce68cf5807356"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  
  async sendMail({ subject, body }: SendMailData){
     await transport.sendMail({
   from: 'Equipe Feedget <oi@feedget.com>',
   to: 'Bruno Felipe <brunofelipehp8@gmail.com>',
   subject,
   html: body,
 }) 
  };
}