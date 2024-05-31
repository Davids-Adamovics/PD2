import { useEffect, useState } from "react";

export default function App() {
    const [selectedBook, setSelectedBook] = useState(null);

    function handleBookSelection(id) {
        setSelectedBook(id);
    }

    return (
        <>
            {selectedBook ? (
                <BookPage selectedBook={selectedBook} />
            ) : (
                <Homepage />
            )}
        </>
    );
}

function Homepage() {
    const [topBooks, setTopBooks] = useState([]);

    useEffect(function () {
        async function getTopBooks() {
            try {
                const result = await fetch(
                    "http://localhost/data/get-top-books"
                );

                if (!result.ok) {
                    throw new Error("Kļūda ielādējot datus");
                }

                const data = await result.json();

                setTopBooks(data);
            } catch (error) {
                console.log(error);
            }
        }

        getTopBooks();
    }, []);

    return (
        <>
            {topBooks.map((book, idx) => (
                <TopBook book={{ ...book, idx: idx }} key={book.id} />
            ))}
        </>
    );
}

function TopBook({ book }) {
    return (
        <div className="row mb-5 pt-5 pb-5 bg-light">
            <div className="col-md-6 mt-2 px-5 text-start order-2">
                <p className="display-4">{book.name}</p>
                <p className="lead">
                    {book.description.split(" ").slice(0, 32).join(" ") +
                        "&hellip;"}
                </p>
                <button className="btn btn-success">Apskatīt</button>
            </div>
            <div className="col-md-6 text-center order-1">
                <img
                    className="img-fluid img-thumbnail rounded-lg w-50"
                    alt={book.name}
                    src={book.image}
                />
            </div>
        </div>
    );
}

function BookPage({ selectedBook }) {
    return (
        <>
            <p>Grāmata ir izvēlēta</p>
        </>
    );
}
