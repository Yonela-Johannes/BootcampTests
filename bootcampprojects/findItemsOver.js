// objects
const findItemsAnswer = [
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 17 }
];

const itemList2 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 17 },
    { name: 'apples', qty: 3 },
];

// function
const findItemsOver = (items, limit) => {
    if (items == '') {
        return 'enter array!'
    } else if (typeof limit !== 'number') {
        return 'your limit should a number'
    } else {
        let listItems = items
        let overLimit = []
        listItems.map(list => {
            if (list.qty > limit) {
                overLimit = [...overLimit, list]
            }
        });
        return overLimit
    }
}