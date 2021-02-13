import { Container } from '@material-ui/core';
import React from 'react';

import { Personal } from './personal/personal';

export function Main() {
    return (
        <Container maxWidth="sm">
            <Personal/>
        </Container>
    );
}