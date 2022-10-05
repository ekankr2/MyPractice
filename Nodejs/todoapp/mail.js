const nodemailer = require('nodemailer');

const mailSender = {
    // 메일발송 함수
    sendNaver: function ({toEmail, title, content}) {
        var transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.naver.com',
            secure: true,
            auth: {
                user: '아디',
                pass: '비번'
            }
        });
        // 메일 옵션
        var mailOptions = {
            from: `"임익환" <ekankr2@naver.com>`,
            to: toEmail,
            subject: title,
            text: content
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