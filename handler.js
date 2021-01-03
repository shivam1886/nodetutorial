
const home = (res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Home Page');
    res.end();
}

const about = (res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('About Page');
    res.end();
}

exports.home  = home;
exports.about = about;