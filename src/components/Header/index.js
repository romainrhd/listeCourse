import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header() {
    const navigate = useNavigate();

    const handleClickBackButton = () => {
        navigate(-1);
    }

    return (
        <div className="flex justify-between w-full border-b p-2">
            <button onClick={handleClickBackButton}>
                <FontAwesomeIcon icon="arrow-left"/>
            </button>
            Mes listes de courses
            <Link to="/">
                <FontAwesomeIcon icon="home"/>
            </Link>
        </div>
    );
}

export default Header;