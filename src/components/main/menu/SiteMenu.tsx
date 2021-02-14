import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import React, { Fragment, useState } from 'react';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    closeList: {
        width: 250,
        position: 'absolute',
        bottom: 0,
    },
    closeButton: {
        color: 'blue',
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
                    </List>
                    <Divider />
                    <List
                        className={classes.closeList}
                        role="presentation"
                    >
                        <ListItem
                            button
                            onClick={closeMenu}
                        >
                            <ListItemIcon className={classes.closeButton}><ExitToAppRoundedIcon /></ListItemIcon>
                            <ListItemText primary="Fechar" color="secundary"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Fragment>
    );
}
