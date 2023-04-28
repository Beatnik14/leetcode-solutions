//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

const dictionary: any = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const romanToInt = (s: string): number => {
    let result = 0;
    let sArr = s.split('');
    for (let i = sArr.length - 1; i >= 0; i--) {
        let num = dictionary[sArr[i]];
        if (i != sArr.length-1 && dictionary[sArr[i]] < dictionary[sArr[i + 1]]) {
            result = result - num
            continue;
        }
        result += num
    }
    return result
}

console.log(romanToInt('MCMXCIV'))

//Runtime 125ms Beats 84.51%
//Memory 48.4mb Beats 63.82%