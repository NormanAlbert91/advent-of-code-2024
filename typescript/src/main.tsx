import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Advent1 from "./Advent-1.tsx";
import Advent2 from "./Advent-2.tsx";
import Advent3 from "./Advent-3.tsx";
import Advent4 from "./Advent-4.tsx";
import Advent5 from "./Advent-5.tsx";
import Advent6 from "./Advent-6.tsx";
import Advent7 from "./Advent-7.tsx";

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

        <details>
            <summary>Day 3</summary>
            <Advent3/>
        </details>

        <details>
            <summary>Day 4</summary>
            <Advent4/>
        </details>

        <details>
            <summary>Day 5</summary>
            <Advent5/>
        </details>

        <details>
            <summary>Day 6</summary>
            <Advent6/>
        </details>

        <details>
            <summary>Day 7</summary>
            <Advent7/>
        </details>
    </StrictMode>,
)
