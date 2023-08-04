// Create and export a function that will be used to search all items by seasonId
// I will need a use state to fetch the items and seasons, maybe json query string
// I will need useEffect to watch for when a season is selected 
// A select button for the seasons
// Have the jsx render the items that are available per season selected



import { useState, useEffect } from "react";
import "./seasons.css"

export const SeasonsSearch = () => {
    const [items, setItems] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [amishVendors, setAmishVendors] = useState([])
    const [selectedSeason, setSelectedSeason] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/items")
            .then((res) => res.json())
            .then((itemsData) => {
                setItems(itemsData);
            });

        fetch("http://localhost:8088/seasons")
            .then((res) => res.json())
            .then((seasonsData) => {
                setSeasons(seasonsData);
            });
        fetch("http://localhost:8088/amishVendors")
            .then((res) => res.json())
            .then((vendorsData) => {
                setAmishVendors(vendorsData);
            });
    }, []);

    useEffect(() => {
        if (selectedSeason) {
            // Find the season ID based on the selected season name
            const selectedSeasonId = seasons.find(
                (season) => season.name === selectedSeason
            )?.id;
            if (selectedSeason) {
                const itemsForSelectedSeason = items.filter(
                    (item) => item.seasonsId === selectedSeasonId
                );
                setFilteredItems(itemsForSelectedSeason);
            } else {
                setFilteredItems([]);
            }
        } else {
            setFilteredItems([]);
        }
    }, [selectedSeason, items]);

    const handleSeasonSelect = (event) => {
        setSelectedSeason(event.target.value);
    };
    const getVendorInfo = (vendorId) => {
        const vendor = amishVendors.find((vendor) => vendor.id === vendorId);
        return vendor ? `${vendor.fullName}, ${vendor.address}` : "Unknown Vendor";
    };

    return (
        <div>
            {/* Dropdown to select a season */}
            <select onChange={handleSeasonSelect}>
                <option value="">Select a season</option>
                {seasons.map((season) => (
                    <option key={season.id} value={season.name}>
                        {season.name}
                    </option>
                ))}
            </select>
            {/* Display items for the selected season */}
            {selectedSeason && (
                <div className="seasons-items">
                    <h2>Items available in {selectedSeason}!</h2>
                    <div className="item-rows-container">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <div key={item.id} className="seasons-item-container">
                                    <div className="seasons-image-container">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="seasons-item-img"
                                        />
                                    </div>
                                    <div className="seasons-item-info">
                                        <div className="item-name">{item.name}</div>
                                        {/* Display vendor info */}
                                        <div className="seasons-vendor-info">Sold by: {getVendorInfo(item.amishVendorsId)}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items available for {selectedSeason}.</p>
                        )}
                    </div>
                </div>
            )}

        </div>

    );



}
