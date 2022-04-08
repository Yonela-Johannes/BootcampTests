// transport fee function
const transportFee = (shift) => {
    if (shift === '') {
        return 'insert value'
    } else if (typeof shift !== 'string') {
        return 'invalid input!'
    } else {
        if (shift === 'morning') {
            return 'R20'
        } else if (shift === 'afternoon') {
            return 'R10'
        } else {
            return 'free'
        }
    }
}