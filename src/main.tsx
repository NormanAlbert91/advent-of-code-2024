import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Advent1 from "./Advent-1.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <h1>Advent of code 2024</h1>
      <Advent1/>
  </StrictMode>,
)
