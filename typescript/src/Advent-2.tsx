import {FC, useState} from "react";

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

    function rowIsSave(row: Array): boolean {
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

        return save;
    }


    let resultPartOne = 0;
    split.forEach((line) => {
        const row = line.split(' ');
        if(rowIsSave(row)) {
            resultPartOne++;
        }
    });

    console.log(resultPartOne)






    let resultPartTwo = 0;
    split.forEach((line, index) => {
        const row = line.split(' ');
        if(rowIsSave(row)) {
            resultPartTwo++;
        } else {
            console.log(index)
            row.some((_value, index) => {
                const rowCopy = [...row];
                rowCopy.splice(index, 1)
                console.log(rowCopy)
                if(rowIsSave(rowCopy)) {
                    console.log('is save: ', rowCopy)
                    resultPartTwo++;

                    return true;
                }
            });
        }
    });


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