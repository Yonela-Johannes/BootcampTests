const isWeekday = (day) => {
    let weekday = day.toLowerCase()
    if (weekday == 'Monday'.toLowerCase() || weekday == 'Tuesday'.toLowerCase() || weekday === 'Wednesday'.toLowerCase() || weekday == 'Thursday'.toLowerCase() || weekday == 'Friday'.toLowerCase()) {
        return true
    } else if (weekday == '') {
        return "Please enter weekday!"
    } else if (weekday === 'number') {
        return 'Please enter a valid weekday!'
    } else if (weekday == 'Saturday'.toLowerCase() || weekday == 'Sunday'.toLowerCase()) {
        return false
    }
}


