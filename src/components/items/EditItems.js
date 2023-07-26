
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditItems = ({



}) => {
    const { itemId } = useParams(); // Get the itemId from the URL

    useEffect(() => {
        // Fetch the existing item data based on the itemId parameter
        fetch(`http://localhost:8088/items/${itemId}`)
            .then((res) => res.json())
            .then((itemData) => {
                // Update the addVendor state with the existing item data
                setAddVendor({
                    name: itemData.name,
                    imageUrl: itemData.imageUrl,
                    seasonsId: itemData.seasonsId,
                    categoriesId: itemData.categoriesId,
                    amishVendorsId: itemData.amishVendorsId,
                    userId: itemData.userId,
                });

                // Also update the amishVendors state to populate the Amish vendor fields
                setAmishVendors({
                    fullName: amishVendors.fullName,
                    address: amishVendors.address,
                });
            })
            .catch((error) => {
                console.error('Error fetching item data:', error);
            });
    }, [itemId]); // Execute the effect when the itemId changes

    // ... Rest of the component ...


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
        fetch(`http://localhost:8088/amishVendors/${addVendor.amishVendorsId}`)
            .then((res) => res.json())
            .then((vendorData) => {
                setAmishVendors({
                    fullName: vendorData.fullName,
                    address: vendorData.address
                })
            })


    }, [addVendor.amishVendorsId])

    const handleEditVendor = async (evt) => {
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
                const amishVendorResponse = await fetch(`http://localhost:8088/amishVendors/${addVendor.amishVendorsId}`, {
                    method: `PUT`,
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

                const addItemResponse = await fetch(`http://localhost:8088/items/${itemId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        addVendor
                    ),
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
                    handleEditVendor(event)
                }}
            >
                Edit Vendor
            </button>
        </form>
    )
}



// import { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// export const EditItems = ({

// }) => {
//     const [seasons, setSeasons] = useState([])
//     const [categories, setCategories] = useState([])
//     const [amishVendors, setAmishVendors] = useState([])
//     const localAmishUser = localStorage.getItem("amish_user");
//     const amishUserObject = JSON.parse(localAmishUser)

//     const [items, setItems] = useState({
//         name: '',
//         imageUrl: '',
//         seasonsId: '',
//         categoriesId: '',
//         amishVendorsId: "",
//         userId: amishUserObject.id
//     })
//     const { itemsId } = useParams()



//     const navigate = useNavigate()

//     useEffect(() => {
//         fetch('http://localhost:8088/categories')
//             .then((res) => res.json())
//             .then((categoriesData) => {
//                 setCategories(categoriesData)
//             })

//         fetch('http://localhost:8088/seasons')
//             .then((res) => res.json())
//             .then((seasonsData) => {
//                 setSeasons(seasonsData)
//             })
//         fetch('http://localhost:8088/amishVendors')
//             .then((res) => res.json())
//             .then((vendorData) => {
//                 setAmishVendors(vendorData)
//             })
//         fetch(`http://localhost:8088/items/${itemsId}`)
//             .then((res) => res.json())
//             .then((itemObj) => {
//                 setItems(itemObj)
//             })


//     }, [])

//     const handleEditVendor = (evt) => {
//         evt.preventDefault()
//         const amishVendorToSendToAPI = {
//             fullName: amishVendors.fullName,
//             address: amishVendors.address
//         }
//         return fetch(`http://localhost:8088/amishVendors`, {
//             method: `PUT`,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(amishVendorToSendToAPI),
//         })
//             .then((res) => res.json())
//             .then(() => {

//                 items.name &&
//                     items.imageUrl &&
//                     items.seasonsId &&
//                     items.categoriesId &&
//                     items.amishVendorsId &&
//                     items.userId
//                     ?
//                     fetch('http://localhost:8088/items/${itemsId}', {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify(items),
//                     })
//                         .then(
//                             navigate("items")
//                         ) : window.alert("Please complete the entire form")
//             })
//     }

//     return (
//         <form className="new-vendor-form">
//             <h2 className="vendor-form-title">Edit for your item:</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Product Name:</label>
//                     <input
//                         required
//                         id="name"
//                         type="text"
//                         className="form-control"
//                         placeholder="Item"
//                         value={items.name}
//                         onChange={(event) => {
//                             const copy = { ...items }
//                             copy.name = event.target.value
//                             setItems(copy)
//                         }}
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="imgUrl">Image URL:</label>
//                     <input
//                         required
//                         id="imgUrl"
//                         type="text"
//                         className="form-control"
//                         placeholder="https://www.example.com"
//                         value={items.imageUrl}
//                         onChange={(event) => {
//                             const copy = { ...items }
//                             copy.imageUrl = event.target.value
//                             setItems(copy)
//                         }}
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <div>Season:</div>
//                     {seasons.map((season) => {
//                         return (
//                             <div key={season.id} className="radio">
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         value={season.id}
//                                         checked={items.seasonsId === season.id}
//                                         onChange={(event) => {
//                                             const copy = { ...items }
//                                             copy.seasonsId = parseInt(event.target.value)
//                                             setItems(copy)
//                                         }}
//                                     />
//                                     {season.name}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <div>Category:</div>
//                     {categories.map((category) => {
//                         return (
//                             <div key={category.id} className="radio">
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         value={category.id}
//                                         checked={items.categoriesId === category.id}
//                                         onChange={(event) => {
//                                             const copy = { ...items }
//                                             copy.categoriesId = parseInt(event.target.value)
//                                             setItems(copy)
//                                         }}
//                                     />
//                                     {category.name}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Amish Vendor Name:</label>
//                     <input
//                         required
//                         id="name"
//                         type="text"
//                         className="form-control"
//                         placeholder="Full Name"
//                         value={amishVendors.fullName}
//                         onChange={(event) => {
//                             const copy = { ...items }
//                             copy.name = event.target.value
//                             setItems(copy)
//                         }}
//                     />
//                 </div>
//             </fieldset>
//             <button
//                 className="btn"
//                 onClick={(event) => {
//                     handleEditVendor(event)
//                 }}
//             >
//                 Edit Vendor Info
//             </button>
//         </form>
//     )
// }