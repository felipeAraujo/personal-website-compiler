import { Breadcrumbs, Button, Container, Drawer, Link, Typography } from '@material-ui/core';
import React from 'react';
import { SiteMenu } from './menu/SiteMenu';

import { Personal } from './personal/Personal';

export function Main() {
    return (
        <Container>
            <SiteMenu/>
            <Personal/>
        </Container>
    );
}