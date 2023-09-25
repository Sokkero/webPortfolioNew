import React, {useState, useEffect, useContext} from 'react';
import {SizeContext} from "../../Store";
import normalStyles from '../../resources/scss/components/inputs/normalNav.scss';
import mobileStyles from '../../resources/scss/components/inputs/mobileNav.scss';

function Navigator() {

    const width = useContext(SizeContext)[0];
    const height = useContext(SizeContext)[1];
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleNavToggle = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        //Make nav links scroll smoothly
        const navLinks = document.querySelectorAll(`a`);
        for (let n in navLinks) {
            if (
                Object.prototype.hasOwnProperty.call(navLinks, n) &&
                navLinks[n].hasAttribute("href")
            ) {
                navLinks[n].addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelector(navLinks[n].hash).scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    });
                });
            }
        }

        //Spy scrolling
        const sections = document.querySelectorAll(".contentBlock");
        const scrollUpdate = () => {
            const scrollPos = document.querySelector("#root div").scrollTop;
            for (let s in sections)
                if (
                    Object.prototype.hasOwnProperty.call(sections, s) &&
                    sections[s].offsetTop <= scrollPos + window.innerHeight / 2 &&
                    sections[s].offsetHeight + sections[s].offsetTop >= scrollPos + window.innerHeight / 2
                ) {
                    const id = sections[s].id;
                    let currBlock = document.querySelector(`nav ul a[href*=${id}]`);
                    let activeStyle = width < 700 && width < height ? mobileStyles.active : normalStyles.active;
                    if(!currBlock.classList.contains(activeStyle)) {
                        document.querySelector(`nav ul a.${activeStyle}`)?.classList.remove(activeStyle);
                        currBlock.classList.add(activeStyle);
                    }
                    return;
                }
        };
        document.querySelector("#root div").addEventListener("scroll", scrollUpdate);
        scrollUpdate();

        // Close navbar on document clicks
        const handleDocumentClick = (event) => {
            if (!event.target.classList.contains(normalStyles.cdNavTrigger)) {
                setIsNavVisible(false);
            }
        };
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.querySelector("#root div").removeEventListener("scroll", scrollUpdate);
        };
    }, []);

    const getNormalNav = () => {
        return (
            <header className={`${normalStyles.navWrapper}`}>
                <nav className={`${normalStyles.cdStretchyNav}  ${isNavVisible ? normalStyles.navIsVisible : ''}`}>
                    <a className={normalStyles.cdNavTrigger} onClick={handleNavToggle}>
                        Menu
                        <span aria-hidden="true"></span>
                    </a>
                    <ul>
                        <li><a id={`block0`} href="#homeBlock" className={`${normalStyles.homeLink}`}><span>Home</span></a></li>
                        <li><a id={`block1`} href="#aboutMeBlock" className={normalStyles.aboutMeLink}><span>About me</span></a></li>
                        <li><a id={`block2`} href="#portfolioBlock" className={normalStyles.portfolioLink}><span>Portfolio</span></a></li>
                        <li><a id={`block3`} href="#contactBlock" className={normalStyles.contactLink}><span>Contact me</span></a></li>
                        <li><a id={`block4`} href="#blogBlock" className={normalStyles.blogLink}><span>Blog</span></a></li>
                    </ul>
                    <span aria-hidden="true" className={normalStyles.stretchyNavBg}></span>
                </nav>
            </header>
        );
    };

    const getMobileNav = () => {
        return (
            <header className={`${normalStyles.navWrapper}`}>
            </header>
        );
    };

    return width < 700 && width < height ? getMobileNav() : getNormalNav();
}

export default Navigator;
