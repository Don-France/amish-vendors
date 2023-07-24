import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsForSale } from "../items/ItemsForSale.js"

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

                <Route path="itemsForSale" element={<ItemsForSale />} />
                {/* <Route path="employees" element={<EmployeeList />} />
                <Route path="profile" element={<Profile />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="customers/:customerId" element={<CustomerDetails />} />
                <Route path="customers/" element={<CustomerList />} /> */}

            </Route>
        </Routes>
    )
}