import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeftSideBar from "./dashboard/leftsidebar/LeftSideBar";
import Navbar from "./dashboard/navbar/Navbar";
import MainBar from "./dashboard/mainbar/MainBar";
import axios from "axios";

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

    const hamburger = screen.getByText(/☰/i);
    const sidebar = screen.getByTestId('left-sidebar');

    fireEvent.click(hamburger);
    expect(sidebar).toHaveClass('closed');

    // Click to close the sidebar
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


describe('Navbar Component', () => {
    test('renders the logo', () => {
        render(<Navbar />);
        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();
    });

    test('renders the search input', () => {
        render(<Navbar />);
        const searchInput = screen.getByPlaceholderText(/search for anything/i);
        expect(searchInput).toBeInTheDocument();
    });

    test('renders the Docs link', () => {
        render(<Navbar />);
        const docsLink = screen.getByText(/docs/i);
        expect(docsLink).toBeInTheDocument();
    });

    test('renders the bell icon', () => {
        render(<Navbar />);
        const bellIcon = screen.getByAltText(/bell icon/i);
        expect(bellIcon).toBeInTheDocument();
    });

    test('renders the profile image', () => {
        render(<Navbar />);
        const profileImage = screen.getByAltText(/profile/i);
        expect(profileImage).toBeInTheDocument();
    });

    test('renders the user name', () => {
        render(<Navbar />);
        const userName = screen.getByText(/adedeji/i);
        expect(userName).toBeInTheDocument();
    });
});
