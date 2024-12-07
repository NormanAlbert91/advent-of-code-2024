import {FC, useState} from "react";

const Advent4: FC = () => {
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

    function inkrement(zahl: number): number {
        if (zahl > 0) {
            return zahl + 1; // z.B. 4 -> 5
        } else if (zahl < 0) {
            return zahl - 1; // z.B. -4 -> -5
        } else {
            return 0;
        }
    }

    function isOutOfBounce(array: string[][], possitionXx = 0, possitionXy = 0, yBounce: number = 0, xBounce: number = 0): boolean {

        if (possitionXx + xBounce < 0) {
            return true;
        }
        if (possitionXy + yBounce < 0) {
            return true;
        }
        if (possitionXx + xBounce > array[0].length - 1) {
            return true;
        }
        if (possitionXy + yBounce > array.length - 1) {
            return true;
        }

        return false;

    }


    function checkLetter(array: string[][], possitionXx = 0, possitionXy = 0, yLetterCheck: number = 0, xLetterCheck: number = 0): boolean {


        const expectedLetter: string[] = ['M', 'A', 'S']
        let checky = yLetterCheck.valueOf();
        let checkx = xLetterCheck.valueOf();

        let found = false;
        for (let i = 0; i < expectedLetter.length; i++) {

            if (isOutOfBounce(array, possitionXx, possitionXy, checky, checkx)) {
                return false;
            }

            if (array[possitionXy + checky][possitionXx + checkx] === expectedLetter[i]) {
                found = true
            } else {
                return false;
            }
            checky = inkrement(checky);
            checkx = inkrement(checkx);
        }

        return found;
    }

    let found = 0;

    let foundPart2 = 0
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


            if(array[y][x] === 'A') {
                //links->rechts
                if (checkLetter2(array,'M', x, y, -1, -1)) {
                    if (checkLetter2(array,'M', x, y, -1, 1)) {
                        if (checkLetter2(array,'S', x, y, 1, 1)) {
                            if (checkLetter2(array,'S', x, y, 1, -1)) {
                                foundPart2++
                            }
                        }
                    }
                }

                //rechts->links
                if (checkLetter2(array,'S', x, y, -1, -1)) {
                    if (checkLetter2(array,'S', x, y, -1, 1)) {
                        if (checkLetter2(array,'M', x, y, 1, 1)) {
                            if (checkLetter2(array,'M', x, y, 1, -1)) {
                                foundPart2++
                            }
                        }
                    }
                }

                //hoch->runter
                if (checkLetter2(array,'M', x, y, -1, -1)) {
                    if (checkLetter2(array,'S', x, y, -1, 1)) {
                        if (checkLetter2(array,'S', x, y, 1, 1)) {
                            if (checkLetter2(array,'M', x, y, 1, -1)) {
                                foundPart2++
                            }
                        }
                    }
                }

                //runter->hoch
                if (checkLetter2(array,'S', x, y, -1, -1)) {
                    if (checkLetter2(array,'M', x, y, -1, 1)) {
                        if (checkLetter2(array,'M', x, y, 1, 1)) {
                            if (checkLetter2(array,'S', x, y, 1, -1)) {
                                foundPart2++
                            }
                        }
                    }
                }

            }
        }
    }


        function checkLetter2(array: string[][], letter: string, possitionXx = 0, possitionXy = 0, xLetterCheck2: number = 0, yLetterCheck2: number = 0): boolean {
            if (isOutOfBounce(array, possitionXx, possitionXy, yLetterCheck2, xLetterCheck2)) {
                return false;
            }
            return array[possitionXy+yLetterCheck2][possitionXx+xLetterCheck2] === letter;
        }




        return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
            <h4>Part 1</h4>
            Result: {found}
            <h4>Part 2</h4>
            Result: {foundPart2}
            <hr/>
        </>
    }


export default Advent4