//All from Town function 

var countAllFromTown = (regNo, numPlate) => {
    var result = []
    var regNoList = regNo.split(',')
    for (var index = 0; index < regNoList.length; index++) {
        var list = regNoList[index]
        if (list.includes(numPlate)) {
            result = [...result, list]
        }
    }
    return result.length
}