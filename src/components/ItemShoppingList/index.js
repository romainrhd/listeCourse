function ItemShoppingList(props) {
    const {item} = props;
    return (
        <div className="flex items-stretch">
            <div>{item.content}</div>
        </div>
    );
}

export default ItemShoppingList;