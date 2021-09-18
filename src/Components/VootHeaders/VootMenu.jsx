import { Fragment } from "react";
import react.Fragment from "react";

const VootMenu = () => {
    return (
        <Fragment>
            <nav id ="vootMenuBlock">
                <ul className = "leftMenu">
                    <li><a href="">My Voot</a></li>
                    <li><a href="">Premium</a></li>
                    <li><a href="">Shows</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Channels</a></li>
                    <li><a href="">news</a></li>

                </ul>
                <ul className = "authMenu">
                <li><a href="">search</a></li>
                <li><a href="">auth</a></li>


                </ul>
            </nav>
        </Fragment>
    )
}

export default VootMenu
