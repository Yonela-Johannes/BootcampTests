// total phone bill function
const totalPhoneBill = (data) => {
    if (data == '') {
        return 'invalid input!'
    } else if(typeof data === 'number') {
        return true
    }
    {
    let call = parseFloat('2.75')
    let smsAmount = parseFloat('0.65')
    if(typeof call == 'float' || typeof smsAmount == 'float'){
        return true;
    }
        if(typeof call !== 'float' || typeof call !== 'number' || typeof smsAmount !== 'number' || typeof smsAmount || 'float') {
            return 'not a valid input!'
        } else {
            let total = 0;
            let allData = data.split(',')
            let sortedData = allData
            let listData = sortedData.map(dataList => dataList.trimStart())
            let newList = listData.sort()
            let calls = newList.filter(totalCalls => totalCalls === "call")
            let sms = newList.filter(totalSms => totalSms === "sms")
            for (let i = 0; i < calls.length; i++) {
                total += call
            }
            for (let i = 0; i < sms.length; i++) {
                total += smsAmount
            }
            return `R${total.toFixed(2)}`
        }
    }
}

