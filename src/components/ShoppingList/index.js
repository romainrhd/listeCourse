import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemShoppingList from "../ItemShoppingList";

function ShoppingList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoppingList, setShoppingList] = useState(null);
    const {shoppingListId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/shopping-lists/${shoppingListId}`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setShoppingList(result);
            });
    }, [shoppingListId]);

    if (!isLoaded) {
        return <p>Chargement ...</p>
    }

    return (
        <div>
            <div className="flex flex-col divide-y bg-white">
                {shoppingList.items.map((item) => {
                    return <ItemShoppingList key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
}

export default ShoppingList;