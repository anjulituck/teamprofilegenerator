//variables for checking Employee object
const checkEmployee = require('../lib/Employee');
const employee = new checkEmployee('julia','123456','juliat@gmail.com');

test('checks if Employee values matches', () => {
 expect(employee.name).toBe('julia');
 expect(employee.email).toBe('juliat@gmail.com');
 expect(employee.id).toBe('123456');

});

test('checks name within object',() => {
    expect(employee.getName()).toBe('julia');
});

test('checks employee id within object',() => {
    expect(employee.getId()).toBe('123456');
});

test('checks email within object',() => {
    expect(employee.getEmail()).toBe('juliat@gmail.com');
});

test('checks role within object',() => {
    expect(employee.getRole()).toBe('Employee');
});