import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./items.css"


export const ItemsForSale = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8088/items')
            .then((res) => res.json())
            .then((itemsData) => {
                setItems(itemsData)
            })
    }, [])

    return (
        <>
            <h1>Feast your eyes on this wonderful selection of homegrown produce, handmade crafts, and furniture</h1>
            <div className="button-container">
                <button onClick={() => navigate(`/seasons`)}>Search by season availability</button>
                <button onClick={() => navigate(`/category`)}>Search by item category</button>
            </div>
            <div className="item-container">
                {items.map((item) => (
                    <div key={item.id} className="item-card" onClick={() => navigate(`/items/${item.id}`)}>
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

