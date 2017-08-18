import mocha from 'mocha';
import chai from 'chai';

import calculateDueDate from '../dist';

chai.should();

describe('calcuateDueDate()', () => {
    it('should be a function', () => {
        calculateDueDate.should.be.a('function');
    });
});