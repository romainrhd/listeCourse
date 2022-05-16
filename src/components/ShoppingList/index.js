import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemShoppingList from "../ItemShoppingList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ShoppingList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoppingList, setShoppingList] = useState(null);
    const [newItem, setNewItem] = useState("");
    const {shoppingListId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/shopping-lists/${shoppingListId}`)
            .then(res => res.json())
            .then((result) => {
                setShoppingList(result);
            })
            .then(() => setIsLoaded(true));
    }, [shoppingListId]);

    const handleChangeAddItem = ((event) => setNewItem(event.target.value));

    const handleSubmitAddItem = ((event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(`http://localhost:8000/api/shopping-lists/${shoppingListId}/items`, {
            method: "POST",
            body: JSON.stringify({
                content: formData.get('itemContent'),
                done: false
            })
        })
            .then(res => res.json())
            .then((result) => {
                setShoppingList(result);
            })
            .then(() => {
                setNewItem("");
                setIsLoaded(true);
            });
    });

    if (!isLoaded) {
        return <p>Chargement ...</p>
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col divide-y bg-white">
                {shoppingList.items.map((item) => {
                    return <ItemShoppingList key={item.id} item={item} />;
                })}
            </div>
            <form className="flex" onSubmit={handleSubmitAddItem}>
                <input type="text" name="itemContent" value={newItem} onChange={handleChangeAddItem} className="w-full border-gray-200" placeholder="Ajouter un article"/>
                <button type="submit" className="border px-4 bg-white">
                    <FontAwesomeIcon icon="plus"/>
                </button>
            </form>
        </div>
    );
}

export default ShoppingList;