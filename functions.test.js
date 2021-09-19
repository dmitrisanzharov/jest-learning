const functions = require('./functions');

// beforeEach(()=> initDatabase());
// afterEach(()=> closedDatabase());

// beforeAll(()=> initDatabase());
// afterAll(()=> closedDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closedDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name..., it worked'); 
console.log('omg, is this automatic?'); 



test('Adds 2 + 2 equal to 4', ()=> {
    nameCheck();
    expect(functions.add(2, 2)).toBe(4);
}); 

test('Adds 2 + 2 NOT equal to 5', ()=> {
    expect(functions.add(2, 2)).not.toBe(5);
}); 


test('should be falsy', ()=> {
    expect(functions.checkValue(0)).toBeFalsy();
}); 



test('user should be Brad Thedude object', ()=> {
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Thedude'});
}); 


test('Should be under 1600', ()=> {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
}); 

test('There is no I in team', ()=> {
   expect('team').not.toMatch(/I/);
}); 

test('Admin should be in usernames', ()=> {
    let usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
 }); 

//  test('User fetched name should be Leanne Graham', ()=> {
//      expect.assertions(1);
//      return functions.fetchUser().then(data => {
//          expect(data.name).toEqual("Leanne Graham")
//      })
//  });


 test('User fetched name should be Leanne Graham (async)', async ()=> {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");

 })