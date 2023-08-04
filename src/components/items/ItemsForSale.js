import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./items.css"
// import 'bulma/css/bulma.min.css';

const getLoggedInUserId = () => {
    const localAmishUser = localStorage.getItem("amish_user");
    const amishUserObject = JSON.parse(localAmishUser);

    return amishUserObject.id
}

export const ItemsForSale = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const loggedInUserId = getLoggedInUserId()

    useEffect(() => {
        fetch('http://localhost:8088/items')
            .then((res) => res.json())
            .then((itemsData) => {
                setItems(itemsData)
            })
    }, [])

    return (
        <>
            <div className="items-header">
                <h1>Items currently being offered for sale!</h1>
            </div>
            <h2>Feast your eyes on this wonderful selection of homegrown produce, handmade crafts, and furniture</h2>
            <div className="button-container">
                <button onClick={() => navigate(`/seasons`)}>Search by season availability</button>
                <button onClick={() => navigate(`/category`)}>Search by product category</button>
            </div>
            <div className="item-container">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`item-card ${item.userId === loggedInUserId ? "highlight" : ""}`}
                        // className="item-card"
                        onClick={() => navigate(`/items/${item.id}`)}>
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="item-img"
                        />
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
            <h3>Please feel free to add an Amish vendor we may have overlooked!</h3>
            <button className="newVendor-button" onClick={() => navigate(`/new`)}>New Vendor</button>
        </>

    )
};


