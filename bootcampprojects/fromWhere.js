const fromWhere = (regNum) => {
    if (typeof regNum !== 'string') {
        return "invalid input!"
    } else if (regNum.length == 2 && typeof regNum == 'string') {
        if (regNum == 'CY') {
            return 'Bellville';
        } else if (regNum == 'CJ') {
            return 'Paarl';
        } else if (regNum === 'CA') {
            return 'Cape Town';
        } else {
            return 'Some other place!'
        }
    } else {
        return 'should not be less than 2 or greater than 3'
    }
}