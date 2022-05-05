const Engineer = require('../lib/Engineer');

test('github constructor', ()  =>  {
    const github = 'inglish/2022';
    const engineer = new Engineer ('Inglish', 90, 'test@test.com', github);
    expect(engineer.github).toBe(github)
});

test('get github', () =>  {
    const github = 'inglish/2022';
    const engineer = new Engineer('Inglish', 90, 'test@test.com', github);
    expect(engineer.getgithub()).toBe(github);
});

test('get GitHub', () =>  {
    const gitHub = 'gitHub';
    const engineer = new Engineer('Inglish', 90, 'test@test.com', 'inglish/2022');
    expect(engineer.getgitHub()).toBe(gitHub);
});

test('get role', ()  =>  {
    const role = 'Engineer';
    const engineer = new Engineer('ingish', 90, 'test@test.com', 'inglish/2022');
    expect(engineer.getRole()).toBe(role);
});