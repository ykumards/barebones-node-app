function route(handle, pathname, response, request){
    console.log("About to route request to path " + pathname);
    if(typeof handle[pathname] == 'function') {
        handle[pathname](response, request);
    }
    else {
        console.log("No handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;
