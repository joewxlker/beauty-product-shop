import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateAccount from './UserAuth/Signup/CreateAccount';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useSetBool from './Hooks/setBoolean';

const Index = () => {
  const [bool, setBool] = useSetBool();

 return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={
         <App bool={bool} onToggle={setBool} />
       } />
       <Route path="/createaccount" element={
         <CreateAccount bool={bool} onToggle={setBool} />
       } />
       <Route path="*" element={
         <main
           style={{ padding: "1rem" }}>
           <p>There's nothing here!</p>
         </main>
       } />
      </Routes>
   </BrowserRouter>
 )
    // <App/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
