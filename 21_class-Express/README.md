# Express

Express uses library `http`

```js
const http = require("http");

const PORT = 3000;

http.createServer().listen(PORT)

function(req,res){
    headers...
    methods...
}

// Not very comfortable to use just http, because I makes us
// to code more, is better to use libraries like express
```

```js
const express = require("express");

// Creating server
const app = express();

// some configuration ...

app.listen(PORT);
```

## Default ports

- http: 80
- https: 443

## Middleware

It receives 3 parameters

- request
- response: send concrete response
- next

```js
// use is a function and midleweare are parameters to the function
app.use("./..", (req, resp, next) => {
  res.send("ok");
});

res.send({ id: 13 });
res.send([1, 2, 3]);
res.send(Buffer.from("ok"));
res.sendFile("./index.html/");
res.status(404).send("not found");
app.use(express.static("directory")); // expose files in directory in localhost.../directory
app.use("static", express.static("d")); // expose files in directory in localhost../static/d
```

## Routing

- use can work with our routing
- get
- post
- put
- patch
- delete

```js
use([...array of middleWares]) // runs one by one
use(route, [...middlewares])

"/hello" means we ask for localhost:3000/hello

app.get(/.*(\.)html$/, (req, res)=> {})
```

## Redirect

```js
(rep, res) => res.redirect("url.com"); // default status is 302
```

## Send data to server

- you can send some data using headers (cookies, metadata, authorization)
- query
- body
- params

### query

```js
//Sending objects
url.com?name=Alex&age=19
req.query"{name:"Alex", age: 19}"

user.id=1&user.name=nameless&user.address.city=Gdansk
req.query.user => {
    id:1,
    name: "nameless",
    address: {
        city:"Gdansk"
    }
}

// Sending arrays
names=Anna&names=Alex => ["Anna","Alex"] // not good approach
names[]=Anna&names[]=Alex => ["Anna","Alex"] // universal approach
names.0=Anna&names.1=Alex => ["Anna","Alex"]
```

### body

req.body gets the body. Very bad practice, do not do this.

## req.params

```js
// example to get a concrete student

// localhost:3000/students/2
app.get("students/:id", (req, resp) => {
  req.params.id; // => 2
});

// /categories/:categoryID/products/:productID we have to parameters here

app.get("students/:id"...{
})
app.get("students/best"...{
    // the problem is that this will match in upper handler,
    // and we will never reach here
})

// to solve this problem, we must swap positions
// most specific goes upper, and more generic lower
app.get("students/best"...{

})
app.get("students/:id"...{
})
```

## Router

```py

```
