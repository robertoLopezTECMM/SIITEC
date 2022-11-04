import './index.css'

interface listItem{
    code: string;
    title: string;
    isCareer?: boolean;
}

export const ListItem = ({code, title, isCareer}:listItem) =>{
    return(

        <div className="ListItem">
            <div className="info">
                <span className="code">{code}</span>
                <span className="title">{title}</span>
            </div>
            <div className="icon-group">
                {isCareer ?
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