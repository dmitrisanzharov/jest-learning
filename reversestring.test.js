const reverseString = require('./reversestring');

test('reverseString function to exist in this module', () => {
    expect(reverseString).toBeDefined();
});

test('String should reverse', ()=> {
    expect(reverseString('dmitri')).toEqual('irtimd');
    expect(reverseString('john')).toEqual('nhoj');
});

test('String reverses and has Uppercase, should return lowercase', ()=> {
    expect(reverseString('HEllo')).toEqual('olleh')
});


