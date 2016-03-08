/**
 * Created by warlock on 08/03/16.
 */

var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");

var mailSender = {};
// create reusable transporter object using the default SMTP transport
//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com'); // set options.pool to true to use pooled connection otherwise a new connection will be created for sending each mail ( Speeds the process)
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'gg.prakash.a',
            clientId: '835526815075-sg1q913ca7m5t2rdgn2pqjrv8vo60l4k.apps.googleusercontent.com',
            clientSecret: '3KawlHkNf09DDA3RYiidX8U1',
            refreshToken: '1/NlyfzzcHf2fE_QJXaXX6DGzYKdYWzp6PCdAzTaMu-jcMEudVrK5jSpoR30zcRFq6',
            accessToken: 'ya29.nwLi24nnkWvZ9ZwZ-ZxXjn8HlYi-oOKryLHjjsBGNmJGPDEItHlNi9CtZglCzXDiNg'
        })
    }
});
// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Sarojini App" <app@sarojini.com>', // sender address
    to: 'ajiprak@gmail.com', // list of receivers ajiprak@gmail.com
    subject: 'Mail from Sarojini Server', // Subject line
    text: 'Default Content', // plaintext body
    html: '<b>Default Content</b>' // html body
};

mailSender.send = function(msg) {
    // send mail with defined transport object
    mailOptions.html = '<b>'+msg+'</b>';
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

module.exports = mailSender;