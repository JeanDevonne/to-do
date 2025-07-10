import React from "react";
import TodoItem from "./TodoItem";

const FILTERS = [
  { label: "Todas", value: "all" },
  { label: "Pendientes", value: "active" },
  { label: "Completadas", value: "completed" },
];

export default function TodoList({ todos, filter, onFilterChange, onToggle, onDelete }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`px-4 py-1 rounded-full border-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm text-sm sm:text-base
              ${filter === f.value ? "bg-blue-500 text-white border-blue-500" : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="bg-white rounded-xl shadow divide-y divide-blue-100 overflow-hidden">
        {todos.length === 0 ? (
          <li className="p-6 text-center text-gray-400 select-none">No hay tareas</li>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </div>
  );
} 