# @liaoys/events

An event emitter

## Installation
```
npm install @liaoys/events
```
## Usage

```javascript
import Events from "@liaoys/events"

const event = new Events()

// Add event listener
event.on('foo', (param) => {
  console.log(`foo triggered! parameter is '${param}'`)
})

// Add an event listener, and it will be invoked only once
event.once('foo', () => {
  console.log('foo emitted!')
})

// trigger event
event.emit('foo', 'Hi!')
```

## type Listener

(...args: any[]) => void;

A callback function, accept some parameters from method of instance.

## Instance methods

### on(eventName: string, listener: Listener, prepend?: boolean): Events
- `eventName`  The name of the event
- `listener`  The callback function
- `prepend`  Add the listener to the beginning of the listeners array. default: false

Add event listener.

### off(eventName: string, listener?: Listener): Events
- `eventName`  The name of the event
- `listener`  The callback function

Remove the specified `listener` from the listeners array for the event named `eventName`.

If without the parameter `listener`, will remove all the listeners from the listeners array for the event named `eventName`.

### once(eventName: string, listener: Listener, prepend?: boolean): Events
- `eventName`  The name of the event
- `listener`  The callback function
- `prepend`  Add the listener to the beginning of the listeners array. default: false

Add an event listener, and it will be invoked only once.

### emmit(eventName, ...args: any[]): boolean
- `eventName`  The name of the event
- `args` Parameters passed to listener.

Trigger the event named `eventName`.

Returns `true` if the event had listeners, `false` otherwise.
