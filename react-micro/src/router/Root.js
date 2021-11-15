import React , { createContext, useContext }from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../common/App';
import Header from '../components/Header';
import Counter from '../store/counter/CounterStore';


const CounterContext = createContext();

export const useCounter = () => {
    const result = useContext(CounterContext);
    return result;
}




const Root = () => {
    const counter = new Counter();
    return(
    <BrowserRouter> 
        <Header/>
        <CounterContext.Provider value={counter}>
            <App/>
        </CounterContext.Provider>
    </BrowserRouter>
)};

export default Root;