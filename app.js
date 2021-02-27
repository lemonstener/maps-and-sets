// *********
// PART ONE
// *********

// 1. [1,2,3,4]

// 2. 'ref'

// 3. Map(2) {Array(3) => true, Array(3) => false}


// *********
// PART TWO
// *********

const hasDuplicate = (arr) => {
    const test = [...new Set(arr)];
    return test.length === arr.length ? false : true;
}

function vowelCount(str) {
    const vowelCount = new Map();
    for (let char of str) {
        const lowerCased = char.toLowerCase();
        if ('aeiou'.includes(lowerCased)) {
            if (vowelCount.has(lowerCased)) {
                vowelCount.set(lowerCased, vowelCount.get(lowerCased) + 1)
            } else {
                vowelCount.set(lowerCased, 1);
            }
        }
    }
    return vowelCount;
}