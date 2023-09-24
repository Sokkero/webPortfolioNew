import React, { useState, useEffect } from 'react';
import styles from '../../resources/scss/components/navigator.scss';

function Navigator() {

    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleNavToggle = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        //Make nav links scroll smoothly
        const navLinks = document.querySelectorAll(`header nav ul li a`);
        for (let n in navLinks) {
            if (Object.prototype.hasOwnProperty.call(navLinks, n)) {
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
                    if(!currBlock.classList.contains(styles.active)) {
                        document.querySelector(`nav ul a.${styles.active}`).classList.remove(styles.active);
                        currBlock.classList.add(styles.active);
                    }
                    return;
                }
        };
        document.querySelector("#root div").addEventListener("scroll", scrollUpdate);

        // Close navbar on document clicks
        const handleDocumentClick = (event) => {
            if (!event.target.classList.contains(styles.cdNavTrigger)) {
                setIsNavVisible(false);
            }
        };
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.querySelector("#root div").removeEventListener("scroll", scrollUpdate);
        };
    }, []);

    return (
        <header className={`${styles.navWrapper}`}>
            <nav className={`${styles.cdStretchyNav}  ${isNavVisible ? styles.navIsVisible : ''}`}>
                <a className={styles.cdNavTrigger} onClick={handleNavToggle}>
                    Menu
                    <span aria-hidden="true"></span>
                </a>
                <ul>
                    <li><a id={`block0`} href="#homeBlock" className={styles.active}><span>Home</span></a></li>
                    <li><a id={`block1`} href="#aboutMeBlock"><span>About me</span></a></li>
                    <li><a id={`block2`} href="#portfolioBlock"><span>Portfolio</span></a></li>
                    <li><a id={`block3`} href="#contactBlock"><span>Contact me</span></a></li>
                    <li><a id={`block4`} href="#blogBlock"><span>Blog</span></a></li>
                </ul>
                <span aria-hidden="true" className={styles.stretchyNavBg}></span>
            </nav>
        </header>
    );
}

export default Navigator;
