import { describe, it, expect, vi } from 'vitest';
import { SimpleEventEmitter } from '../src/exercise08.js';

describe('Exercise 8: SimpleEventEmitter', () => {
  it('should strictly bind event handlers to the event map', () => {
    const emitter = new SimpleEventEmitter();
    const launchSpy = vi.fn();
    const shutdownSpy = vi.fn();

    emitter.on('launch', launchSpy);
    emitter.on('shutdown', shutdownSpy);

    emitter.emit('launch', 'Apollo');
    emitter.emit('shutdown', 404);

    expect(launchSpy).toHaveBeenCalledWith('Apollo');
    expect(shutdownSpy).toHaveBeenCalledWith(404);
  });
});
