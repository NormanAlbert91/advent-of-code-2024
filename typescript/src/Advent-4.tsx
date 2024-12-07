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

    function checkLetter(array: string[][], possitionXx = 0, possitionXy = 0,  letter: string, y: number = 0, x: number = 0): boolean {
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
        return array[possitionXy+y][possitionXx+x] === letter;
    }

    let found = 0;
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[0].length; x++) {
            if (array[y][x] === 'X') {
                //hoch-gerade
                if (checkLetter(array, x, y, 'M', 0, 1)) {
                    if (checkLetter(array, x, y, 'A', 0, 2)) {
                        if (checkLetter(array, x, y, 'S', 0, 3)) {
                            found++;
                        }
                    }
                }
                //runter gerade
                if (checkLetter(array, x, y, 'M', 0, -1)) {
                    if (checkLetter(array, x, y, 'A', 0, -2)) {
                        if (checkLetter(array, x, y, 'S', 0, -3)) {
                            found++;
                        }
                    }
                }
                //rechts gerade
                if (checkLetter(array, x, y, 'M', 1, 0)) {
                    if (checkLetter(array, x, y, 'A', 2, 0)) {
                        if (checkLetter(array, x, y, 'S', 3, 0)) {
                            found++;
                        }
                    }
                }
                //linksgerade
                if (checkLetter(array, x, y, 'M', -1, 0)) {
                    if (checkLetter(array, x, y, 'A', -2, 0)) {
                        if (checkLetter(array, x, y, 'S', -3, 0)) {
                            found++;
                        }
                    }
                }
                //rechts diagonal hoch
                if (checkLetter(array, x, y, 'M', 1, 1)) {
                    if (checkLetter(array, x, y, 'A', 2, 2)) {
                        if (checkLetter(array, x, y, 'S', 3, 3)) {
                            found++;
                        }
                    }
                }
                //links diagonal runter
                if (checkLetter(array, x, y, 'M', -1, -1)) {
                    if (checkLetter(array, x, y, 'A', -2, -2)) {
                        if (checkLetter(array, x, y, 'S', -3, -3)) {
                            found++;
                        }
                    }
                }
                //rechts diagonal runter
                if (checkLetter(array, x, y, 'M', 1, -1)) {
                    if (checkLetter(array, x, y, 'A', 2, -2)) {
                        if (checkLetter(array, x, y, 'S', 3, -3)) {
                            found++;
                        }
                    }
                }

                //links diagonal hoch
                if (checkLetter(array, x, y, 'M', -1, 1)) {
                    if (checkLetter(array, x, y, 'A', -2, 2)) {
                        if (checkLetter(array, x, y, 'S', -3, 3)) {
                            found++;
                        }
                    }
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