"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDueDate = calculateDueDate;
function calculateDueDate(submitDate, turnaroundTime) {
    var hoursStart = 9;
    var hoursEnd = 17;
    var hoursPerDay = hoursEnd - hoursStart;

    var dueToDate = submitDate;

    var days = Math.trunc(turnaroundTime / hoursPerDay);
    turnaroundTime -= days * hoursPerDay;

    var hours = dueToDate.getHours() + turnaroundTime;
    if (hours > hoursEnd) {
        days++;
        hours -= hoursPerDay;
    }

    // Using timestamps handles overlapping months and years
    dueToDate.setTime(dueToDate.getTime() + days * 86400000);

    dueToDate.setHours(hours);
    return dueToDate;
}

exports.default = calculateDueDate;