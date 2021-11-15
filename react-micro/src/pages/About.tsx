import React from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router-dom';
import { useCounter } from 'router/Root';


interface MatchParams {
    name: string;
}

  

const About = ({location, match}: RouteComponentProps<MatchParams>) => {
    const query = queryString.parse(location.search);

    const myCounter = useCounter();

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
            {myCounter.number}
        </div>
    );
};

export default About;