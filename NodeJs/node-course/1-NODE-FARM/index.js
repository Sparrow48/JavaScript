const http = require('http');
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate');
const slugify = require('slugify');


const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const objData = JSON.parse(data);

const slugs = objData.map(el => slugify(el.productName , { lower : true}));


const server = http.createServer((req,res) =>{
    const {query, pathname} = url.parse(req.url, true);

    if(pathname ==='/'|| pathname ==='/overview'){
        res.writeHead(200,{'Content-type':'text/html'});
        const cardsHtml = objData.map(el => replaceTemplate(tempCard,el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        
        res.end(output);
        
    }else if(pathname === '/product'){
        res.writeHead(200,{'Content-type':'text/html'});
        const product = objData[query.id];
        const output = replaceTemplate(tempProduct,product);
        res.end(output);
    }else if(pathname === '/api'){
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(data);

    }else{
        res.writeHead(404);
        res.end('Page not found!');
    }
});

server.listen(8000,'127.0.0.1',() =>{
    console.log('Listen the port 8000');
});
