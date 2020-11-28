import React, { useState } from "react";

function Recipe({ recipeData }) {
    const [isFullView, setIsFullView] = useState(false);

    return (
        <div className="flex justify-around pt-3 mx-2">
            <div className="shadow-lg w-full rounded-2xl bg-white p-2">
                <h2 className="text-lg font-bold">Spicy Pan Chicken</h2>
                <h4 className="text-gray-400">Patrick Genevich</h4>
                {isFullView ? createFullView() : null}
                <div className="flex justify-around">
                    <button
                        className="text-blue-400"
                        onClick={() => setIsFullView(!isFullView)}
                    >
                        {isFullView ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function createFullView() {
    return (
        <div>
            <ul className="pt-3">
                <li>Ing 1</li>
                <li>Ing 2</li>
                <li>Ing 3</li>
            </ul>
            <ol className="pt-3">
                <li>Direction 1</li>
                <li>Direction 2</li>
                <li>Direction 3</li>
            </ol>
        </div>
    );
}

export default Recipe;
