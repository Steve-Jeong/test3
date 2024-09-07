'use client';

import { useState, useEffect } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    });
    const data = await response.json(); // Assuming Todo interface is defined elsewhere
    setTodos([...todos, data]);
    setNewTodo('');
  };

  const handleDelete = async (id) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='text-lg font-bold mb-4'>
      Todos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="rounded-lg border border-gray-300 p-2"
        />
        <button type="submit" className="rounded-lg border border-gray-300 p-2">
          Create Todo
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="flex">
          <p className="p-2">{todo.title}</p>
          <button
            onClick={() => handleDelete(todo.id)}
            className="outline m-1 px-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;