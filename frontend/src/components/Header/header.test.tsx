/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('header with logo and imagetextlogo', () => {
    render(<Header />);

    //const formEl = screen.getByRole('button');
    const imageLogoEl = screen.getByAltText('Logo Cowala');
    const imageLogoTextEl = screen.getByAltText('Logo Cowala Software');

    //expect(formEl).toBeInTheDocument;
    expect(imageLogoEl).toBeInTheDocument;
    expect(imageLogoTextEl).toBeInTheDocument;
});