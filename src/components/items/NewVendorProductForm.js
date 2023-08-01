import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewVendorProductForm = ({

}) => {
    const [seasons, setSeasons] = useState([])
    const [categories, setCategories] = useState([])
    const [amishVendors, setAmishVendors] = useState({
        fullName: "",
        address: ""
    })
    const localAmishUser = localStorage.getItem("amish_user");
    const amishUserObject = JSON.parse(localAmishUser)
    const [addVendor, setAddVendor] = useState({
        name: '',
        imageUrl: '',
        seasonsId: '',
        categoriesId: '',
        amishVendorsId: "",
        userId: amishUserObject.id
    })



    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8088/categories')
            .then((res) => res.json())
            .then((categoriesData) => {
                setCategories(categoriesData)
            })

        fetch('http://localhost:8088/seasons')
            .then((res) => res.json())
            .then((seasonsData) => {
                setSeasons(seasonsData)
            })
        fetch('http://localhost:8088/amishVendors')
            .then((res) => res.json())
            .then((vendorData) => {
                setAmishVendors(vendorData)
            })


    }, [])


    const handleAddVendor = async (evt) => {
        evt.preventDefault();
        if (
            addVendor.name &&
            addVendor.imageUrl &&
            addVendor.seasonsId &&
            addVendor.categoriesId &&
            amishVendors.fullName &&
            amishVendors.address
        ) {
            try {
                const amishVendorResponse = await fetch(`http://localhost:8088/amishVendors`, {
                    method: `POST`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName: amishVendors.fullName,
                        address: amishVendors.address,
                    }),
                });

                if (!amishVendorResponse.ok) {
                    throw new Error('Failed to create Amish Vendor.');
                }

                const newVendor = await amishVendorResponse.json();

                const addItemResponse = await fetch('http://localhost:8088/items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...addVendor, // Spread the addVendor object
                        amishVendorsId: newVendor.id, // Set the amishVendorsId here
                    }),
                });

                if (!addItemResponse.ok) {
                    throw new Error('Failed to add the item.');
                }

                navigate("/items");
            } catch (error) {
                console.error(error);
                // Handle error if necessary
            }
        } else {
            window.alert("Please complete the entire form");
        }
    };






    return (
        <form className="new-vendor-form">
            <h2 className="vendor-form-title">Add a new Amish vendor to our list:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        required
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Tomatoes, furniture, bread etc."
                        value={addVendor.name}
                        onChange={(event) => {
                            const copy = { ...addVendor }
                            copy.name = event.target.value
                            setAddVendor(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imgUrl">Image URL:</label>
                    <input
                        required
                        id="imgUrl"
                        type="text"
                        className="form-control"
                        placeholder="https://www.example.com"
                        value={addVendor.imageUrl}
                        onChange={(event) => {
                            const copy = { ...addVendor }
                            copy.imageUrl = event.target.value
                            setAddVendor(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <div>Season:</div>
                    {seasons.map((season) => {
                        return (
                            <div key={season.id} className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value={season.id}
                                        checked={addVendor.seasonsId === season.id}
                                        onChange={(event) => {
                                            const copy = { ...addVendor }
                                            copy.seasonsId = parseInt(event.target.value)
                                            setAddVendor(copy)
                                        }}
                                    />
                                    {season.name}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <div>Category:</div>
                    {categories.map((category) => {
                        return (
                            <div key={category.id} className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value={category.id}
                                        checked={addVendor.categoriesId === category.id}
                                        onChange={(event) => {
                                            const copy = { ...addVendor }
                                            copy.categoriesId = parseInt(event.target.value)
                                            setAddVendor(copy)
                                        }}
                                    />
                                    {category.name}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amishVendors-fullName">Amish Vendor Name:</label>
                    <input
                        required
                        id="amishVendors-fullName"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={amishVendors.fullName}
                        onChange={(event) => {
                            const copy = { ...amishVendors }
                            copy.fullName = event.target.value
                            setAmishVendors(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Amish Vendor Address:</label>
                    <input
                        required
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Street# Street Name, City, State"
                        value={amishVendors.address}
                        onChange={(event) => {
                            const copy = { ...amishVendors }
                            copy.address = event.target.value
                            setAmishVendors(copy)
                        }}
                    />
                </div>
            </fieldset>
            <button
                className="btn"
                onClick={(event) => {
                    handleAddVendor(event)
                }}
            >
                Add Vendor
            </button>
        </form>
    )
}