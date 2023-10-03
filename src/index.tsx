import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CreateTicket from './components/pages/CreateTicket';
import History from './components/pages/History';
import TicketManagement from './components/pages/TicketManagement';
import UserManagement from './components/pages/UserManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTicket/>,

  },
  {
    path: "/",
    element: <History/>,

  },
  {
    path: "/",
    element: <TicketManagement/>,

  },
  {
    path: "/",
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
