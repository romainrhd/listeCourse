import {useState} from "react";

function ItemShoppingList(props) {
    const [item, setItem] = useState(props.item);

    const handleChecked = (event) => {
        fetch(`http://localhost:8000/api/items/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                done: event.target.checked
            })
        })
            .then(res => res.json())
            .then((result) => {
                setItem(result);
            });
    };

    return (
        <div className="flex px-4 py-2 justify-between">
            <input className="self-center" type="checkbox" onChange={handleChecked} checked={item.done}/>
            <div className={`w-full pl-2 ${item.done ? "line-through" : ""}`}>
                {item.content}
            </div>
            {/* TODO : A mettre quand les catégories seront implémentées en back */}
            {/*<div className="px-2 rounded-xl bg-red-500 text-white">Viande</div>*/}
        </div>
    );
}

export default ItemShoppingList;