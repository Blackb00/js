const makeRequest = function () {
    var http = require("http");
    var request = http.request({
        hostname: "localhost",
        port: 3000,
        method: "POST"
    }, function (response) {
        response.on("data", function (chunk) {
            process.stdout.write(chunk.toString());
        });
    });
    request.end("Hello server");
}  


const requestFunc = function (numberOfRequests) {

    var myArgs = process.argv.slice(2);
    switch (myArgs[0]) {
        case "async":
            const doAsync = async function (func) {
                await func();
            }
            for (let i = 0; i < numberOfRequests; i++) {
                console.log("request #" + i);
                doAsync(makeRequest);
            }
            break;        
        case "parallel":
            for (let i = 0; i < numberOfRequests; i++) {
                console.log("request #" + i);
                makeRequest();
            }
            break;
        default:
            console.log("Can't understand:", myArgs);
            console.log("Please type 'async' or 'parallel'")
    }
    
}
requestFunc(100);