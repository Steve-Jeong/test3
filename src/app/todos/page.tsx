import { createTodo, deleteTodo, getTodos } from "@/lib/todos";

const Todos = async () => {
  const todos = await getTodos()
  return (
    <div  className='text-lg font-bold mb-4'>
      Todos
      <form action={createTodo}>
        <input type="text" name="title" placeholder="Add a new todo" className="rounded-lg border border-gray-300 p-2"/>
        <button type="submit" className="rounded-lg border border-gray-300 p-2">Create Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="flex">
          <p className="p-2">{todo.title}</p>
          <form action={deleteTodo}>
            <input type="hidden" name="id" value={todo.id} />
            <button className="outline m-1 px-2">Delete</button>
          </form>
          
        </div>
      ))}
        
    </div>
  );
};

export default Todos;
