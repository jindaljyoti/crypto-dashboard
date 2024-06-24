
import './App.css'

import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/TransactionPage'
import Support from './pages/Support/Support'
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  )
}

export default App