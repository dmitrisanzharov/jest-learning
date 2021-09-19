const isAnagram = require('./anagram.js');

test('isAnagram function to exist in this module', () => {
    expect(isAnagram).toBeDefined();
});

test('isAnagram a function', ()=> {
    expect(typeof isAnagram).toEqual('function');
})

test('Passed strings are anagrams', ()=> {
    const str1 = 'cinema';
    const str2 = 'iceman';
    expect(isAnagram(str1,str2)).toBe(true); 
});

test('Passed strings are NOT anagrams', ()=> {
    const str1 = 'hello';
    const str2 = 'cricket';
    expect(isAnagram(str1,str2)).toBe(false); 
});