/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import { Button } from '../Button/Button';
import { Section, Content, Group, Form, Row } from './main.style';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getIp } from '../../services/getIp';

type Inputs = {
    ip: string;
    name: string;
    profissao: string;
    celular: string;
  };

export const Main: React.FC = () => {

    const { register, handleSubmit, reset , watch, setValue, formState: { errors } } = useForm<Inputs>();    
    const ipRef = useRef(null);    

    useEffect(() => {
        const dataUser:any = localStorage.getItem('@cowala-app/datauser');
        if (dataUser) {
            const dataUserJson:Inputs = JSON.parse(dataUser);
        
            setValue('name', dataUserJson.name);
            setValue('profissao', dataUserJson.profissao);
            setValue('celular', dataUserJson.celular);
            setValue('ip', dataUserJson.ip);
        }      
    },[]);

    const handlerGetIp = async () => {   
            
        const ip = await getIp();
        if(ipRef.current != ip.ip){            
            setValue('ip', ip.ip);
            ipRef.current = ip.ip;
        }                       
    };

    const handlerChange = (event:React.ChangeEvent<HTMLInputElement>) => {        
        setValue('celular', event.target.value);        
    };

    const onSubmit: SubmitHandler<Inputs> = data => {
        localStorage.setItem('@cowala-app/datauser', JSON.stringify(data));
        window.alert('Seus dados estão salvo \n' + data.name );               
    };       

    const handlerResetAll = () => {
        localStorage.removeItem('@cowala-app/datauser');
        reset({
            name: '',
            profissao: '',
            celular: '',
            ip: ''
        });
        ipRef.current = null;          
    };
    
    return (
        <Section>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Group>
                        <label htmlFor='name'>Nome</label>
                        <input {...register('name')} value={watch('name')} id='name' type='text' name='name'/>
                    </Group>

                    <Row justifyContent='space-between' >
                        <Group>
                            <label htmlFor='profissao' >Profissão</label>
                            <input {...register('profissao')} value={watch('profissao')} id='profissao' type='text' name='profissao'/>
                        </Group>

                        <Group>
                            <label htmlFor='celular' >Celular</label>                            
                            <InputMask {...register('celular')} mask="(99) 99999-9999" id='celular' name='celular'  value={watch('celular')} onChange={handlerChange}  />
                        </Group>
                    </Row>

                    <Row justifyContent='space-between' >
                        <Group className='ip'>
                            <label htmlFor='ip' >Meu IP</label>
                            <input {...register('ip')} value={watch('ip')} ref={ipRef} id='ip' type='text' name='ip' disabled/>
                            {errors.ip && <span>This field is required</span>}
                        </Group>
                        <Button onClick={handleSubmit(handlerGetIp)} className='ip' backgroundColor='var(--secondaryColor)' color='var(--textButonSecondary)' >ENCONTRAR IP</Button>
                    </Row>

                    <Row justifyContent='center' >
                        <Button type="submit" backgroundColor='var(--primaryColor)' color='var(--textButonPrimary)' >SALVAR</Button>
                        <Button onClick={handleSubmit(handlerResetAll)} backgroundColor='var(--primaryColor)' color='var(--textButonPrimary)' >LIMPAR</Button>                       
                    </Row>
                </Form>
            </Content>
        </Section>
    );
};