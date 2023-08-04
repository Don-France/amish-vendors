import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const SaleItemDetails = () => {
    const [amishVendors, setAmishVendors] = useState([])

    const [item, setItem] = useState()

    const { itemId } = useParams()


    useEffect(() => {
        fetch(`http://localhost:8088/items/${itemId}?_expand=seasons&_expand=categories&_expand=amishVendors`)
            .then((res) => res.json())
            .then((itemsData) => {
                setItem(itemsData)
            })
        fetch('http://localhost:8088/amishVendors')
            .then((res) => res.json())
            .then((vendorData) => {
                setAmishVendors(vendorData)
            })
    }, [])

    const handleDelete = () => {
        fetch(`http://localhost:8088/items/${itemId}`, {
            method: 'DELETE',
        })
        fetch(`http://localhost:8088/amishVendors/${item.amishVendorsId}`, {
            method: "DELETE",
        })
            .then(
                navigate("/items")
            )

    }

    const navigate = useNavigate()

    if (!item) { return null }
    return (

        <>

            <div key={item.id} className="item-card">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="item-img"
                />
                <div className="item-name" key={`item4--${item.id}`}>{item.name}</div>
                <div className="item-name" key={`item5--${item.id}`}>Season Availability: {item.seasons.name}</div>
                <div className="item-name" key={`item6--${item.id}`}>Category: {item.categories.name}</div>
                {amishVendors.map((vendor) => {

                    if (item.amishVendorsId === vendor.id) {
                        return (
                            <React.Fragment key={`vendor--${vendor.id}`}><div className="item-name" key={`item3--${item.id}`}>Name: {vendor.fullName}</div>
                                <div className="item-name" key={`item2--${item.id}`}>Location: {vendor.address}</div></React.Fragment>);
                    }
                    return null;
                })}
            </div>
            {(() => {
                const localAmishUser = localStorage.getItem("amish_user");
                const amishUserObject = JSON.parse(localAmishUser);

                return amishUserObject.id === item.userId ? (
                    <><>
                        <div className="button-container">
                            <button onClick={() => navigate(`/items/${item.id}/edit`)}>Edit</button>
                            <button onClick={() => handleDelete()}>Delete</button>
                        </div>
                    </></>
                ) : null;
            })()}
        </>
    );

}