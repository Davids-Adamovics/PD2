import React from "react";

function MainPage() {
    return (
        <div className="bg-light py-4">
            <div className="container">
                <h1>Līdzīgas grāmatas</h1>
                <div className="card-group">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src="https://i.ebayimg.com/images/g/HW4AAOSwYDZgjoaO/s-l600.jpg"
                            alt="Hobits"
                            style={{ height: "400px" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Hobits (The Hobbit)</h5>
                            <p className="card-text">
                                Hobits ir autora Dž. R. R. Tolkīna grāmata,
                                kuras galvenais varonis ir hobits Bilbo Baginss.
                                Pirmo reizi tas izdots 1937. gada 21. septembrī.
                                Ideja par šo grāmatu radās kādā vakarā, kad
                                Tolkīna dēls lūdzis, lai tēvs pastāsta pasaku.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 2 days ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="card-img-top"
                            src="https://upload.wikimedia.org/wikipedia/en/b/b6/The_Da_Vinci_Code.jpg"
                            alt="Da Vinci kods"
                            style={{ height: "400px" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Da Vinči kods (The Da Vinci Code)
                            </h5>
                            <p className="card-text">
                                "Da Vinči kods" ir amerikāņu rakstnieka Dena
                                Brauna romāns, kas izdots 2003. gadā. "Da Vinči
                                kods" ir Brauna populārā romāna "Eņģeļi un
                                dēmoni" turpinājums. Romāns kļuva par pasaulē
                                atzītu bestselleru, kā arī izraisīja lielu
                                interesi par Svētā Grāla leģendu un Marijas
                                Magdalēnas vietu kristietības vēsturē.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="card-img-top"
                            src="https://grey.com.np/cdn/shop/products/l1.jpg?v=1670927238"
                            alt="The Laws of Human Nature"
                            style={{ height: "400px" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                The Laws of Human Nature
                            </h5>
                            <p className="card-text">
                                It provides a comprehensive understanding of the
                                psychological forces that drive people's
                                actions. The book's exploration of historical
                                figures and events makes it a fascinating read.
                                It offers practical strategies for improving
                                relationships and achieving your goals.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
