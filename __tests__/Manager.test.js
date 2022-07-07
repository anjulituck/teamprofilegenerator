//variables for checking Manager object
const checkManager = require('../lib/Engineer');
const manager = new checkManager('julia','123456','juliat@gmail.com','5103669090');

test('checks if Manager values matches', () => {
 expect(manager.name).toBe('julia');
 expect(manager.email).toBe('juliat@gmail.com');
 expect(manager.id).toBe('123456');
 expect(manager.officeNumber).toBe('5103669090');
});

test('checks name within object',() => {
    expect(manager.getName()).toBe('julia');
});

test('checks employee id within object',() => {
    expect(manager.getId()).toBe('123456');
});

test('checks email within object',() => {
    expect(manager.getEmail()).toBe('juliat@gmail.com');
});

test('checks office number within object',() => {
    expect(manager.getOfficeNumber()).toBe('5103669090');
});

test('checks role within object',() => {
    expect(manager.getRole()).toBe('Manager');
});