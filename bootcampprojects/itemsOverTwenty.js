const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

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