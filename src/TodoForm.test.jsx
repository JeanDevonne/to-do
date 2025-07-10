import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';
import { vi, describe, it, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

describe('TodoForm', () => {
  it('Llama a la función onAdd con el valor ingresado cuando se envía el formulario.', () => {
    const handleAdd = vi.fn();
    render(<TodoForm onAdd={handleAdd} />);
    const input = screen.getByPlaceholderText(/agregar nueva tarea/i);
    fireEvent.change(input, { target: { value: 'Aprender testing' } });
    fireEvent.submit(input.closest('form'));
    expect(handleAdd).toHaveBeenCalledWith('Aprender testing');
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });

  it('No llama a onAdd si la entrada está vacía o contiene solo espacios en blanco.', () => {
    const handleAdd = vi.fn();
    render(<TodoForm onAdd={handleAdd} />);
    const input = screen.getByPlaceholderText(/agregar nueva tarea/i);
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(input.closest('form'));
    expect(handleAdd).not.toHaveBeenCalled();
  });
}); 