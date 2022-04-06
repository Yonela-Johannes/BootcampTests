const yearsAgo = (year) => {
    
    const date = new Date()
    const currentYear = date.getFullYear()
    const result = year.length == 4 ? currentYear - year : 'enter four numbers' 
    return result;
}