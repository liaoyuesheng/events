declare type Listener = (...args: any[]) => void;
export default class Events {
    private _events;
    on(eventName: string, listener: Listener, prepend?: boolean): Events;
    off(eventName: string, listener?: Listener): Events;
    once(eventName: string, listener: Listener, prepend?: boolean): Events;
    emit(eventName: string, ...args: any[]): boolean;
}
export {};
