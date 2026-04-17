
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from "./routes/router"
import TimelineContext from './context/TimelineContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
      <RouterProvider router={router} />
    </TimelineContext>
  </StrictMode>,
)
