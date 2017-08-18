export function calculateDueDate(submitDate, turnaroundTime) {
    const hoursStart = 9;
    const hoursEnd = 17;
    const hoursPerDay = hoursEnd - hoursStart;

    let dueToDate = submitDate;

    let days = 0;

    let hours = dueToDate.getHours() + turnaroundTime;
    if (hours > hoursEnd) {
        days++;
        hours -= hoursPerDay;
    }

    // Using timestamps handles overlapping months and years
    const timeToAdd = days * 86400000;
    dueToDate.setTime(dueToDate.getTime() + timeToAdd);
    
    dueToDate.setHours(hours);
    return dueToDate;
}

export default calculateDueDate;