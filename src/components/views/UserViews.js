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
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="user-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <h1>Zeke and Mose Amish Depot</h1>
                            <h2>Do the Amish differently!</h2>
                        </div>
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
            <footer>
                {/* Add your footer content here */}
                <p>Copyright © {new Date().getFullYear()} Zeke and Mose Amish Depot. All rights reserved.</p>
            </footer>
        </div>
    )
}