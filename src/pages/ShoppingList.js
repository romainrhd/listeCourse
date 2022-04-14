import {useParams} from "react-router-dom";

function ShoppingList() {
    let { shoppingListId } = useParams();

    return (
        <h1>Ma super liste avec l'id : { shoppingListId } !</h1>
    );
}

export default ShoppingList;