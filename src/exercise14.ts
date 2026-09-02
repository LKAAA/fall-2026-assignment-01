export type PostItem = {
  id: number,
  title: string,
  body: string,
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  try {
    const fetchPromises = postIds.map(id =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    );

    const todosArray: PostItem[] = await Promise.all(fetchPromises) as PostItem[];

    return todosArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }


  return [];
}
