import {FC, useState} from "react";

const Advent3: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    const split = puzzleinput?.toString().split('\n');
    if (split === null) {
        return;
    }
    const array: string[][] = [];
    split.forEach((value) => {
        array.push(value.toString().split(''));
    })



    // const helper = [
    //     ['S', 0 , 0 ,'S', 0 , 0 ,'S'],
    //     [ 0 ,'A', 0 ,'A', 0 ,'A', 0 ],
    //     [ 0 , 0 ,'M','M','M', 0 , 0 ],
    //     ['S','A','M','X','M','A','S'],
    //     [ 0 , 0 ,'M','M','M', 0 , 0 ],
    //     [ 0 ,'A', 0 ,'A', 0 ,'A', 0 ],
    //     ['S', 0 , 0 ,'S', 0 , 0 ,'S'],
    // ]

    function inkrement(zahl: number) {
        if (zahl > 0) {
            return zahl + 1; // z.B. 4 -> 5
        } else if (zahl < 0) {
            return zahl - 1; // z.B. -4 -> -5
        } else {
            return 0;
        }
    }



    function checkLetter(array: string[][], possitionXx = 0, possitionXy = 0, y: number = 0, x: number = 0): boolean {


        const expectedLetter: string[] = ['M', 'A', 'S']

        let found = false;
        for (let i = 0; i < expectedLetter.length; i++) {

            if (possitionXx + x < 0) {
                return false;
            }
            if (possitionXy + y < 0) {
                return false;
            }
            if (possitionXx + x > array[0].length-1) {
                return false;
            }
            if (possitionXy + y > array.length-1) {
                return false;
            }
            if (array[possitionXy+y][possitionXx+x] === expectedLetter[i]) {
                found = true
            } else {
                return false;
            }
            y = inkrement(y);
            x = inkrement(x);
        }

        return found;
    }

    let found = 0;
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[0].length; x++) {
            if (array[y][x] === 'X') {
                //hoch-gerade
                if (checkLetter(array, x, y, 0, 1)) {
                    found++;
                }
                //runter gerade
                if (checkLetter(array, x, y, 0, -1)) {
                    found++;
                }
                //rechts gerade
                if (checkLetter(array, x, y, 1, 0)) {
                    found++;
                }
                //links gerade
                if (checkLetter(array, x, y, -1, 0)) {
                    found++;
                }
                //rechts diagonal hoch
                if (checkLetter(array, x, y, 1, 1)) {
                    found++;
                }
                //links diagonal runter
                if (checkLetter(array, x, y, -1, -1)) {
                    found++;
                }
                //rechts diagonal runter
                if (checkLetter(array, x, y, 1, -1)) {
                    found++;
                }

                //links diagonal hoch
                if (checkLetter(array, x, y, -1, 1)) {
                    found++;
                }
            }
        }
    }

    return <>
        <textarea rows={10} cols={25} value={puzzleinput} onChange={e => setPuzzleinput(e.target.value)}> </textarea>
        <h4>Part 1</h4>
        Result: {found}
        <h4>Part 2</h4>
        Result: xx
        <hr/>
    </>
}

export default Advent3