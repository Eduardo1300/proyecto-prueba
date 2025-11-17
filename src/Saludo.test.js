import { render, screen } from '@testing-library/react';
import Saludo from './Saludo';

test('muestra el texto de saludo', () => {
  render(<Saludo />);
  const texto = screen.getByText(/hola, ci\/cd/i);
  expect(texto).toBeInTheDocument();
});
