import {Link, useNavigate, useMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ShoppingListIdHook from "../../hooks/shoppingListIdHook";

function Header() {
    const navigate = useNavigate();
    const matchShoppingList = useMatch('/shopping-list/:shoppingListId');
    const [shoppingListIdHook,] = ShoppingListIdHook.useShoppingListIdHook();

    const handleClickBackButton = () => {
        navigate(-1);
    }

    const handleClickShoppingListChecked = () => {
        fetch(`http://localhost:8000/api/shopping-lists/${shoppingListIdHook}/archive`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then((result) => {
                navigate('/');
            });
    }

    const rightButton = () => {
        if (!matchShoppingList) {
            return (
                <Link to="/">
                    <FontAwesomeIcon icon="house"/>
                </Link>
            );
        }
        return (
            <button onClick={handleClickShoppingListChecked}>
                <FontAwesomeIcon icon="check"/>
            </button>
        );
    }

    return (
        <div className="flex justify-between w-full border-b p-2 fixed bg-white">
            <button onClick={handleClickBackButton}>
                <FontAwesomeIcon icon="arrow-left"/>
            </button>
            Mes listes de courses
            {rightButton()}
        </div>
    );
}

export default Header;