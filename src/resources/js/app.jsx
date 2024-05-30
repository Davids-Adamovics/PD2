import React from "react";
import ReactDOM from "react-dom/client";
import book1Image from "../public/images/66508a46bbf27.jpg"; // Import the image

function App() {
    return (
        <>
            <div className="container">
                <div className="allCards">
                    <div className="card">
                        <div className="textSide">
                          <h1>
                            Hobbits
                          </h1>
                          <p>

                          </p>
                        </div>
                        <div className="imgSide">
                            {/* Use the imported image variable */}
                            <img src={book1Image} alt="book1" width="500" height="600"/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="textSide"></div>
                        <div className="imgSide"></div>
                    </div>
                    <div className="card">
                        <div className="textSide"></div>
                        <div className="imgSide"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
