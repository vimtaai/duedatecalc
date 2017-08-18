# duedatecalc [![Build Status](https://travis-ci.org/vimtaai/duedatecalc.svg?branch=master)](https://travis-ci.org/vimtaai/duedatecalc)

## Things to consider

- [ ] Writing tests for timeShouldEqual and dateShouldEqual
    They've been moved to different function to avoid redundant code
- [ ] Combining timeShouldEqual and dateShouldEqual into one funciton
    There is a test where only one is needed - may simplify writing test cases
- [ ] Zeropadding of times and dates in testing 
    (not a functional but a "visual" upgrade to the test code)
- [ ] Time zones 
    (shifts all the weekends and working hours -> may result in completely different results)
- [ ] Input validation 
    Handled by issue tracking system?
- [ ] Exporting working hours and use them in the tests
    Changing the working hour constants in the code could ruin the tests - should they change? Should they be constants, not paramters?
- [ ] Non-integer turnaround times
    Should implement overlapping minutes, hours, etc.