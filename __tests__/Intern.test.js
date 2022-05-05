const Intern = require('../lib/Intern');

test('school constructor',  () => {
    const school = 'Butler';
    const intern = new Intern('Inglish', 90, 'test@test.com', school);
    expect(intern.school).toBe(school);  
});

test('get school', () =>  {
    const school = 'Butler';
    const intern = new Intern('Inglish', 90, 'test@test.com', school);
    expect(intern.getschool()).toBe(school);
});

test('get School', () =>  {
    const School = 'School';
    const intern = new Intern('Inglish', 90, 'test@test.com', 'Butler');
    expect(intern.getSchool()).toBe(School);
});

test('get role', ()  =>  {
    const role = 'Intern';
    const intern = new Intern('ingish', 90, 'test@test.com', 'Butler');
    expect(intern.getRole()).toBe(role);
});
