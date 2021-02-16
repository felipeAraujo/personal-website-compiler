import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import LanguageIcon from '@material-ui/icons/Language';

import React, { Dispatch, SetStateAction, Fragment, useState } from 'react';

const useStyles: (props?: any) => Record<'menu' | 'list' | 'closeList' | 'closeButton', string>
    = makeStyles({
        menu: {
            position: 'fixed',
            marginTop: '10px',
            marginLeft: '30px',
        },
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
    const classes: Record<'menu' | 'list' | 'closeList' | 'closeButton', string> = useStyles();

    const [drawerState, setDrawerState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    function openMenu(): void {
        toggleDrawer(true);
    }

    function closeMenu(): void {
        toggleDrawer(false);
    }

    function toggleDrawer(open: boolean): void {
        setDrawerState(open);
    };

    return (
        <div className={classes.menu}>
            <Button onClick={openMenu} variant="contained" color="primary">Menu</Button>
            <Drawer anchor="left" open={drawerState}>
                <div
                    className={classes.list}
                    id="menuItem"
                    role="presentation"
                >
                    <List subheader={<ListSubheader>Menu</ListSubheader>}>
                        <ListItem button>
                            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
                            <ListItemText primary="Idiomas" />
                        </ListItem>
                    </List>
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
                            <ListItemText primary="Fechar"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
