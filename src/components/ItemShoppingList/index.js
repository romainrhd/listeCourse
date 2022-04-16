function ItemShoppingList(props) {
    const {item} = props;
    return (
        <div className="flex items-stretch px-4 py-2">
            <div>{item.content}</div>
        </div>
    );
}

export default ItemShoppingList;