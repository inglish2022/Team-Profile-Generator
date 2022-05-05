const Manager = require('../lib/Manager');

test('officeNumber constructor', () =>  {
    const officeNumber = 10;
    const manager = new Manager ('Inglish', 90, 'test@test.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('get officeNumber', () => {
    const officeNumber = 10;
    const manager = new Manager ('Inglish', 90, 'test@test.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('get role', ()  =>  {
    const role = 'Manager';
    const manager = new Manager('ingish', 90, 'test@test.com', 10);
    expect(manager.getRole()).toBe(role);
})