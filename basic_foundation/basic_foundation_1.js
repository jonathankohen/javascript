function get() {
    let newArr = [];
    for (let i = 1; i <= 255; i++) {
        newArr.push(i);
    }
    return newArr;
}

get();

// ---------------------------------

function evenSum() {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

evenSum();

// ---------------------------------

function oddSum() {
    let sum = 0;
    for (let i = 0; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

oddSum();

// ---------------------------------

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum;
}

arrSum([1, 2, 5]);

// ---------------------------------

function max(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([-3, 3, 5, 7]);

// ---------------------------------

function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

avg([4, 3, 7, 9]);

// ---------------------------------

function arrOdd() {
    let arr = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

arrOdd();

// ---------------------------------

function greater(arr, Y) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Y < arr[i]) {
            counter++;
        }
    }
    return counter;
}

greater([1, 3, 5, 7], 3);

// ---------------------------------

function squares(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

squares([2, 4, 6, 8]);

// ---------------------------------
// ES5
function neg(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

neg([1, -3, 5, 6, -9]);

// ---------------------------------
// ES6
maxMinAvg = arr => {
    let max = 0;
    let min = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    avg = sum / arr.length;
    arr = [max, min, avg];

    return arr;
};

maxMinAvg([1, 5, 10, -2]);

// ---------------------------------

firstLast = arr => {
    let first = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;

    return arr;
};

firstLast([1, 2, 3, 4]);

// ---------------------------------

function numToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

numToString([1, -3, 5, 6, -9]);
