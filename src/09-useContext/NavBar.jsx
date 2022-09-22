import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <NavLink to="/" className="nav-link" end>
                                Home
                            </NavLink>
                            <NavLink to="about" className="nav-link">
                                About
                            </NavLink>
                            <NavLink to="login" className="nav-link">
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}
