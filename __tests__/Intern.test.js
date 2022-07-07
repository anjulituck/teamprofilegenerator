//variables for checking Intern object
const checkIntern = require('../lib/Intern');
const intern = new checkIntern('julia','123456','juliat@gmail.com','Stanford');

test('checks if Intern values matches', () => {
 expect(intern.name).toBe('julia');
 expect(intern.email).toBe('juliat@gmail.com');
 expect(intern.id).toBe('123456');
 expect(intern.school).toBe('Stanford');
});

test('checks name within object',() => {
    expect(intern.getName()).toBe('julia');
});

test('checks employee id within object',() => {
    expect(intern.getId()).toBe('123456');
});

test('checks email within object',() => {
    expect(intern.getEmail()).toBe('juliat@gmail.com');
});

test('checks school within object',() => {
    expect(intern.getSchool()).toBe('Stanford');
});

test('checks role within object',() => {
    expect(intern.getRole()).toBe('Intern');
});