/* eslint-disable react/react-in-jsx-scope */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, fireEvent } from '@testing-library/react';
import { Main } from './Main';

const response = { ip: 'ip' };

const UrlGetIp = process.env.REACT_APP_API_GETIP || '';

const server = setupServer(
    rest.get(UrlGetIp, (req, res, ctx:any) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

test('calls api on button click and get ip', async () => {
    render(<Main />);

    const buttonIPEl = screen.getByRole('button', {name: 'ENCONTRAR IP'});  
    fireEvent.click(buttonIPEl);

    const inputIp = await screen.findByDisplayValue(response.ip);
    //const inputIp = await screen.getByDisplayValue(response.ip);

    expect(inputIp).toBeInTheDocument;  

});