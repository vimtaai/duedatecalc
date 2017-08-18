export function calculateDueDate(submitDate, turnaroundTime) {
    // Predefined constants
    const hoursStart = 9;
    const hoursEnd = 17;
    const hoursPerDay = hoursEnd - hoursStart;
    const daysPerWeek = 5;
    const msPerDay = 86400000;

    let dueDate = new Date(submitDate);
    // startingDay -> 0 - Mon, 6 - Sun
    const startingDay = (dueDate.getDay() + 6) % 7;

    // Number of complete working days required
    let days = Math.trunc(turnaroundTime / hoursPerDay);
    // Number of complete working weeks required
    let weekends = Math.trunc(turnaroundTime / (hoursPerDay * daysPerWeek));

    // Hours of due time
    let hours = dueDate.getHours() + (turnaroundTime - days * hoursPerDay);
    // Handle day overlapping
    if (hours > hoursEnd) {
        days++;
        hours -= hoursPerDay;
    }
    // Handle weekends
    if (startingDay + days - (weekends * daysPerWeek) > 4) {
        weekends++;
    }

    // Using timestamps handles overlapping months and years
    dueDate.setTime(dueDate.getTime() + (days + weekends * 2) * msPerDay);
    dueDate.setHours(hours);

    return dueDate;
}

export default calculateDueDate;