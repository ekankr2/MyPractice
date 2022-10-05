const nodemailer = require('nodemailer');

const mailSender = {
    // 메일발송 함수
    sendNaver: function (param) {
        var transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.naver.com',
            secure: true,
            auth: {
                user: 'username',
                pass: 'password'
            }
        });
        // 메일 옵션
        var mailOptions = {
            from: `"임익환" <ekankr2@naver.com>`,
            to: 'ekankr2@medicalip.com, ycshin@medicalip.com, hskim0408@medicalip.com',
            subject: 'test 제목',
            text: 'Nodejs로 여러명한테 이메일보내기'
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