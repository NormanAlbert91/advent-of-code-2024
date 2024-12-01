import {FC, useState} from "react";

const Advent1: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    const split = puzzleinput?.toString().split('\n')
    const firstNumbers: number[] = [];
    const secondNumbers: number[] = [];

    split.forEach(item => {
        const [first, second] = item.split(/\s+/).map(Number);
        firstNumbers.push(first);
        secondNumbers.push(second);
    });


    const sortedFirstRow = firstNumbers.sort();
    const sortedSecondRow = secondNumbers.sort();

    let resultPartOne: number = 0;
    const difference = function (a: number, b: number) { return Math.abs(a - b); }

    for (const { index, value } of sortedFirstRow.map((value, index) => ({ index, value }))) {
        resultPartOne = resultPartOne + difference(value, sortedSecondRow[index]);
    }



    let resultPartTwo: number = 0;
    const counts: Array<number> = [];

    console.log(counts)

    sortedSecondRow.forEach(function (x: number) { counts[x] = (counts[x] || 0) + 1; });
    for (const { value } of sortedFirstRow.map((value) => ({ value }))) {
        if (counts[value] !== undefined) {
            resultPartTwo = resultPartTwo + (value * counts[value]);
        }
    }

    return <>
        <h2>Day 1</h2>
        <textarea rows={10} cols={25} value={puzzleinput} onChange={e => setPuzzleinput(e.target.value)}> </textarea>
        <h4>Part 1</h4>
        Result: {resultPartOne}
        <h4>Part 2</h4>
        Result: {resultPartTwo}
        <hr/>
        <hr/>
    </>
}

export default Advent1