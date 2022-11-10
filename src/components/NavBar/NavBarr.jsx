import { NavLink } from "react-router-dom";

export const  NavBarr = () => {
    return <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="exchage">Exchage</NavLink>
        </nav>
    </header>
}