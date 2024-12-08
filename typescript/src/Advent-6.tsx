import {FC, useState} from "react";

const Advent6: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');

    if (puzzleinput !== '') {
       console.log(puzzleinput)
        const array = puzzleinput.split('\n');
       const map: string[][] = [];
       array.forEach((value) => {
           map.push(value.split(''))
       })
        console.log(1)

        let position: number[] = [0,0]
        for (let y = 0; y < map.length -1; y++) {
            for (let x = 0; x < map[0].length -1; x++) {
                if (map[x][y] === '^') {
                    position = [x, y]
                }
            }
        }
        console.log(2)

        let steps = 0;
        while (position[0] < map.length -1 && position[1] < map[0].length -1 && steps < 100 && position[0] >= 0 && position[1] >= 0) {
            if (map[position[0]][position[1]] !== '#') {
                console.log(map[position[0]][position[1]])
                position = [position[0]-1, position[1]]
            } else {
                position = [ position[0], position[1]+1]
            }
            console.log(position)
            steps += 1;
        }

        console.log(steps)
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


export default Advent6