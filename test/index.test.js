import mocha from 'mocha';
import chai from 'chai';

import calculateDueDate from '../dist';

chai.should();

describe('calcuateDueDate()', () => {
    it('should be a function', () => {
        calculateDueDate.should.be.a('function');
    });

    it('should handle `within the day` due dates', () => {
        const result = calculateDueDate(new Date('2017-08-18 10:47:42'), 2);
        result.getHours().should.equal(12);
        result.getMinutes().should.equal(47);
        result.getSeconds().should.equal(42);
    });
});