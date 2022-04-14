import {useState} from "react";
import {Link} from "react-router-dom";

function ShoppingLists() {
    const [shoppingLists, setShoppingLists] = useState([
        {
            id: 1,
            name: "Ma liste de course"
        },
        {
            id: 2,
            name: "Anniversaire Hugo"
        },
        {
            id: 3,
            name: "Anniversaire Lucie"
        },
        {
            id: 4,
            name: "Fête de Pacques"
        },
        {
            id: 5,
            name: "Noël"
        }
    ]);

    return (
        <div className="flex flex-wrap flex-row justify-center gap-2">
            {shoppingLists.map(shoppingList => {
                return (
                    <Link className="w-full text-center p-2 rounded-md bg-white" key={shoppingList.id} to={"/shopping-list/" + shoppingList.id}>{shoppingList.name}</Link>
                )
            })}
        </div>
    );
}

export default ShoppingLists;