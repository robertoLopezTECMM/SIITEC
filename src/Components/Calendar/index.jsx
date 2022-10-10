import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, setOptions, localeEs } from '@mobiscroll/react';

setOptions({
    locale: localeEs,
    theme: 'ios',
    themeVariant: 'light'
});

const now = new Date();
const myData = [{
    title: 'Fixed event',
    start: new Date(now.getFullYear(), now.getMonth(), 18),
    end: new Date(now.getFullYear(), now.getMonth(), 19),
    color: '#9e9e9e',
    editable: false
}, {
    title: 'Drag me',
    start: new Date(now.getFullYear(), now.getMonth(), 3),
    end: new Date(now.getFullYear(), now.getMonth(), 5),
    color: '#cc9900'
}, {
    title: 'Resize me',
    start: new Date(now.getFullYear(), now.getMonth(), 24),
    end: new Date(now.getFullYear(), now.getMonth(), 29),
    color: '#ca4747'
}, {
    title: 'Move me around',
    start: new Date(now.getFullYear(), now.getMonth(), 11),
    end: new Date(now.getFullYear(), now.getMonth(), 14),
    color: '#339966'
}];

function Calendar() {
    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);

    return (
        <Eventcalendar
            data={myData}
            view={view}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            dragTimeStep={15}
            clickToCreate
       />
    ); 
}

export default Calendar;