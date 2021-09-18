import React from 'react';
import "./header.css";
import VootMenu from './VootMenu';

const Navbar = () => {
    return (
        <div>
            <section id="vootHeaders">
                <article>
                    <div className="vootLogo">Logo</div>
                    <div className="vootMenu">Menu</div>
                    <VootMenu/>
                </article>
            </section>
        </div>
    )
}

export default Navbar;
