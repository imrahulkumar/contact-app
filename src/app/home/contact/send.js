const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '0e8a6b76',
  apiSecret: 'UsdHKcXtlH0cU8Bg'
});


function sendmsg (to , text) {
    const from = 'Nexmo';
    console.log(`your number is ${to} and your message is ${text}`);
    nexmo.message.sendSms(from, to, text, (error, response) => {
      if(error) {
        throw error;
      } else if(response.messages[0].status != '0') {
        console.error(response);
        throw 'Nexmo returned back a non-zero status';
      } else {
        console.log(response);
      }
    });
}
module.exports.mymessage = sendmsg;






