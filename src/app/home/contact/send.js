const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '0e8a6b76',
  apiSecret: 'UsdHKcXtlH0cU8Bg'
});


function sendmsg () {
    const from = 'Nexmo';
    const to = '7982813451';
    const text = 'A text message sent using the Nexmo SMS API';
    
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






