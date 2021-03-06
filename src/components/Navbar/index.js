import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="border border-gray-300 bt-1 fixed bg-white bottom-0 w-full">
            <div className="flex justify-between divide-x divide-gray-300">
                <Link className="w-full text-center py-2" to="/">Mes listes</Link>
                <Link className="w-full text-center py-2" to="/profil">Mon profil</Link>
            </div>
        </div>
    );
}

export default Navbar;