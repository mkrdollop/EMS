async function loginUser(credentials) {
   console.log(JSON.stringify(credentials));
   //const data = {useremail:"admin@gmail.com",userPassword:"123456"};
   /* const data = new FormData();
            data.append('userEmail', "admin@gmail.com");
            data.append('userPassword', "123456"); */
            
   //return await fetch('http://localhost:3001/admin_login', {
      /  /
      var details = {
         'userEmail': 'abhik1424@gmail.com',
         'userPassword': '123456',
         //'grant_type': 'password'
     };
     
     var formBody = [];
     for (var property in details) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(details[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&");
   return fetch('http://116.75.243.44:8080/poiesis_live/user_login', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
       },
      
      //body: 'title=hello&message=world'
      body:formBody
   }) 
     .then(function(response) {

      console.log(response);

      }).catch(err=>{
         console.log("error : "+err);
      })
  }