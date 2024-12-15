import {FC, useState} from "react";

const Advent6: FC = () => {
    const [puzzleinput, setPuzzleinput] = useState('');
    let partOne = 0;
    let partTwo = 0;


    if (puzzleinput !== '') {
        const games = puzzleinput.split('\n\n');

        const gameArray = [];
        games.forEach((game) => {
            const gameLines = game.split('\n');
            const A = gameLines[0].replace('Button A: X+', '').replace(' Y+', '').split(',');
            const B = gameLines[1].replace('Button B: X+', '').replace(' Y+', '').split(',');
            const Price = gameLines[2].replace('Prize: X=', '').replace(' Y=', '').split(',');
            gameArray.push([A, B, Price])
        })

        //part one
        gameArray.forEach((gameLine) => {
            console.log(gameLine)
            const AX = Number(gameLine[0][0]);
            const BX = Number(gameLine[1][0]);
            const AY = Number(gameLine[0][1]);
            const BY = Number(gameLine[1][1]);
            const PX = Number(gameLine[2][0]);
            const PY = Number(gameLine[2][1]);

            let found = false;

            // Iteriere durch mögliche Kombinationen von Button-Drücken
            for (let i = 0; i <= Math.ceil(PX / AX); i++) {
                for (let j = 0; j <= Math.ceil(PX / BX); j++) {
                    const totalX = i * AX + j * BX;
                    const totalY = i * AY + j * BY;

                    if (totalX === PX && totalY === PY) {
                        console.log('Gefunden:', { i, j });
                        found = true;
                        partOne += i*3 + j;
                        break;
                    }
                }
                if (found) break;
            }


        })

        //part two 10000000000000
         gameArray.forEach((gameLine) => {
             const AX = Number(gameLine[0][0]);
             const BX = Number(gameLine[1][0]);
             const AY = Number(gameLine[0][1]);
             const BY = Number(gameLine[1][1]);
             const PX = BigInt(gameLine[2][0]) + 10000000000000n;
             const PY = BigInt(gameLine[2][1]) + 10000000000000n;

                function gcd(a: bigint, b: bigint): bigint {
                    return b === 0n ? a : gcd(b, a % b);
                }

                function extendedGCD(a: bigint, b: bigint): { x: bigint, y: bigint, gcd: bigint } {
                    if (b === 0n) return { x: 1n, y: 0n, gcd: a };
                    const { x: x1, y: y1, gcd } = extendedGCD(b, a % b);
                    return { x: y1, y: x1 - (a / b) * y1, gcd };
                }

                function findMinButtonPresses(AX: bigint, AY: bigint, BX: bigint, BY: bigint, PX: bigint, PY: bigint): bigint | null {
                    const gcdX = gcd(AX, BX);
                    const gcdY = gcd(AY, BY);

                    if (PX % gcdX !== 0n || PY % gcdY !== 0n) return null;

                    const solutionX = extendedGCD(AX, BX);
                    const solutionY = extendedGCD(AY, BY);

                    const scaleX = PX / solutionX.gcd;
                    const scaleY = PY / solutionY.gcd;

                    let iX = solutionX.x * scaleX;
                    let jX = solutionX.y * scaleX;
                    let iY = solutionY.x * scaleY;
                    let jY = solutionY.y * scaleY;

                    const adjustX = -iX * gcdX / BX;
                    iX += adjustX * BX / gcdX;
                    jX -= adjustX * AX / gcdX;

                    const adjustY = -iY * gcdY / BY;
                    iY += adjustY * BY / gcdY;
                    jY -= adjustY * AY / gcdY;

                    return iX * 3n + jX;
                }

                const result = findMinButtonPresses(
                    BigInt(AX), BigInt(AY),
                    BigInt(BX), BigInt(BY),
                    PX, PY
                );

                if (result !== null) {
                    partTwo += Number(result);
                } else {
                    console.log("Keine Lösung möglich");
                }
            });


    }

    return <>
            <textarea rows={10} cols={25} value={puzzleinput}
                      onChange={e => setPuzzleinput(e.target.value)}> </textarea>
        <h4>Part 1</h4>
        Result: {partOne}
        <h4>Part 2</h4>
        Result: {partTwo}
        <hr/>
    </>
}


export default Advent6