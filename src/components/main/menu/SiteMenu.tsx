import { Button, Collapse, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';

import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import LanguageIcon from '@material-ui/icons/Language';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import '../../../code/helpers/translation/i18n/config';
import brazilFlag from '../../../assets/imgs/brazil.png';
import ukFlag from '../../../assets/imgs/united-kingdom.png';
import { useTranslation } from 'react-i18next';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { languageNotifier } from 'code/helpers/translation/i18n/notifier';

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

    const [mounted, setMounted] = useState(false)

    if(!mounted){
        window.addEventListener("keyup", function(this: Window, event: KeyboardEvent): any {
            if (event.key !== 'Escape') {
                return;
            }

            closeMenu();
        })
    }

    useEffect(() =>{
      setMounted(true)
    },[])

    const { t, i18n } = useTranslation(['menu']);

    const classes: Record<'menu' | 'list' | 'closeList' | 'closeButton', string> = useStyles();

    const [drawerState, setDrawerState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    const [openLanguages, setOpenLanguages] = useState<boolean>(false);

    languageNotifier.addNotification(onLanguageChange);

    function onLanguageChange(language: string) {
        i18n.changeLanguage(language);
    }

    function openMenu(): void {
        toggleDrawer(true);
    }

    function closeMenu(): void {
        toggleDrawer(false);
    }

    function toggleDrawer(open: boolean): void {
        setDrawerState(open);
    };

    function openCloseLanguagesMenu(): void {
        setOpenLanguages(!openLanguages);
    }

    const changeLanguage = (language: string): (() => void) => {
        return () => {
            languageNotifier.notify(language);
        }
    };

    return (
        <div className={classes.menu}>
            <Button onClick={openMenu} variant="contained" color="primary">{t('menu:name')}</Button>
            <Drawer anchor="left" open={drawerState}>
                <div
                    className={classes.list}
                    id="menuItem"
                    role="presentation"
                >
                    <List subheader={<ListSubheader>Menu</ListSubheader>}>
                        <ListItem button onClick={openCloseLanguagesMenu}>
                            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
                            <ListItemText primary={t('menu:languages')} />
                            {openLanguages ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openLanguages} unmountOnExit>
                            <List component="div">
                                <ListItem button onClick={changeLanguage('pt-br')}>
                                    <ListItemIcon>
                                        <img src={brazilFlag} alt={t('menu:portuguese')} width="25" height="25"/>
                                    </ListItemIcon>
                                    <ListItemText primary={t('menu:portuguese')}></ListItemText>
                                </ListItem>
                                <ListItem button onClick={changeLanguage('en')}>
                                    <ListItemIcon>
                                        <img src={ukFlag} width="25" alt={t('menu:english')} height="25"/>
                                    </ListItemIcon>
                                    <ListItemText primary={t('menu:english')}></ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* <ListItem button>
                            <ListItemIcon> <InfoIcon /> </ListItemIcon>
                            <ListItemText primary={t('menu:about')} />
                        </ListItem> */}
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
                            <ListItemText primary={t('menu:close')}/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
