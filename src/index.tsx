import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//routes
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import CreateTicket from './pages/CreateTicket';
import History from './pages/History';
import TicketManagement from './pages/TicketManagement';
import UserManagement from './pages/UserManagement';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,

  },
  {
    path: "createticket",
    element: <CreateTicket/>,

  },
  {
    path: "history",
    element: <History/>,

  },
  {
    path: "ticketmanagement",
    element: <TicketManagement/>,

  },
  {
    path: "usermanagement",
    element: <UserManagement/>,

  },
])

//render 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
