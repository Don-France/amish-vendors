// Create and export a function that will be used to search all items by categoriesId
// I will need a use state to fetch the items and seasons, maybe json query string
// I will need useEffect to watch for when a category is selected 
// A select button for the categories
// Have the jsx render the items that are available per category selected



import { useState, useEffect } from "react";
import "./category.css"
export const CategoriesSearch = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [amishVendors, setAmishVendors] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/items")
            .then((res) => res.json())
            .then((itemsData) => {
                setItems(itemsData);
            });

        fetch("http://localhost:8088/categories")
            .then((res) => res.json())
            .then((categoriesData) => {
                setCategories(categoriesData);
            });
        fetch("http://localhost:8088/amishVendors")
            .then((res) => res.json())
            .then((vendorsData) => {
                setAmishVendors(vendorsData);
            });
    }, []);

    useEffect(() => {
        if (selectedCategories) {
            // Find the season ID based on the selected season name
            const selectedCategoriesId = categories.find(
                (category) => category.name === selectedCategories
            )?.id;
            if (selectedCategories) {
                const itemsForSelectedCategories = items.filter(
                    (item) => item.categoriesId === selectedCategoriesId
                );
                setFilteredItems(itemsForSelectedCategories);
            } else {
                setFilteredItems([]);
            }
        } else {
            setFilteredItems([]);
        }
    }, [selectedCategories, items]);

    const handleCategorieselect = (event) => {
        setSelectedCategories(event.target.value);
    };
    const getVendorInfo = (vendorId) => {
        const vendor = amishVendors.find((vendor) => vendor.id === vendorId);
        return vendor ? `${vendor.fullName}, ${vendor.address}` : "Unknown Vendor";
    };

    return (
        <div>
            {/* Dropdown to select a category */}
            <select onChange={handleCategorieselect}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>

            {/* Display items for the selected category */}
            {selectedCategories && (
                <div className="category-items">
                    <h2>Items available in {selectedCategories}!</h2>
                    <div className="category-item-rows-container">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <div key={item.id} className="category-item-container">
                                    <div className="category-image-container">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="category-item-img"
                                        />
                                    </div>
                                    <div className="category-item-info">
                                        <div className="category-item-name">{item.name}</div>
                                        {/* Display vendor info */}
                                        <div className="category-vendor-info">Sold by: {getVendorInfo(item.amishVendorsId)}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items available for {selectedCategories}.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};