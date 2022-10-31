import './index.css'

import React from 'react'

interface listItem{
    code: string;
    title: string;
    isCarrera?: boolean;
}

export const ListItem = ({code, title, isCarrera}:listItem) => {

    return(

        <div className="ListItem">
            <div className="info">
                <span className="code">{code}</span>
                <span className="title">{title}</span>
            </div>
            <div className="icon-group">
                {isCarrera ?
                <div className="user_info-video">
                    <i className="active material-icons">{'newspaper'}</i>
                    <i className="active material-icons">{'movie'}</i>
                    <i className="inactive material-icons">{'movie'}</i>
                </div>

                : null }

                <i className="trash material-icons">{'delete'}</i>

            </div>
        </div>

    );
}