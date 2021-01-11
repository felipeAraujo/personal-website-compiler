import React from 'react';
import { Personal } from 'views/sections/personal/personal';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Personal/>
            </div>
        );
    }
}