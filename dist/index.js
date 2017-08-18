"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDueDate = calculateDueDate;
function calculateDueDate(submitDate, turnaroundTime) {
    var dueToDate = submitDate;
    dueToDate.setHours(dueToDate.getHours() + turnaroundTime);
    return dueToDate;
}

exports.default = calculateDueDate;