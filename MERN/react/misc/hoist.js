console.log(hello);
var hello = 'world';
// logs undefined

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING
// var needle = 'haystack';
// test() called
// var needle = 'magnet';
// logs 'magnet'

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// function never called, defs not changed

mean();
console.log(food);
var mean = function () {
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
};
console.log(food);
// mean() is not definied, can't be called

console.log(genre);
var genre = 'disco';
rewind();
function rewind() {
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre);
// genre undef
// from func rock, r&b
// then disco, because func vars only matter in func

dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
// sj, seattle, burb, sj
