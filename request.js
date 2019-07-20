const requestFunc = function (numberOfRequests, requestType) {
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
    if (requestType == "async") {
        const doAsync = async function (func) {
            await func();
        }
        for (let i = 0; i < numberOfRequests; i++) {
            console.log("request #"+i);
            doAsync(makeRequest);
        }
    } else {
        for (let i = 0; i < numberOfRequests; i++) {
            console.log("request #" + i);
            makeRequest();
        }
    }
    
}
requestFunc(500, "async");