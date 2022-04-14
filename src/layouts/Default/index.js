// Deps
import {Route, Routes} from "react-router-dom";

// Components & Pages
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Navbar from "../../components/Navbar";
import ShoppingList from "../../pages/ShoppingList";

function LayoutDefault() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="grow px-4 py-4 bg-gray-100">
                <div className="container mx-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profil" element={<Profile />} />
                        <Route path="/shopping-list/:shoppingListId" element={<ShoppingList />} />
                    </Routes>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default LayoutDefault;