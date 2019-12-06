export const toggleItems = (Items, id) => {
    return Items.map(item => {
        if (item['id'] === id) return {...item, open: !item['open']};
        return item;
    })
}