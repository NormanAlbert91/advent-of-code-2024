import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Advent1 from "./Advent-1.tsx";
import Advent2 from "./Advent-2.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h1>Advent of code 2024</h1>

        <details>
            <summary>Day 1</summary>
            <Advent1/>
        </details>

        <details>
            <summary>Day 2</summary>
            <Advent2/>
        </details>

    </StrictMode>,
)
