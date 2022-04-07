//All from Town function 
let res = []

const countAllFromTown = (regNo, numPlate) => {
    if (numPlate == '') {
        return "enter valid input!"
    } else if (numPlate !== 'string') {
        return 'enter valid number plate!'
    }
    else {
        const result = []
        const regNoList = regNo.split(',')
        for (var index = 0; index < regNoList.length; index++) {
            var list = regNoList[index]
            if (list.includes(numPlate)) {
                res = [...result, list]
            }
        }
    }
    return res.length
}
