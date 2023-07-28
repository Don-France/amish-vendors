import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsForSale } from "../items/ItemsForSale.js"
import { AboutAmish } from "../amish/AboutAmish.js"
import { SaleItemDetails } from "../items/SaleItemDetails.js"
import { NewVendorProductForm } from "../items/NewVendorProductForm.js"
import { EditItems } from "../items/EditItems.js"
import { HomePage } from "../home/HomePage.js"
import { SeasonsSearch } from "../seasons/SeasonsSearch.js"
import { CategoriesSearch } from "../categories/CategoriesSearch.js"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Zeke and Mose Amish Depot</h1>
                    <div>Do the Amish differently!</div>

                    <Outlet />
                </>
            }>
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