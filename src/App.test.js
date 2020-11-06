import React from 'react';
import { render, screen  } from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import App from './App';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter })
};

test('render App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/OSMCha/i);
  expect(linkElement).toBeInTheDocument();
});

test('Filter', () => {
  renderWithRouter(<App />, { route: '/filter' });

  expect(screen.getByText(/Filter/i)).toBeInTheDocument();
});

test('unknown URL', () => {
  renderWithRouter(<App />, { route: '/unknown/url' });

  expect(screen.getByText(/HOME/i)).toBeInTheDocument();
});

/*test('full app rendering', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Home/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/neuer Filter/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/Neuer Filter/i)).toBeInTheDocument()
});*/
