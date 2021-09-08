type Listener = (...args:any[]) => void

type Listeners = Listener[]

interface EventsObject {
  [key: string]: Listeners
}

function checkListener(listener) {
  const listenerType = typeof listener

  if (listenerType !== 'function') {
    throw new TypeError(`The "listener" argument must be of type Function. Received type ${listenerType}`)
  }
}

export default class Events {
  private _events: EventsObject = {}

  public on(eventName: string, listener: Listener, prepend = false): Events {
    checkListener(listener)

    if (!this._events[eventName]) {
      this._events[eventName] = []
    }

    const listeners = this._events[eventName]

    if (prepend) {
      listeners.unshift(listener)
    } else {
      listeners.push(listener)
    }

    return this
  }

  public off(eventName: string, listener?: Listener): Events {
    const listeners = this._events[eventName]

    if (!listeners) return this

    if (listener) {
      checkListener(listener)

      this._events[eventName] = listeners.filter((currentListener) => {
        return currentListener !== listener
      })
    } else {
      this._events[eventName] = []
    }

    return this
  }

  public once(eventName: string, listener: Listener, prepend = false): Events {
    checkListener(listener)

    const proxyListener = (...args) => {
      this.off(eventName, proxyListener)
      listener.apply(this, args)
    }

    return this.on(eventName, proxyListener, prepend)
  }

  public emit(eventName: string, ...args: any[]): boolean {
    const listeners = this._events[eventName]

    if (!listeners || !listeners.length) {
      return false
    }

    listeners.forEach((listener) => {
      listener.apply(this, args)
    })

    return true
  }
}
