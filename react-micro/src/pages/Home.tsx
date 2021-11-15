import React from 'react';

import Counter from 'components/counter/Counter';
import { useCounter } from 'router/Root';



const Home = () => {
    const myCounter = useCounter();
    return (
        <div>
            <h2>
                홈
            </h2>
            <Counter counter={myCounter} />
        </div>
    );
};

export default Home;