import nodemailer from 'nodemailer'

export async function getMailClient() {
    // caixa de entrada de email ficticia
    const account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass, 
        }
    })

    return transporter
}