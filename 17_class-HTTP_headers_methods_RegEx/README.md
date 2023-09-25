# np-statistics

Investigate about this.

hacer un algoritmo que muestra en una lista desordenada, y sin ordenar que te diga que elemento estaría en la posición 6 si la lista estuviera ordenada

# HTTP methods and headers

[HTTP request methods.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Methods

### OPTIONS

Primary method, returns all allowed methods on the URL.

- Example:
  OPTIONS \* HTTP 1/1
  HOST: example.com
  Answers is:
  HTTP 1/1 200 OK
  Allow: GET, POST...

### GET

Ask for some data our source for getting it, but it does not modify it.

- Example:
  GET /text.txt HTTP
  HOST: example.com
  Answer is:
  HTTP 200 Ok
  Content-type: text-plain
  "data"...

  DO NOT GET BODY WITH GET, read this

### HEAD

It does not return the body of the response, only the head and meta data-

- Example:
  HEAD /text.txt HTTP
  Host: example.com
  Answer is:
  HTTP 200 ok
  Context-type: ...

### POST

Creates a new resource

- Example:
  POST: /text.txt HTTP
  Host: example.com
  "data"
  Answer is:
  HTTP 201 Created
  Location: /text.txt

### PUT

To modify data by a defined URL that already exist.
It changes the hole record. We change the complete data.

- Example:
  PUT /text.txt HTTP
  "new data"
  Possible answers:
  HTTP 200, 201, 204

### PATCH

It changes only part of the data, not the hole data as in put.

- Example:
  PATCH /text.txt HTTP
  "new data"
  Answer is:
  HTTP 200 OK

### DELETE

Used for delete some records

- Example:
  DELETE /text.txt
  Answer is:
  HTTP 200 OK

### TRACE

Usefull but very rare. Help to see the stages of the request passes and response between computer and server.

If something does not work, we can use it to see where is the network problem.

- Example:
  TRACE / HTTP
  Kloct: example.com (kloct esta mal, ver")

### CONNECT

To open a tunnel between a computer and some resource

- Example:
  CONNECT server.example.com HTTP
  Host: server.example.com:80

## We can separate all methods in 3 groups

- Safe: it does not change the data

  - GET
  - HEAD
  - OPTIONS

- Idempotent

  - GET
  - HEAD
  - PUT
  - DELETE
  - OPTIONS
  - TRACE

- Non-idempotent:

  - POST
  - PATCH

## Headers

### Request header

When we make a request, we also send a header.

### Host

Describe from which host the request is sent.

### User-agent

Used for describing the client (browser, the device that is using (movilet, etc), etc)

### Refer

To set where the request comes from

### Accept

Shows which type of files the client accepts.

### Cookie

Is "key = value, key=value1"...

### Authorization

Sends tokens, cookies, etc.

## Type of responses

1xv - Info - we do not really care about it
2xx - Success
3xx - Redirect - When we want to redirect the client to another site
4xx - Problem on client-side. 418 -> "I m a teapot" see this.
5XX - Problem on server-side.

## Response headers

We can set headers in request, also the browser.

### Server

Contains information about the server

### Set-cookie

We can set cookie from server to client. For example, user have now premiun account.

- Example:
  Set.cookie: IS-PREMIUM = true

### WWW - Authenticate

See this.

## RegExp

https://regex101.com/

Means regular expressions. Very powerful instrument. It is multi language.

Read from book "Eloquent Javascript" read it complete.

Is a class and also have a literal

```js
// Using literals
const re = /abc/;

// Using a constructor
const re1 = new RegExp("abc");
```

### Symbols

```js
/abc/.test("abcde") // true, as ot have abc
/abc/.test("abdct") // false, as do not have abc

"abc".indexOf("abc") // to check if string have the substring "abc"
```

```js
// for using or, we use []
/[0123456789]/ // means any digit symbol
/[0-9]/ // Is the same, we indicate the start and the end

// Shortcuts
\d - any digit
\w - alphabetical symbol. [a-zA-Z]
\s - space, tabulation, enter symbol
\D - not digit
\W - non alphabetical
\S - non space symbol
. - Any symbol but enter

\ we use for escaping, means we are looking for exactly the next.
```

```js
/[^01]/ // any symbol but 0 and 1
/[^01]/.test("100110") // false
/[^01]/.test("102110") // true
```

## Counters

We are looking sor some numbers a we do not want to write all the regex,

- - : means symbol can be repeated from one to infinite
- \* : means symbol can be repeated from zero to infinite
- ? : means symbol can be repeated zero or 1 symbol
- {a, b}: means can be repeated [a,b] time
  - {, 5} [0,5]
  - {5,0} [0, infinite)

/abc/g means I am not looking only for the first substring, but also for also all substring
/abc/gi -> i means case insensitive.

We can also group the expressions

/boo + (hoo+) + /i : as many o as I want.
