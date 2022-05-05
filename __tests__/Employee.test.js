const Employee = require('../lib/Employee');

test('creates a new employee', () =>  {
const employee = new Employee();

expect(typeof(employee)).toBe('object');


});

test('get name from construcor arguments', ()  =>  {
    const name = 'Inglish';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('get id', ()  =>  {
    const id = 90;
    const employee = new Employee('Inglish', id);
    expect(employee.id).toBe(id);
});

test('get email', () =>  {
    const email = 'test@test.com';
    const employee = new Employee('Inglish', 90, email);
    expect(employee.email).toBe(email);
})

test('test getName method', () =>  {
    const name = 'Inglish';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test('get id', ()  =>  {
    const id = 90;
    const employee = new Employee('Inglish', id);
    expect(employee.getId()).toBe(id);
});

test('get email', () =>  {
    const email = 'test@test.com';
    const employee = new Employee('Inglish', 90, email);
    expect(employee.getEmail()).toBe(email);
});

test('get role', () =>  {
    const role = 'Employee';
    const employee = new Employee('Inglish', 90, 'test@test.com');
    expect(employee.getRole()).toBe(role);
});



