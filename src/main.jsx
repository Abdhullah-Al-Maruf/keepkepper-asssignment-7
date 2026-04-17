
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from "./routes/router"
import TimelineContext from './context/TimelineContext';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
       <ToastContainer />
      <RouterProvider router={router} />
    </TimelineContext>
  </StrictMode>,
)
