import React from 'react';
import { Button } from '../Button/Button';
import { Section, Content, Group, Form, Row } from './main.style';

export const Main: React.FC = () => {
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
                            <input id='celular' type='text' name='celular'/>
                        </Group>
                    </Row>

                    <Row justifyContent='space-between' >
                        <Group className='ip'>
                            <label htmlFor='ip' >Meu IP</label>
                            <input id='ip' type='text' name='ip'/>
                        </Group>
                        <Button className='ip' backgroundColor='var(--secondaryColor)' color='var(--textButonSecondary)' >ENCONTRAR IP</Button>
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