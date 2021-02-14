import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import React, { Fragment, useState, KeyboardEvent } from 'react';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
});
  

export function SiteMenu() {
    const classes = useStyles();

    const [state, setState] = useState({
        drawerState:false,
    });

    function openMenu(): void {
        toggleDrawer(true);
    }

    function closeMenu(): void {
        toggleDrawer(false);
    }

    function toggleDrawer(open: boolean): void {
        setState({
            ...state,
            drawerState: open,
        });
    };

    return (
        <Fragment key="menu">
            <Button onClick={openMenu} variant="contained" color="primary">Menu</Button>
            <Drawer anchor="left" open={state.drawerState}>
                <div
                    className={classes.list}
                    id="menuItem"
                    role="presentation"
                >
                    <List>
                        <ListItem button>
                            <ListItemIcon> <InfoIcon /> </ListItemIcon>
                            <ListItemText primary="Sobre" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            button
                            onClick={closeMenu}
                        >
                            <ListItemIcon><CloseRoundedIcon /></ListItemIcon>
                            <ListItemText primary="Fechar" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Fragment>
    );
}
