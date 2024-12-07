import {FC, useState} from "react";

const Advent5: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    if (puzzleinput !== '') {
        const split = puzzleinput?.toString().split('\n\n');

        const array1 = split[0].split('\n')
        const array2 = split[1].split('\n')
        const array1Numbers: string[][] = [];
        const array2Numbers: string[][] = [];

        array1.forEach((value) => {
            array1Numbers.push(value.split('|'))
        })

        array2.forEach((value) => {
            array2Numbers.push(value.split(','))
        })

        array1Numbers.forEach((value) => {

        })

        console.log(array1Numbers)
        console.log(array2Numbers)

    }

        return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
            <h4>Part 1</h4>
            Result: {0}
            <h4>Part 2</h4>
            Result: {0}
            <hr/>
        </>
    }


export default Advent5