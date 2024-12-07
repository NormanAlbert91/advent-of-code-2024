import {FC, useState} from "react";

const Advent3: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    const split = puzzleinput?.toString().match(/mul\(\d+,\d+\)/g)
    let resultPartOne = 0;

    if (split === null) {
        return;
    }

    split.forEach((value) => {
        value = value.replace('mul(', '')
        value = value.replace(')', '')

        const numbers = value.split(',')
        resultPartOne += Number(numbers[0]) * Number(numbers[1])
    });

    return <>
        <textarea rows={10} cols={25} value={puzzleinput} onChange={e => setPuzzleinput(e.target.value)}> </textarea>
        <h4>Part 1</h4>
        Result: {resultPartOne}
        <h4>Part 2</h4>
        Result: xxx
        <hr/>
    </>
}

export default Advent3