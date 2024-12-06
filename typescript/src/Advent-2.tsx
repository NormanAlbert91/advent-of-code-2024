import {FC, useState} from "react";
import {browser} from "globals";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

const Advent2: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    const split = puzzleinput?.toString().split('\n')

    function checkSortedAsc<T extends number | string>(arr: T[]): boolean {
        return arr.every((value: T, index: number, array: T[]) =>
            index === 0 || Number(value) >= Number(array[index - 1]) &&
            Math.abs(Number(value) - Number(array[index - 1])) <= 3);
    }

    function checkSortedDesc<T extends number | string>(arr: T[]): boolean {
        return arr.every((value: T, index: number, array: T[]) =>
            index === 0 || Number(value) <= Number(array[index - 1]) &&
            Math.abs(Number(value) - Number(array[index - 1])) <= 3);
    }


    let resultPartOne = 0;
    split.forEach((line) => {
        const row = line.split(' ');
        let save = true;
        row.forEach((value, index) => {

            if (index +1 == row.length) {
                return;
            }

            if ((Math.abs(Number(value) - Number(row[index + 1])) > 3 || Number(value) - Number(row[index + 1]) == 0)) {
                save = false
            }

            if (!checkSortedAsc(row) && !checkSortedDesc(row)) {
                save = false;
            }
        });
        if(save) {
            resultPartOne++;
        }
    });

    console.log(resultPartOne)




    let resultPartTwo: number = 0;


    return <>
        <h2>Day 2</h2>
        <textarea rows={10} cols={25} value={puzzleinput} onChange={e => setPuzzleinput(e.target.value)}> </textarea>
        <h4>Part 1</h4>
        Result: {resultPartOne}
        <h4>Part 2</h4>
        Result: {resultPartTwo}
        <hr/>
    </>
}

export default Advent2