const jwt = require('jsonwebtoken');

module.exports.createJwtToken = (tokenData) =>{
    const privateKey = "gbjhcgdfhvioipiqepdewyhcbfdjnhykikjbl";
    const token = jwt.sign(tokenData, privateKey, { expiresIn: '5184000 seconds' });
    return token;
}

module.exports.verifyJwtToken = (token) =>{
    const privateKey = "gbjhcgdfhvioipiqepdewyhcbfdjnhykikjbl"; ;
   decoded =  jwt.verify(token, privateKey, function(err, decoded) {       
     
        if(err)
        {
           return ;
        }
        else
        {
            return decoded;
        }
      });
      return decoded;
    
}



