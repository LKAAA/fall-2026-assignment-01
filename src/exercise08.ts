export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {}

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {}
}
