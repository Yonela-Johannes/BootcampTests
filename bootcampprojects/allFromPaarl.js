//Allpaarl funtion
const result = []
const allPaarl = (regNo) => {
    if (regNo !== 'string') {
        return false
    } else {
        const regList = regNo.split(',')
        const allRegNo = []
        regList.forEach(regNumbers => {
            if (regNumbers.includes('CJ')) {
                allRegNo.push(regNumbers)
            }
        })
        for (let i = 0; i < allRegNo.length; i++) {
            const list = allRegNo[i].trim()
            result.push(list)
        }
        return result
    }

}