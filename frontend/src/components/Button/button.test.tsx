/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';


test('render button white text', () => {
    render(<Button color={''} backgroundColor={''} />);

    const buttonIPEl = screen.getByRole('button');   
 
    expect(buttonIPEl).toBeInTheDocument;    
});

test('calls a callback when button is pressed', () => {

    const callback = jest.fn();

    render(<Button onClick={callback} color={''} backgroundColor={''} />);

    const buttonIPEl = screen.getByRole('button');      
    fireEvent.click(buttonIPEl);
 
    expect(callback).toHaveBeenCalledTimes(1);    
});