const dotenv = require('dotenv');


module.exports.load_language = (language) => {
    if (language == "English") {
        return dotenv.config({ path: 'app/language/english/.env' }).parsed;

    }
    else {
         return dotenv.config({ path: 'app/language/hindi/.env' }).parsed;
        //return dotenv.process.env;
    }
}
