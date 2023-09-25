import React, {useState, useEffect} from 'react';
import {SpyScrolling, SmoothScroll} from "./navigatorLogic";
import styles from '../../resources/scss/components/inputs/normalNav.scss';

function NormalNav() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleNavToggle = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        SpyScrolling(styles.active);
        SmoothScroll();

        document.querySelector("#root div").addEventListener(
            "scroll",
            () => { SpyScrolling(styles.active) }
        );

        // Close navbar on document clicks
        const handleDocumentClick = (event) => {
            if (!event.target.classList.contains(styles.cdNavTrigger)) {
                setIsNavVisible(false);
            }
        };
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.querySelector("#root div").removeEventListener(
                "scroll",
                () => { SpyScrolling(styles.active) }
            );
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
                    <li><a id={`block0`} href="#homeBlock" className={`${styles.homeLink}`}><span>Home</span></a></li>
                    <li><a id={`block1`} href="#aboutMeBlock" className={styles.aboutMeLink}><span>About me</span></a></li>
                    <li><a id={`block2`} href="#portfolioBlock" className={styles.portfolioLink}><span>Portfolio</span></a></li>
                    <li><a id={`block3`} href="#contactBlock" className={styles.contactLink}><span>Contact me</span></a></li>
                    <li><a id={`block4`} href="#blogBlock" className={styles.blogLink}><span>Blog</span></a></li>
                </ul>
                <span aria-hidden="true" className={styles.stretchyNavBg}></span>
            </nav>
        </header>
    );
}

export default NormalNav;
