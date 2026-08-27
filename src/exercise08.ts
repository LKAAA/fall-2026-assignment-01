export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  private listeners: { [K in keyof T]?: ((data: any) => void)[] } = {}
  
  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName]!.push(callback);
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const callbacks = this.listeners[eventName];
    if (callbacks) {
      callbacks.forEach((callbacks) => callbacks(data));
    }
  }
}
