# Class -

## AB tests

For testing for example some variants of site an to know which one the users prefers separando para que cada sitio reciva parte de las visitas.

AB test are temporary solution !

- split testing
- bucked testing

**When making AB test we should have some:**

- Metric (define if testing was successful, lead count example)
- Period of time (short period)
- Variants

AB test should not be used for everything, only for meaningful test.

Test should be remove from code when period finishes.

**Difficulties:**

1. New effect: with the AB test we try to do a research, and can affect the product owners, maybe people do not like the changes
2. Enough traffic. We must be sure that every variant have enough traffic during the period of time. If we chose a wrong period of time, if we do not have enough traffic, the test will not be good.
3. Efficiency metric. How to chose which variant is better, maybe the metric was not good
4. Period, which period should I choose

## Unit tests

80% of test is pretty enough for the project.
Sometimes 40 % is good.

**We need unit tests because:**

- Regression: to ensure that previous functionalities are not broken.

### Jest

Most popular framework.

- Describe: description of the block of code to test
- it: describe one separate test
  - Must start with: Should or Shouldn't
- beforeAll
- afterAll

#### Very important definitions

- mock: Example, I need to test a function getTomorrowDate, but Date.now every time return always different data, so we can
  mock the function so we can know the return value

  **DO NOT FORGET TO CLEAN MOCK**

```js
it('Returns tomorrow date', () => {
    // Example of mock
    const originalDate = Date.now();
    Date.now = 1234567890123; // We add a know value to a function
    expect(getTomorrowDate()).toBe(....);
    Date.now = original;
})

getOnlineUserCount(); // Is difficult, becouse maybe there are no online users when testing the app

getOnlineUsersCountMock = () => 5;
```

- spy: collect information about the calls, stack, etc... so we can check the information

```js
mailAgent() // I want to know that after registration the email has been sent
it('Should send email', () => {
    let spyMail = jest.spyOn(mailAgent.send);
    register()
    ...
    ...
    expect(spyMail.calledCount).toBe(1);
})
```

#### Some commands for expect

- toBe, Is bad practice to use it if we can use something else. This must be the LAST call
- toEqual() Compares objects deeply. Iw we can use something else, is better
- toContain() (it uses ===)
- toContainEqual()
- toBeNull() this is better than toBe(null)
- toBeUndefined()
- toBeDefined()
- toBeTrusthy() // uses not explicit conversion, so check null, undefined, 0 ...
- toBeFalsy()
- toBeGreaterThan()
- toBeGraterThanOrEqual()
- toBeCloseTo(): expect
- toMatch() we can specify reject
- toThrow()

## Homeworks

CI/CD and test dead line is 

checkAllUnitTests
checkCoverage > 65 % by monday