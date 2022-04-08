const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];
const itemsOver20Answer = [
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 }
]

const findItemsOver20 = (items) => {
    let higherQuantity = 20;
    let overTwentyList = []
    if (typeof items == 'string') {
        return "Input should be a list not a string"
    } else if (typeof items == 'number') {
        return 'Input should not be a number, enter list'
    } else {
        let listOver20 = items.map(list => {
            if (list.qty > higherQuantity) {
                overTwentyList = [...overTwentyList, list]
            }
        });
        return overTwentyList
    }
}