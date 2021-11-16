var http = require("http");
const { mainModule } = require("process");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'json'});
   
    //var i =20;
   response.end('hiii Im snmdfsdfsdfb\n'); 
 //  response.end('its my first node filzxxzxegfgffdffdg\n');

}).listen(8081);
  //console.log(response);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
