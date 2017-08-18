import mocha from 'mocha';
import chai from 'chai';

import calculateDueDate from '../dist';

chai.should();

function timeShouldEqual(dateObj, timeStr) {
    const dateObjTime = dateObj.getHours() + ':' + 
                        dateObj.getMinutes() + ':' +
                        dateObj.getSeconds();
    return timeStr.should.equal(dateObjTime);
}

function dateShouldEqual(dateObj, dateString) {
    const dateObjDate = dateObj.getFullYear() + '-' + 
                        (dateObj.getMonth() + 1) + '-' + // Months are 0-11
                        dateObj.getDate();
    return dateString.should.equal(dateObjDate);
}

describe('calcuateDueDate()', () => {
    it('should be a function', () => {
        calculateDueDate.should.be.a('function');
    });

    it('should handle `within the day` due dates', () => {
        const result = calculateDueDate(new Date('2017-08-18 10:47:42'), 2);
        timeShouldEqual(result, '12:47:42');
    });

    it('should handle day overlapping', () => {
        const result = calculateDueDate(new Date('2017-08-18 15:17:52'), 4);
        timeShouldEqual(result, '11:17:52');
        dateShouldEqual(result, '2017-8-19');
    });
});