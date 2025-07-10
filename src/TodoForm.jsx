import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6 w-full">
      <input
        type="text"
        className="flex-1 min-w-0 border-2 border-blue-200 rounded-l-lg px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors shadow-sm bg-blue-50 placeholder-gray-400"
        placeholder="Agregar nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Nueva tarea"
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-r-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all flex-shrink-0"
      >
        Agregar
      </button>
    </form>
  );
} 