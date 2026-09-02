export type TodoItem = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null> {

  try {
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    const data = (await response.json()) as TodoItem;
    console.log(data);
    return data;

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Caught Expected Error", error.message);
    } else {
      console.error("Caught Unexpected Error", error);
    }
    return null;
  }


  
}
