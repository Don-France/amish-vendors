import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsForSale } from "../items/ItemsForSale.js"
import { HomePage } from "../home/HomePage.js"
import { SeasonsSearch } from "../seasons/SeasonsSearch.js"
import { CategoriesSearch } from "../categories/CategoriesSearch.js"
import { AboutAmish } from "../amish/AboutAmish.js"
import { SaleItemDetails } from "../items/SaleItemDetails.js"
import { NewVendorProductForm } from "../items/NewVendorProductForm.js"
import { EditItems } from "../items/EditItems.js"

export const AdminViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Amish Vendors</h1>
                    <div>Find all that the Amish of Ethridge have to offer!</div>

                    <Outlet />
                </>
            }>

                {/* <Route path="itemsForSale" element={<ItemsForSale />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="items" element={<ItemsForSale />} />
                <Route path="/seasons" element={<SeasonsSearch />} />
                <Route path="/category" element={<CategoriesSearch />} />
                <Route path="amish" element={<AboutAmish />} />
                <Route path="items/:itemId" element={<SaleItemDetails />} />
                <Route path="new" element={<NewVendorProductForm />} />
                <Route path="items/:itemId/edit" element={<EditItems />} />

            </Route>
        </Routes>
    )
}