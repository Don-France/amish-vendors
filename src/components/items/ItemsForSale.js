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

    return <><div className="item-container" key={`item`}>
        {items.map((item) => {
            return (
                <><div key={item.id} className="item-card">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="item-img"
                        onClick={() => navigate(`/items/${item.id}`)} />
                    <div>{item.name}</div>
                </div></>
            )
        })}
    </div>
        <h3>Please feel free to add an Amish vendor we may have overlooked!</h3>
        <button onClick={() => navigate(`/new`)}>New Vendor</button></>
}