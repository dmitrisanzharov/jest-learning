const chunk = require('./chunk.js');

test('chunk function to exist in this module', () => {
    expect(chunk).toBeDefined();
});

test('Chunk function should split the array based on length that is passed into the function as an argument', ()=> {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let len = 2;

    expect(chunk(arr, len)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
})