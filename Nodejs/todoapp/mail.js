const nodemailer = require('nodemailer');

const mailSender = {
    // 메일발송 함수
    sendNaver: function ({toEmail, title, content, replyTo}) {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.worksmobile.com',
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        });
        // 메일 옵션
        const mailOptions = {
            from: {
              name: '임익환',
              address: 'ekankr2@medicalip.com'
            },
            to: toEmail,
            subject: title,
            text: content,
            replyTo: replyTo
        };

        // 메일 발송
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('mailError:',error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }
}

module.exports = mailSender;