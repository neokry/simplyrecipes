import "./App.css";
import Recipe from "./views/Recipe";
import logo from "./logo.png";

function App() {
    document.body.classList.add("bg-green-400");

    return (
        <div>
            <div className="p-3">
                <div className="text-white font-bold text-xl flex justify-around">
                    <img
                        className="object-cover w-20 h-20"
                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>
            <div className="pt-6 pb-3 px-5">
                <div className="text-whitetext-xl flex justify-around text-center">
                    <div>
                        No bullshit,{" "}
                        <span className="font-extrabold">just recipes</span>.
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
            <div className="p-1 pt-6">
                <div className="bg-green-900 rounded-lg flex justify-around text-xl font- text-white p-4">
                    <button>Show More Recipes</button>
                </div>
                <div className="bg-green-700 rounded-lg flex justify-around text-xl font- text-white p-4 mt-1">
                    <a href="https://patrickgenevich.typeform.com/to/XkNFBhh7">
                        Add Your Recipe
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
