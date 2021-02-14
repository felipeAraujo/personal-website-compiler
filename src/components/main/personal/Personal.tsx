import { CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { DEFAULT_PERSONAL_DATA } from 'code/data/personal/defaults/default-personal-data';
import { Personal as PersonalInterface } from 'code/data/personal/interface/personal';
import React, { useState } from 'react';

const useStyles: (props?: any) => Record<'roundimage', string>
    = makeStyles({
        roundimage: {
            'border-radius': '50%',
        },
    });

interface layoutState {
    personalData: PersonalInterface;
    loading: boolean;
};

function PersonalPresentation({personalData}: {personalData: PersonalInterface}) {
    const style:  Record<'roundimage', string> = useStyles();

    return (
        <>
            <Typography>
                h1. {personalData.name}
                h2. {personalData.role}
            </Typography>

            <img className={style.roundimage} src={personalData.img}></img>

            <p>{personalData.city} - {personalData.state} - {personalData.country}</p>
        </>
    )
}

export function Personal() {
    const [state, setState] = useState<layoutState>({
        personalData: DEFAULT_PERSONAL_DATA,
        loading: true,
    });

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