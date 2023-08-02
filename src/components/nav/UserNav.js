import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from '../asset/logo.jpeg'
export const UserNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <Link className="logo__link navbar__link" to="/">
                <img className="logo__img" src={logo} alt="Amish Logo" />
            </Link>
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li> */}
            <li className="navbar__item active">
                <Link className="navbar__link" to="/amish">About the Amish</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/items">Current Sale Items</Link>
            </li>


            {
                localStorage.getItem("amish_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("amish_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
