import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeftSideBar from "./dashboard/leftsidebar/LeftSideBar";

test('renders the LeftSideBar component', () => {
  render(
      <MemoryRouter>
        <LeftSideBar />
      </MemoryRouter>
  );

  expect(screen.getByAltText('Logo')).toBeInTheDocument();
  expect(screen.getByText('Switch Organisation')).toBeInTheDocument();
});

test('toggles sidebar visibility when hamburger icon is clicked', () => {
  render(
      <MemoryRouter>
        <LeftSideBar />
      </MemoryRouter>
  );

  const hamburger = screen.getByText('≡');
  const sidebar = screen.getByRole('complementary');

  // Sidebar should be initially open
  expect(sidebar).toHaveClass('open');

  fireEvent.click(hamburger);
  expect(sidebar).toHaveClass('closed');

  fireEvent.click(hamburger);
  expect(sidebar).toHaveClass('open');
});

test('toggles dropdown content visibility when dropdown icon is clicked', () => {
  render(
      <MemoryRouter>
        <LeftSideBar />
      </MemoryRouter>
  );

  const dropdownIcon = screen.getByAltText('Drop');
  fireEvent.click(dropdownIcon);

  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('CUSTOMERS')).toBeInTheDocument();

  fireEvent.click(dropdownIcon);
  expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
});
