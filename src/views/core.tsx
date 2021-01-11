import React from 'react';

import { Main } from 'views/main/main';

export class Core extends React.Component {
    render() {
        return (
            <div>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <Main />
            </div>
        );
    }
}