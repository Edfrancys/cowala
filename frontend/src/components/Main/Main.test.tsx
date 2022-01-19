/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

test('main with inputs and buttons', () => {
    render(<Main />);
    
    const inputNameEl = screen.getByLabelText('Nome');
    const inputProfissaoEl = screen.getByLabelText('Profissão');
    const inputCelularEl = screen.getByLabelText('Celular');
    const inputIpEl = screen.getByLabelText('Meu IP');

    const buttonIPEl = screen.getByRole('button', {name: 'ENCONTRAR IP'});
    const buttonSalvarEl = screen.getByRole('button', {name: 'SALVAR'});
    const buttonLimparEl = screen.getByRole('button', {name: 'LIMPAR'});
     
    expect(inputNameEl).toBeInTheDocument;    
    expect(inputProfissaoEl).toBeInTheDocument;    
    expect(inputCelularEl).toBeInTheDocument;    
    expect(inputIpEl).toBeInTheDocument;    

    expect(buttonIPEl).toBeInTheDocument;    
    expect(buttonSalvarEl).toBeInTheDocument;    
    expect(buttonLimparEl).toBeInTheDocument;    

});