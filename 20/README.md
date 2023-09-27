# Event driven programming paradigm

Very difficult to use it with complex apps.

Is normal to mix it with functional or object oriented programming.

[Read this article for event driven paradigm.](https://www.geeksforgeeks.org/explain-event-driven-programming-in-node-js/)

[Read this article for Event Emitter.](https://nodejs.dev/en/learn/the-nodejs-event-emitter/)

[Read this article for events.](https://nodejs.dev/en/api/v20/events/)

## Events

- event: is a simple event we can handle
- system event: is a low level event, like system timers, it is handled by lubbee, we do not have access to them.
- custom event: is a event we can create, connected with some bus or handler

## Event Emitter

Is a event bus which allows to get information from any place of the application for all the events.

![Alt text](image.png)

## Observers

## event handler (also called subscribers)

Will handle the function when the event is emitted.

## event listener

In nodeJS is the same as event handler, in other languages it changes.

```js
class MyEventEmitter{
    events = {
        close:[fun1,fun2,...,fun3],
        open: [func1, fun2....]
    }
}
```

In event emitter we can set event listener as many times as we want.

## Some methods

- on(eventName, listener) => sucribe listener to event
- once(eventName, listener) => suscribe listener to event only once
- removeListener(eventName, listener) => removes the frist listener from list
- removeAllListeners(eventName) => remove al listener
- emmit(eventName, ...args)

# Streams

[Read this.](https://nodesource.com/blog/understanding-streams-in-nodejs/)
Stream in Node.js simply means a sequence of data being moved from one point to the other over time. The whole concept is, you have a huge amount of data to process, but you don’t need to wait for all the data to be available before you start processing it.

For sending data from one program to another program.

The conception is that we can send data by part.

- Readable: stream that allows to read some data
- Writable: stream that allows to write data
- Duplex: stream in which we can write and read data. In practice they are two separate streams connected by one bus.
- Transform: subtype of duplex stream

In nodeJS stream is a instance of EventEmitter

## Examples

Readable.pipe(Writable) => read something from a readable stream from a stream and write it in another.

Readable.pipe.Transform.pipe(Writable)

We will use pipe pretty often.

## Buffering

```js
new Stream([objectMode: (true or false)], highWaterMark: integer)
```

We can send data as an object or as an array of bytes. Object mode indicates this

- HighWaterMark: size of buffer.

## stream (nodeJS library)

Provides system hability to work with streams.

## Readable

- state: null | "flowing" | "paused"
  - "flowing": when we do the pipe() some where or when we just read()
  - "paused": will be when we .unpipe() (we disconnect the source of data) and when Readable.pause()

## Tasks that stream solves

- save / read files
- save / read DBs
- zip/unzip
- encrypting
- transfer data by the network

# REPLACE RECURSION WITH BFS OR DBS, see this.

# swagger
