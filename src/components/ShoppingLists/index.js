import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getShoppingLists, selectShoppingLists} from "../../slices/shoppingListsSlice";

function ShoppingLists() {
    const [isLoaded, setIsLoaded] = useState(false);
    const shoppingLists = useSelector(selectShoppingLists);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8000/api/shopping-lists/")
            .then(res => res.json())
            .then((result) => {
                dispatch(getShoppingLists(result));
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
            {shoppingLists.shoppingLists.map(shoppingList => {
                return (
                    <Link className="w-full text-center p-2 bg-white" key={shoppingList.id} to={"/shopping-list/" + shoppingList.id}>{shoppingList.name}</Link>
                )
            })}
        </div>
    );
}

export default ShoppingLists;