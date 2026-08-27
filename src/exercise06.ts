export class Stack<T> {

  private storage: T[] = [];

  public push(item: T): void {
    this.storage.push(item);
  }

  public pop(): T | undefined {
    return this.storage.pop();
  }

  public peek(): T | undefined {
    return this.storage[this.storage.length - 1];
  }

  public size(): number {
    return this.storage.length;
  }
}
