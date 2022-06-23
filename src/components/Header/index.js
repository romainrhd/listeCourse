import {Link, useNavigate, useMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header() {
    const navigate = useNavigate();
    const matchShoppingList = useMatch('/shopping-list/:shoppingListId');

    const handleClickBackButton = () => {
        navigate(-1);
    }

    const handleClickShoppingListChecked = () => {
        console.log('shopping list checked');
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