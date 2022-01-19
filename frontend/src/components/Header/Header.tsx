import React from 'react';
import { Container } from './style';

import imgLogo from '../../images/logo-cowala.png';
import imgLogoText from '../../images/cowala-software.png';

export const Header: React.FC = () => {
    return (
        <Container>
            <img className='logo' src={imgLogo} alt="Logo Cowala" />
            <img className='logoSencondary' src={imgLogoText} alt="Logo Cowala Software" />
        </Container>
    );
};

