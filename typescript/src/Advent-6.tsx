import {FC, useState} from "react";

const Advent6: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');
    let steps = 0;

    if (puzzleinput !== '') {
       console.log(puzzleinput)
        const array = puzzleinput.split('\n');
       const map: string[][] = [];
       array.forEach((value) => {
           map.push(value.split(''))
       })

        let position: number[] = [0,0]
        for (let y = 0; y < map.length -1; y++) {
            for (let x = 0; x < map[0].length -1; x++) {
                if (map[x][y] === '^') {
                    position = [x, y]
                }
            }
        }

        enum Direction {
            Up = 1,
            Down = 2,
            Left = 3,
            Right = 4,
        }

        function move(direction: Direction, map: string[][]): number[] {
            if (direction === Direction.Up) {
                map[position[0] - 1][position[1]] = 'X';
                position = [position[0] - 1, position[1]]
            }
            if (direction === Direction.Down) {
                map[position[0] + 1][position[1]] = 'X';
                position = [position[0] + 1, position[1]]
            }
            if (direction === Direction.Left) {
                map[position[0]][position[1] - 1] = 'X';
                position = [position[0], position[1] - 1]
            }
            if (direction === Direction.Right) {
                map[position[0]][position[1] + 1] = 'X';
                position = [position[0], position[1] + 1]
            }

            return position;
        }

        function nextStepPossible(direction: Direction, map: string[][]): boolean {
            if (direction === Direction.Up) {
                return map[position[0] - 1][position[1]] !== '#';
            }
            if (direction === Direction.Down) {
                return map[position[0] + 1][position[1]] !== '#';
            }
            if (direction === Direction.Left) {
                return map [position[0]][position[1] - 1] !== '#';
            }
            if (direction === Direction.Right) {
                return map [position[0]][position[1] + 1] !== '#';
            }

            throw Error()
        }

        function changeDirection(direction: Direction) : Direction {
            if (direction === Direction.Up) {
                return Direction.Right
            }
            if (direction === Direction.Right) {
                return Direction.Down
            }
            if (direction === Direction.Down) {
                return Direction.Left
            }
            if (direction === Direction.Left) {
                return Direction.Up
            }

            throw Error;
        }

        let direction: Direction = Direction.Up;
        map[position[0]][position[1]] = "X"; // mark start point with X
        while (position[0] < map.length -1 && position[1] < map[0].length -1 && position[0] >= 0 && position[1] >= 0) {
            if (nextStepPossible(direction, map)) {
                position = move(direction, map)
            } else {
                direction = changeDirection(direction)
                position = move(direction, map)
            }
        }

        map.forEach((row) => {
            row.forEach((value) => {
                if (value === 'X') {
                    steps += 1;
                }
            })
        })

    }

        return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
            <h4>Part 1</h4>
            Result: {steps}
            <h4>Part 2</h4>
            Result: {0}
            <hr/>
        </>
    }


export default Advent6