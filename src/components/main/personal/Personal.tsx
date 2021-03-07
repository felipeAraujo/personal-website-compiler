import React, { MouseEvent, useEffect, useState } from 'react';

import {
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    makeStyles,
    Typography
} from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { DEFAULT_PERSONAL_DATA } from 'code/data/personal/defaults/default-personal-data';
import { Personal as PersonalInterface } from 'code/data/personal/interface/personal';
import { Personal as PersonalRepoInterface } from 'code/repository/interfaces/personal/personal';
import { Personal as PersonalGitRepo } from 'code/repository/github/personal/personal';
import { AxiosImplementation } from 'code/helpers/http/axios/axios-implementation'

import '../../../code/helpers/translation/i18n/config';
import { useTranslation } from 'react-i18next';

const useStyles: (props?: any) => Record<
'roundimage' |
'presentation' |
'website' |
'websitesList' |
'skills' |
'list', string>
    = makeStyles({
        roundimage: {
            borderRadius: '50%',
        },
        presentation: {
            textAlign: 'center',
            paddingTop: '50px',
        },
        website: {

        },
        websitesList: {
            width: '250px',
            margin: 'auto',
        },
        skills: {
            width: '250px',
            margin: 'auto',
            textAlign: 'left',
        },
        list: {
            width: '250px',
            margin: 'auto',
        },
    });

interface layoutState {
    personalData: PersonalInterface;
    loading: boolean;
};

function PersonalPresentation({personalData}: {personalData: PersonalInterface}) {
    const { t } = useTranslation(['personal']);

    const style:  Record<
        'roundimage' |
        'presentation' |
        'website' |
        'websitesList' |
        'skills' |
        'list', string
    > = useStyles();

    const gotoLink = (link: string) => (event: MouseEvent) => {
        window.open(link, '_blank');
    };

    return (
        <div className={style.presentation}>
            <Typography
                variant="h2"
                component="h1"
            >
                {personalData.name}
            </Typography>

            <img
                className={style.roundimage}
                src={personalData.img}
            />

            <Typography
                variant="h4"
                component="h2"
            >
                {personalData.role}
            </Typography>

            <p>{personalData.city} - {personalData.state} - {personalData.country}</p>
            <Divider />
            <div className={style.skills}>
                <Typography
                    variant="h4"
                    component="h1"
                >
                    {t('personal:skills')}
                </Typography>
                <List
                    className={style.list}
                >
                    {personalData.skills.map((value: string): JSX.Element => {
                        return(
                            <ListItem button>
                                <ListItemText primary={value}/>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
            <Divider />
            <div className={style.skills}>
                <Typography
                    variant="h4"
                    component="h1"
                >
                    {t('personal:languages')}
                </Typography>

                <List
                    className={style.list}
                >
                    {personalData.languages.map((value: string): JSX.Element => {
                        return(
                            <ListItem button>
                                <ListItemText primary={value}/>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
            <Divider />
            <div className={style.website}>
                <List
                    className={style.websitesList}
                    subheader={<ListSubheader>{t('personal:websites')}</ListSubheader>}
                >
                    <ListItem
                        onClick={gotoLink(personalData.websites.linkedin)}
                        button
                    >
                        <ListItemText primary="Linkedin"/>
                        <LinkedInIcon />
                    </ListItem>
                    <ListItem
                        onClick={gotoLink(personalData.websites.github)}
                        button
                    >
                        <ListItemText primary="Github"/>
                        <GitHubIcon />
                    </ListItem>
                    <ListItem
                        onClick={gotoLink(personalData.websites.personal)}
                        button
                    >
                        <ListItemText primary="Website"/>
                    </ListItem>
                    <ListItem
                        onClick={gotoLink(personalData.websites.bitbucket)}
                        button
                    >
                        <ListItemText primary="Bitbucket"/>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export function Personal() {
    const [state, setState] = useState<layoutState>({
        personalData: DEFAULT_PERSONAL_DATA,
        loading: true,
    });

    const personalRepo: PersonalRepoInterface = new PersonalGitRepo(new AxiosImplementation());

    useEffect((): void => {
        personalRepo.updateData();
        personalRepo.addNotification(onDataChange);
    }, [])

    function onDataChange(personalData: PersonalInterface) {
        setState({
            personalData: personalData,
            loading: false,
        });
    }


    const formStates = [
        <PersonalPresentation personalData={state.personalData} />,
        <CircularProgress/>,
    ]

    return (
        <div className="personal">
            { formStates[state.loading ? 1 : 0] }
        </div>
    );
}
