/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';

import App  from './App';

test('header with logo and imagetextlogo, form, buttons', () => {
    render(<App />);

    const formEl = screen.getByRole('button');
    const imageLogoEl = screen.getAllByAltText('Logo Cowala');
    const imageLogoTextEl = screen.getAllByAltText('Logo Cowala Software');

    expect(formEl).toBeInTheDocument;
    expect(imageLogoEl).toBeInTheDocument;
    expect(imageLogoTextEl).toBeInTheDocument;
});