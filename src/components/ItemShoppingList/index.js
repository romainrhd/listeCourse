function ItemShoppingList(props) {
    const {item} = props;
    return (
        <div className="flex">
            <div className="basis-1/4">
                <input type="checkbox"/>
            </div>
            <div className="basis-3/4" key={item.id}>{item.content}</div>
        </div>
    );
}

export default ItemShoppingList;