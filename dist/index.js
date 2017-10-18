"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDueDate = calculateDueDate;
var daysPerWeek = 7;
var hoursPerDay = 24;
var millisecsPerHour = 3600000;
var millisecsPerDay = millisecsPerHour * hoursPerDay;

function addHours(date, numberOfHours) {
    return new Date(date.getTime() + numberOfHours * millisecsPerHour);
}

function addDays(date, numberOfDays) {
    return new Date(date.getTime() + numberOfDays * millisecsPerDay);
}

function isInWorkingHours(date, workingHoursStart, workingHoursEnd) {
    return date.getHours() < workingHoursEnd && date.getHours() >= workingHoursStart;
}

function isOnWorkingDay(date, workingDays) {
    return workingDays.indexOf(date.getDay()) !== -1;
}

/**
 * Calculates a due date and time of a given task
 * @param {Date} submitDate - The time of recording the task
 * @param {number} turnaroundTime - The time required to complete the task in hours
 */
function calculateDueDate(submitDate, turnaroundTime) {
    var workingDays = [1, 2, 3, 4, 5];
    var workingHoursStart = 9;
    var workingHoursEnd = 17;

    var nonWorkingHoursPerDay = hoursPerDay - (workingHoursEnd - workingHoursStart);
    var nonWorkingDaysPerWeek = daysPerWeek - workingDays.length;

    var dateCalculator = new Date(submitDate);
    for (var i = 1; i <= turnaroundTime; ++i) {
        dateCalculator = addHours(dateCalculator, 1);
        if (!isInWorkingHours(dateCalculator, workingHoursStart, workingHoursEnd)) {
            dateCalculator = addHours(dateCalculator, nonWorkingHoursPerDay);
        }
        if (!isOnWorkingDay(dateCalculator, workingDays)) {
            dateCalculator = addDays(dateCalculator, nonWorkingDaysPerWeek);
        }
    }
    return dateCalculator;
}

exports.default = calculateDueDate;