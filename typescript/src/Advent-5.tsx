import {FC, useState} from "react";

const Advent5: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');
    let result = 0;

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

        const found: string[][] = []
        const incorrect: string[][] = []
        array2Numbers.forEach((value1) => {
            let founds = 0
            for (let i = 0; i < value1.length; i++) {
                if (i+1 == value1.length) {
                    return;
                }
                const searchArray: string[] = [value1[i], value1[i+1]]

                array1Numbers.forEach((value2) => {
                    if (JSON.stringify(value2) == JSON.stringify(searchArray)) {
                        founds ++;
                        return;
                    }
                })
                if (founds === value1.length - 1) {
                    found.push(value1)
                } else {
                    incorrect.push(value1)
                }
            }
        })

        incorrect.forEach((value) => {
            console.log(value)
        });

        found.forEach((value) => {
            const middle = (value.length - 1) / 2

            result += Number(value[middle])
        })

    }

        return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
            <h4>Part 1</h4>
            Result: {result}
            <h4>Part 2</h4>
            Result: {0}
            <hr/>
        </>
    }


export default Advent5