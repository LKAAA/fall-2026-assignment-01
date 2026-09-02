import * as fs from 'fs/promises';

interface RawComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function detectOrgEmail(email: string): Promise<boolean> {
  return email.toLowerCase().endsWith('.org');
}

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {

  try {
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const rawComments: RawComment[] = await response.json() as RawComment[];

    const mappedComments: CommentSummary[] = rawComments.map((comment) => ({
      postId: comment.postId,
      id: comment.id,
      commenterEmail: comment.email, // Rename 'email' to 'commenterEmail'
    }));

    const filteredComments: CommentSummary[] = [];
    for (const comment of mappedComments) {
      const isOrg = await detectOrgEmail(comment.commenterEmail);
      if (!isOrg) {
        filteredComments.push(comment);
      }
    }

    await fs.writeFile(
      outputPath,
      JSON.stringify(filteredComments, null, 2),
      'utf-8'
    );

    return filteredComments.length;

  } catch (error) {
    console.error("Error processing comments pipeline:", error);
    throw error;
  }

  return 0;
}

