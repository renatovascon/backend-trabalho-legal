const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');
import { templateAttachment } from "./template.attachment";
import { templateBody } from "./template.body";

const dotenv = require('dotenv').config()

const createPdf = async(textAttachment: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(textAttachment);
    await page.pdf({ path: 'teste.pdf', format: 'A4' });

    await browser.close();
}

export const sendEmail = async (req) => {
    const textAttachment  = templateAttachment(req)
    const textBody = templateBody(req)
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    
    try{
        createPdf(textAttachment)
    } catch (error) {
        console.log(error)
    }
    transport.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Email de cobrança',
        html: textBody,
        text: 'testando',
        attachments: [{
            filename: 'cobrança.pdf',
            path: 'teste.pdf',
            contentType: 'application/pdf'
        }],
    })
    .then(()=> console.log('email enviado'))
    .catch(()=> console.log('nao rolou'))
};