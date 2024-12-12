import {FC, useState} from "react";

const Advent6: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');
    let partOne = 0;


    if (puzzleinput !== '') {
        const trimPuzzle = puzzleinput.trim();
        const array = trimPuzzle.split('\n');
       const math: any[] = [];
       array.forEach((value) => {
           const rows = value.split(':')
           const numbers = rows[1].trim().split(' ')
           math.push([rows[0], numbers])
       })

        type Operation = '+' | '*';

       math.forEach((value) => {
           if (checkTargetCombinations(Number(value[0]), value[1])) {
               partOne += Number(value[0]);
           }
       });


        function checkTargetCombinations(x: number, numbers: string[]): boolean {
            function generateOperationCombinations(length: number): Operation[][] {
                if (length === 0) return [[]];

                const prevCombinations = generateOperationCombinations(length - 1);
                const addOperations: Operation[][] = prevCombinations.map(combo => [...combo, '+']);
                const multiplyOperations: Operation[][] = prevCombinations.map(combo => [...combo, '*']);

                return [...addOperations, ...multiplyOperations];
            }

            function calculateResult(numbers: string[], operations: Operation[]): number {
                let result = Number(numbers[0]);

                for (let i = 1; i < numbers.length; i++) {
                    if (operations[i - 1] === '+') {
                        result += Number(numbers[i]);
                    } else {
                        result *= Number(numbers[i]);
                    }
                }

                return result;
            }

            const operationCombinations = generateOperationCombinations(numbers.length - 1);

            for (const operations of operationCombinations) {
                const result = calculateResult(numbers, operations);

                if (result === x) {
                    return true;
                }
            }

            return false;
        }

    }

        return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
            <h4>Part 1</h4>
            Result: {partOne}
            <h4>Part 2</h4>
            Result: {0}
            <hr/>
        </>
    }


export default Advent6