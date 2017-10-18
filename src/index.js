const daysPerWeek = 7;
const hoursPerDay = 24;
const millisecsPerHour = 3600000;
const millisecsPerDay = millisecsPerHour * hoursPerDay;

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
export function calculateDueDate(submitDate, turnaroundTime) {
    const workingDays = [1, 2, 3, 4, 5];
    const workingHoursStart = 9;
    const workingHoursEnd = 17;
    
    const nonWorkingHoursPerDay = hoursPerDay - (workingHoursEnd - workingHoursStart);
    const nonWorkingDaysPerWeek = daysPerWeek - workingDays.length;

    let dateCalculator = new Date(submitDate);
    for (let i = 1; i <= turnaroundTime; ++i) {
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

export default calculateDueDate;
