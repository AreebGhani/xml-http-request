const express_js = require('express');

const app = express_js();

app.get("/", function( request, response ) {

    // response.send("<h1>Request Data Page</h1>");
    response.sendFile(__dirname + "/XMLHttpRequest.html");

} );

app.get("/xmlhttp_info.txt", function( request, response ) {

    // response.send("<h1><-----[Get Data Page]-----></h1>");
    response.sendFile(__dirname + "/xmlhttp_info.txt");

} );

app.listen(3000, function( request, response ) {

    console.log("Server is running at Port : 3000");
    
} );