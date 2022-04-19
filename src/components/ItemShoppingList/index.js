function ItemShoppingList(props) {
    const {item} = props;


    const handleChecked = () => {
        console.log("c'est fait !");
    };

    return (
        <div className="flex px-4 py-2 justify-between">
            <input className="self-center" type="checkbox" onChange={handleChecked} checked={item.done}/>
            <div className={`w-full pl-2 ${item.done ? "line-through" : ""}`}>
                {item.content}
            </div>
            <div className="px-2 rounded-xl bg-red-500 text-white">Viande</div>
        </div>
    );
}

export default ItemShoppingList;