import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
            <h1>{shoppingList.name}</h1>
            <ul>
                {shoppingList.items.map((item) => {
                    return <li key={item.id}>{item.content}</li>;
                })}
            </ul>
        </div>
    );
}

export default ShoppingList;