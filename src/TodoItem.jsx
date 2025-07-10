import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between py-3 px-4 bg-white hover:bg-blue-50 transition-colors group">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="accent-blue-500 w-5 h-5 cursor-pointer"
          aria-label={todo.completed ? "Marcar como pendiente" : "Marcar como completada"}
        />
        <span className={
          `text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-700"} select-none`
        }>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-400 hover:text-red-600 font-bold text-xl opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity px-2"
        aria-label="Eliminar tarea"
        title="Eliminar"
      >
        ✕
      </button>
    </li>
  );
} 