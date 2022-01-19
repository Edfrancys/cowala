/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Button } from '../Button/Button';
import { Section, Content, Group, Form, Row } from './main.style';

import { getIp } from '../../services/getIp';

export const Main: React.FC = () => {

    const [ip, setIp] = useState<string>('');
    const [celular, setCelular] = useState<string>('');

    const handlerClick = async () => {
        const ip = await getIp();
        console.log(ip);
        setIp(ip.ip);       
    };

    const handlerChange = (event:React.ChangeEvent<HTMLInputElement>) => {        
        setCelular(event.target.value);
    };
    
    return (
        <Section>
            <Content>
                <Form>
                    <Group>
                        <label htmlFor='name'>Nome</label>
                        <input id='name' type='text' name='name'/>
                    </Group>

                    <Row justifyContent='space-between' >
                        <Group>
                            <label htmlFor='profissao' >Profissão</label>
                            <input id='profissao' type='text' name='profissao'/>
                        </Group>

                        <Group>
                            <label htmlFor='celular' >Celular</label>                            
                            <InputMask mask="99 99999-9999" id='celular' name='celular'  value={celular} onChange={handlerChange}  />
                        </Group>
                    </Row>

                    <Row justifyContent='space-between' >
                        <Group className='ip'>
                            <label htmlFor='ip' >Meu IP</label>
                            <input id='ip' type='text' name='ip' value={ip} disabled/>
                        </Group>
                        <Button onClick={() => handlerClick()} className='ip' backgroundColor='var(--secondaryColor)' color='var(--textButonSecondary)' >ENCONTRAR IP</Button>
                    </Row>

                    <Row justifyContent='center' >
                        <Button backgroundColor='var(--primaryColor)' color='var(--textButonPrimary)' >SALVAR</Button>
                        <Button backgroundColor='var(--primaryColor)' color='var(--textButonPrimary)' >LIMPAR</Button>                       
                    </Row>
                </Form>
            </Content>
        </Section>
    );
};