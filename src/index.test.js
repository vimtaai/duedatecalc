import mocha from 'mocha';
import chai from 'chai';

import calculateDueDate from './index';

chai.should();

function timeShouldEqual(dateObj, timeStr) {
    const dateObjTime = dateObj.getHours() + ':' + 
                        dateObj.getMinutes() + ':' +
                        dateObj.getSeconds();
    return dateObjTime.should.equal(timeStr);
}

function dateShouldEqual(dateObj, dateString) {
    const dateObjDate = dateObj.getFullYear() + '-' + 
                        (dateObj.getMonth() + 1) + '-' + // Months are 0-11
                        dateObj.getDate();
    return dateObjDate.should.equal(dateString);
}

describe('calculateDueDate()', () => {
    it('should be a function', () => {
        calculateDueDate.should.be.a('function');
    });

    it('should handle `within the day` due dates', () => {
        const result = calculateDueDate(new Date('2017-08-18 10:47:42'), 2);
        timeShouldEqual(result, '12:47:42');
        dateShouldEqual(result, '2017-8-18');
    });

    it('should handle day overlapping', () => {
        const result = calculateDueDate(new Date('2017-08-17 15:17:52'), 4);
        timeShouldEqual(result, '11:17:52');
        dateShouldEqual(result, '2017-8-18');
    });

    it('should handle turnaround times more than a day long', () => {
        const result = calculateDueDate(new Date('2017-08-21 14:51:10'), 10);
        timeShouldEqual(result, '16:51:10');
        dateShouldEqual(result, '2017-8-22');
    });

    it('should handle turnaround times more than a day long with day overlapping', () => {
        const result = calculateDueDate(new Date('2017-08-21 14:51:10'), 12);
        timeShouldEqual(result, '10:51:10');
        dateShouldEqual(result, '2017-8-23');
    });

    it('should handle weekends', () => {
        const result = calculateDueDate(new Date('2017-08-18 15:00:00'), 5);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2017-8-21');
    });

    it('should handle weekends with more than a day long turnaround times', () => {
        const result = calculateDueDate(new Date('2017-08-18 15:00:00'), 13);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2017-8-22');
    });

    it('should handle weekends with more than a weekend long turnaround times', () => {
        const result = calculateDueDate(new Date('2017-08-18 15:00:00'), 21);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2017-8-23');
    });

    it('should handle weekends with more than a week long turnaround times', () => {
        const result = calculateDueDate(new Date('2017-08-18 15:00:00'), 45);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2017-8-28');
    });

    it('should handle month overlaps', () => {
        const result = calculateDueDate(new Date('2017-08-31 15:00:00'), 5);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2017-9-1');
    });

    it('should handle year overlaps', () => {
        const result = calculateDueDate(new Date('2017-12-29 15:00:00'), 5);
        timeShouldEqual(result, '12:0:0');
        dateShouldEqual(result, '2018-1-1');
    });
});