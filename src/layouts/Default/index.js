// Deps
import {Route, Routes} from "react-router-dom";

// Components & Pages
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import List from "../../pages/List";

function LayoutDefault() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="grow bg-gray-100 h-full mt-10 mb-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profil" element={<Profile />} />
                    <Route path="/shopping-list/:shoppingListId" element={<List />} />
                </Routes>
            </div>
            <Navbar />
        </div>
    );
}

export default LayoutDefault;