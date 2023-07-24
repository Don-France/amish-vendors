import "./NavBar.css"
import { AdminNav } from "./AdminNav.js"
import { UserNav } from "./UserNav.js"

export const NavBar = () => {
    const localAmishUser = localStorage.getItem("amish_user")
    const amishUserObject = JSON.parse(localAmishUser)

    if (amishUserObject.staff) {
        return <AdminNav />
    }
    else {
        return <UserNav />
    }

}

