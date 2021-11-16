var otpGenerator = require('otp-generator');
var generator = require('generate-password');


module.exports.otpGenerator = (user_id) =>{    
    return otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
}

module.exports.passwordGenerator = () => {
    var password = generator.generate({
        length: 10,
        numbers: true
    });

    return password;
}

