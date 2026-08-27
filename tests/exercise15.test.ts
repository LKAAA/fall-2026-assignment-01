/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { processCommentsPipeline } from '../src/exercise15.js';
import fs from 'fs/promises';
import path from 'path';

describe('Exercise 15: processCommentsPipeline', () => {
  const outputPath = path.join('data', 'comments_output.json');

  it('should process the real comments pipeline and save to disk', async () => {
    // Clean up
    try {
      await fs.unlink(outputPath);
    } catch {
      // ignore
    }

    const count = await processCommentsPipeline(1, outputPath);

    // Based on discovery: postId 1 has 5 comments, none end in .org
    expect(count).toBe(5);

    const fileContent = await fs.readFile(outputPath, 'utf-8');
    const data = JSON.parse(fileContent);

    expect(data).toHaveLength(5);
    expect(data[0]).toHaveProperty('commenterEmail');
    expect(data[0]).not.toHaveProperty('body'); // Should be Omit/Pick if type CommentSummary is strictly followed

    // Verify no .org emails (none existed for post 1, but this ensures filter logic works)
    data.forEach((comment: any) => {
      expect(comment.commenterEmail.endsWith('.org')).toBe(false);
    });
  });

  it('should correctly filter out .org emails for post 2', async () => {
    const post2Path = path.join('data', 'comments_post2_output.json');
    try {
      await fs.unlink(post2Path);
    } catch {
      // ignore
    }

    const count = await processCommentsPipeline(2, post2Path);

    // Based on discovery: postId 2 has 5 total comments, 1 ends in .org
    expect(count).toBe(4);

    const fileContent = await fs.readFile(post2Path, 'utf-8');
    const data = JSON.parse(fileContent);

    expect(data).toHaveLength(4);
    data.forEach((comment: any) => {
      expect(comment.commenterEmail.endsWith('.org')).toBe(false);
    });
  });
});
