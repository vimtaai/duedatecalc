export function calculateDueDate(submitDate, turnaroundTime) {
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
    dueToDate.setTime(dueToDate.getTime() + days * 86400000);

    dueToDate.setHours(hours);
    return dueToDate;
}

export default calculateDueDate;