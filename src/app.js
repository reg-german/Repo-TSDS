const http = require('http');

let tasks = [];
let helloWorld = "Hola mundo";
// let idCounter = 1;

const server = http.createServer((req, res) => {
    const {method, url } = req;
    
    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(helloWorld));
    } 
    if (url === '/tasks' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tasks));
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})