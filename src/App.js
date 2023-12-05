import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


//this is main App Layout Component
const AppLayout = () =>{
    return(
        <div className='app'>
        <Header/>
        <Body/>
        </div>
    )
}
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>)                