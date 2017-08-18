export function calculateDueDate(submitDate, turnaroundTime) {
    const msPerDay = 86400000;
    const hoursStart = 9;
    const hoursEnd = 17;
    const hoursPerDay = hoursEnd - hoursStart;

    let dueToDate = submitDate;

    let days = Math.trunc(turnaroundTime / hoursPerDay);
    turnaroundTime -= days * hoursPerDay;

    let hours = dueToDate.getHours() + turnaroundTime;
    if (hours > hoursEnd) {
        days++;
        hours -= hoursPerDay;
    }

    // Using timestamps handles overlapping months and years
    dueToDate.setTime(dueToDate.getTime() + days * msPerDay);
    dueToDate.setHours(hours);

    if (dueToDate.getDay() % 6 == 0) { // 0 or 6
        dueToDate.setTime(dueToDate.getTime() + 2 * msPerDay);
    }

    return dueToDate;
}

export default calculateDueDate;