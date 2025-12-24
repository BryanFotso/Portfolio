import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/chris bryan fotso tala/i);
  expect(headingElement).toBeInTheDocument();
});
