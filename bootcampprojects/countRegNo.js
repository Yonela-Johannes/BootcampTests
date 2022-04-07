// registration number function
const countRegNumber = regNo => typeof regNo !== 'string' ? "invalid input" : regNo.split(',').length
