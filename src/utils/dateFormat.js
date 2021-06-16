const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function formatMonthYear(dateObj) {
    return months[dateObj.getMonth()] + " " + dateObj.getFullYear();
}

export function formatDayMonthYear(dateObj) {
    return dateObj.getDate() + " " + formatMonthYear(dateObj);
}
