# duedatecalc [![Build Status](https://travis-ci.org/vimtaai/duedatecalc.svg?branch=master)](https://travis-ci.org/vimtaai/duedatecalc)[![Coverage Status](https://coveralls.io/repos/github/vimtaai/duedatecalc/badge.svg?branch=master)](https://coveralls.io/github/vimtaai/duedatecalc?branch=master)

## About the code

The code is written in ES6 and compiled to ES5 JavaScript with Babel. Tests are written with Mocha and Chai. The tests are ran on Travis CI with each commit.

## Building the source code

```bash
npm run build
```

## Running tests

```bash
npm test
npm run cover
```

## Things to consider

- [ ] Writing tests for helper functions
- [ ] Combining timeShouldEqual and dateShouldEqual into one function - may simplify writing test cases
- [ ] Zeropadding of times and dates in testing - Not a functional but a "visual" upgrade to the test code
- [ ] Time zone support - Shifts all the weekends and working hours -> may result in completely different results
- [ ] Input validation - Handled by issue tracking system?
- [ ] Exporting working hours and use them in the tests - Changing the working hour constants in the code could ruin the tests - should they change? Should they be constants, not paramters?
- [ ] Non-integer turnaround times - Should implement overlapping minutes, hours, etc. - could work with the same algorithm but with minutes