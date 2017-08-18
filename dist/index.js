"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDueDate = calculateDueDate;
/**
 * Calculates a due date and time of a given task
 * @param {Date} submitDate - The time of recording the task
 * @param {number} turnaroundTime - The time required to complete the task in hours
 */
function calculateDueDate(submitDate, turnaroundTime) {
    // Predefined constants
    var hoursStart = 9;
    var hoursEnd = 17;
    var hoursPerDay = hoursEnd - hoursStart;
    var daysPerWeek = 5;
    var msPerDay = 86400000;

    var dueDate = new Date(submitDate);
    // startingDay -> 0 - Mon, 6 - Sun
    var startingDay = (dueDate.getDay() + 6) % 7;

    // Number of complete working days required
    var days = Math.trunc(turnaroundTime / hoursPerDay);
    // Number of complete working weeks required
    var weekends = Math.trunc(turnaroundTime / (hoursPerDay * daysPerWeek));

    // Hours of due time
    var hours = dueDate.getHours() + (turnaroundTime - days * hoursPerDay);
    // Handle day overlapping
    if (hours > hoursEnd) {
        days++;
        hours -= hoursPerDay;
    }
    // Handle weekends
    if (startingDay + days - weekends * daysPerWeek > 4) {
        weekends++;
    }

    // Using timestamps handles overlapping months and years
    dueDate.setTime(dueDate.getTime() + (days + weekends * 2) * msPerDay);
    dueDate.setHours(hours);

    return dueDate;
}

exports.default = calculateDueDate;