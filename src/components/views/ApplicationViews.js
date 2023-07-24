
import { AdminViews } from "./AdminViews.js"
import { UserViews } from "./UserViews.js"

export const ApplicationViews = () => {

    const localAmishUser = localStorage.getItem("amish_user")
    const amishUserObject = JSON.parse(localAmishUser)

    if (amishUserObject.staff) {
        return <AdminViews />
    }
    else {
        return <UserViews />
    }

}