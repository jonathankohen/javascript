import { strict } from 'assert';

makeItBig = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'BIG';
        }
    }
    return arr;
};

makeItBig([-1, 3, 5, -5]);

// ---------------------------------

printReturn = arr => {
    let max = 0;
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else {
            min = arr[i];
        }
    }

    console.log(min);
    return max;
};

printReturn(1, 2, 3, 4, 5);

// ---------------------------------

printR = arr => {
    let firstOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length - 2]);
    return firstOdd;
};

printR(arr);

// ---------------------------------

double = arr => {
    oldArr = [];
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        oldArr.push(arr[i]);
        arr[i] = arr[i] * 2;
        newArr.push(arr[i]);
    }

    console.log(oldArr);
    return newArr;
};

double([1, 2, 3, 4, 5]);

// ---------------------------------

countPositives = arr => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++;
        }
    }

    arr[arr.length - 1] = counter;

    return arr;
};

countPositives([-1, 1, 1, 1]);

// ---------------------------------

evensAndOdds = arr => {
    oddCounter = 0;
    evenCounter = 0;

    if (oddCounter % 3 == 0) {
        console.log("That's odd!");
    }

    if (evenCounter % 2 == 0) {
        console.log('Even more so!');
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            oddCounter++;
            if (arr[i] % 2 == 0) {
                oddCounter = 0;
            }
        }

        if (arr[i] % 2 == 0) {
            evenCounter++;
            if (arr[i] % 2 == 1) {
                evenCounter = 0;
            }
        }
    }

    return arr;
};

evensAndOdds([1, 1, 4, 5, 5, 5, 6, 7, 6, 6, 6]);

// ---------------------------------

incrementOdd = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
};

incrementOdd([1, 2, 3, 4, 5, 6, 7, 8]);

// ---------------------------------

previousLengths = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
};
previousLengths(['hello', 'dojo', 'awesome']);

// ---------------------------------

addSeven = arr => {
    oldArr = [];
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        oldArr.push(arr[i]);
        arr[i] += 7;
        newArr.push(arr[i]);
    }

    console.log(`Old Array: ${oldArr}`);
    return newArr;
};

addSeven([1, 2, 3]);

// ---------------------------------

reverseArr = arr => {
    arr.reverse();
    return arr;
};

reverseArr([1, 2, 3, 4, 5, 6]);

// ---------------------------------

outlookNeg = arr => {
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

outlookNeg([1, -3, 5]);

// ---------------------------------

hungry = arr => {
    let food = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            arr[i] = 'yummy';
            food++;
            console.log(arr[i]);
        }
    }

    if (food == 0) {
        console.log("I'm hungry");
    }
};

hungry(['food', 'nope', 'food', 'nope']);
hungry(['nope', 'nope']);

// ---------------------------------

swapTowardCenter = arr => {
    temp = arr[i];
    if (arr[i] % 2 == 0) {
        arr[i] = arr[arr.length - 1];
    }
};

swapTowardCenter([true, 42, 'Ada', 2, 'pizza']);

// ---------------------------------

scaleArray = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return [arr, num];
};

scaleArray([1, 2, 3], 3);
