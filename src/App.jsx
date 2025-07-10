import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

const LOCAL_KEY = "todos";

function getInitialTodos() {
  try {
    const stored = localStorage.getItem(LOCAL_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [todos, setTodos] = useState(getInitialTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (value) => setFilter(value);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-blue-100">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-600 tracking-tight drop-shadow-sm select-none">
          <span role="img" aria-label="Lista de tareas">📝</span> To-Do List
        </h1>
        <TodoForm onAdd={handleAdd} />
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onFilterChange={handleFilterChange}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <div className="mt-6 text-center text-sm text-gray-400 select-none">
          {todos.length === 0
            ? "¡Comienza agregando tu primera tarea!"
            : `Total: ${todos.length} | Pendientes: ${todos.filter(t => !t.completed).length} | Completadas: ${todos.filter(t => t.completed).length}`}
        </div>
      </div>
    </div>
  );
}
