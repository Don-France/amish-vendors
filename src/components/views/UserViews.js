import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsForSale } from "../items/ItemsForSale.js"
import { AboutAmish } from "../amish/AboutAmish.js"
import { SaleItemDetails } from "../items/SaleItemDetails.js"
import { NewVendorProductForm } from "../items/NewVendorProductForm.js"
import { EditItems } from "../items/EditItems.js"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Amish Vendors</h1>
                    <div>Find all that the Amish of Ethridge have to offer!</div>

                    <Outlet />
                </>
            }>

                <Route path="items" element={<ItemsForSale />} />
                <Route path="amish" element={<AboutAmish />} />
                <Route path="items/:itemId" element={<SaleItemDetails />} />
                <Route path="new" element={<NewVendorProductForm />} />
                <Route path="items/:itemId/edit" element={<EditItems />} />

            </Route>
        </Routes>
    )
}