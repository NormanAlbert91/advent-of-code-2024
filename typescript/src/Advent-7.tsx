import {FC, useState} from "react";

const Advent6: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');
    let steps = 0;

    const signs = ['+', '-', '*', '/']

    if (puzzleinput !== '') {
       console.log(puzzleinput)
        const array = puzzleinput.split('\n');
       const math = [];
       array.forEach((value) => {
           const rows = value.split(':')
           const numbers = rows[1].trim().split(' ')
           math.push([rows[0], numbers])
       })

        console.log(math)



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