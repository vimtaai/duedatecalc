export function calculateDueDate(submitDate, turnaroundTime) {
    let dueToDate = submitDate;
    dueToDate.setHours(dueToDate.getHours() + turnaroundTime);
    return dueToDate;
}

export default calculateDueDate;