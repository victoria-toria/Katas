/*
https://www.codewars.com/kata/567af2c8b46252f78400004d/train/javascript
*/

function battle(p1, p2) {
    console.log(p1, p2)
    let c1 = []
    let c2 = []
    let size = Math.max(p1.length, p2.length)
    for (let i = 0; i < size + 100; i++) {
        if (p1[i] && p2[i]) {
            if (p1[i][0] < p2[i][1]) {
                c2.push(p2[i])
            }
            if (p2[i][0] < p1[i][1]) {
                c1.push(p1[i])
            }
        }
        else if (p2[i]) {
            c2.push(p2[i])
        }
        else if (p1[i]) {
            c1.push(p1[i])
        }
    }
    return { 'player1': c1, 'player2': c2 }
}

