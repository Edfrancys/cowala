/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export const getIp = () => 
    fetch('https://ip-fast.com/api/ip/?format=json').then(response => response.json());