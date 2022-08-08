//variables for checking Engineer object
const checkEngineer = require('../lib/Engineer');
const engineer = new checkEngineer('julia',123456,'juliat@gmail.com','juliat');

test('checks if Engineer values matches', () => {
 expect(engineer.name).toBe('julia');
 expect(engineer.email).toBe('juliat@gmail.com');
 expect(engineer.id).toBe(123456);
 expect(engineer.github).toBe('juliat');
});

test('checks name within object',() => {
    expect(engineer.getName()).toBe('julia');
});

test('checks employee id within object',() => {
    expect(engineer.getId()).toBe(123456);
});

test('checks email within object',() => {
    expect(engineer.getEmail()).toBe('juliat@gmail.com');
});

test('checks github within object',() => {
    expect(engineer.getGithub()).toBe('juliat');
});

test('checks role within object',() => {
    expect(engineer.getRole()).toBe('Engineer');
});