const findItemsOver20 = (objects) => {
    const higherQuantity = 20;
    const overTwentyList = []
    let listOver20 = objects.map(list => {
        if (list.qty > higherQuantity) {
            overTwentyList = [...overTwentyList, list]
        }
    });
    return overTwentyList
}

const findItemsOver = (items, limit) => {
    let listItems = items
    let overLimit = []
    listItems.map(list => {
        if (list.qty > limit) {
            overLimit = [...overLimit, list]
        }
    });
    return overLimit
}