import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function ShoppingLists() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoppingLists, setShoppingLists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/shopping-lists/")
            .then(res => res.json())
            .then((result) => {
                setShoppingLists(result);
            })
            .then(() => {
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <p>Chargement ...</p>
    }

    return (
        <div className="flex flex-wrap flex-row justify-center divide-y">
            {shoppingLists.map(shoppingList => {
                return (
                    <Link className="w-full text-center p-2 bg-white" key={shoppingList.id} to={"/shopping-list/" + shoppingList.id}>{shoppingList.name}</Link>
                )
            })}
        </div>
    );
}

export default ShoppingLists;