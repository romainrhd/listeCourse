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
            <h1 className="text-center text-2xl">{shoppingList.name}</h1>
            <div className="flex flex-col mt-4">
                {shoppingList.items.map((item) => {
                    return <ItemShoppingList key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
}

export default ShoppingList;