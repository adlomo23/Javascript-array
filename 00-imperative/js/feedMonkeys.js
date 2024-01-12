/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = (fruit) => {
    let monkeys = [];
    const collectionLength = MONKEYS.length;

    for (let index = 0; index < collectionLength; index++){
        const monkey = `${MONKEYS[index]} ${fruit}`;
        monkeys.push(monkey);
    }
    
    return monkeys;
}
//