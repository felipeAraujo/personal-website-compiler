import { Box, Container } from '@material-ui/core';
import React from 'react';
import { SiteMenu } from './menu/SiteMenu';

import { Personal } from './personal/Personal';

export function Main() {
    return (
        <Box>
            <SiteMenu/>
            <Personal/>
        </Box>
    );
}