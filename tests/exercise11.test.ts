import { describe, it, expect } from 'vitest';
import { logStatusToFile } from '../src/exercise11.js';
import fs from 'fs/promises';
import path from 'path';

describe('Exercise 11: logStatusToFile', () => {
  const testFilePath = path.join('data', 'test_logs.txt');

  it('should append multiple timestamped messages to a real file', async () => {
    // 1. Clean start
    try {
      await fs.unlink(testFilePath);
    } catch {
      // Ignore if file doesn't exist
    }

    const messages = [
      'First status update',
      'Second status update',
      'Final status update',
    ];

    // Log first message
    await logStatusToFile(testFilePath, messages[0]);
    let content = await fs.readFile(testFilePath, 'utf-8');
    expect(content).toContain(messages[0]);
    expect(content.split('\n').filter((line) => line.trim()).length).toBe(1);

    // Log second message
    await logStatusToFile(testFilePath, messages[1]);
    content = await fs.readFile(testFilePath, 'utf-8');
    expect(content).toContain(messages[0]);
    expect(content).toContain(messages[1]);
    expect(content.split('\n').filter((line) => line.trim()).length).toBe(2);

    // Log third message
    await logStatusToFile(testFilePath, messages[2]);
    content = await fs.readFile(testFilePath, 'utf-8');
    expect(content).toContain(messages[0]);
    expect(content).toContain(messages[1]);
    expect(content).toContain(messages[2]);
    expect(content.split('\n').filter((line) => line.trim()).length).toBe(3);

    // Check for ISO timestamps on all lines
    const lines = content.split('\n').filter((line) => line.trim());
    const isoDatePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
    lines.forEach((line) => {
      expect(line).toMatch(isoDatePattern);
    });
  });
});
