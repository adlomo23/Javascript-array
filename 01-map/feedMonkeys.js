/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const mappedFeedMonkeys = (fruit) => {

    const mapedArray = MONKEYS.map((element) => {
        const currentMonkey = `${element} ${fruit}`;
        return currentMonkey;
    });
    
    return mapedArray;
};

