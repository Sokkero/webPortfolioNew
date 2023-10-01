import React, {useEffect} from 'react';
import {SpyScrolling, MakeSmoothScroll} from "./navigatorLogic";
import {BlogContent} from "../../resources/content";
import styles from '../../resources/scss/components/parts/mobileNav.scss';

function MobileNav() {

    useEffect(() => {
        SpyScrolling(styles.active);

        let elements = document.querySelectorAll(`header.${styles.navWrapper} nav ul a`);
        MakeSmoothScroll(elements);

        document.querySelector("#root div").addEventListener(
            "scroll",
            () => { SpyScrolling(styles.active) }
        );

        return () => {
            document.querySelector("#root div").removeEventListener(
                "scroll",
                () => { SpyScrolling(styles.active) }
            );
        };
    }, []);

    return (
        <header className={`${styles.navWrapper}`}>
            <nav className={`${styles.cdStretchyNav}`}>
                <ul>
                    <li><a id={`block0`} href="#homeBlock" className={`${styles.homeLink}`}><span>Home</span></a></li>
                    <li><a id={`block1`} href="#aboutMeBlock" className={styles.aboutMeLink}><span>About me</span></a></li>
                    <li><a id={`block2`} href="#portfolioBlock" className={styles.portfolioLink}><span>Portfolio</span></a></li>
                    <li><a id={`block3`} href="#contactBlock" className={styles.contactLink}><span>Contact me</span></a></li>
                    {BlogContent.showBlogPage ?
                        <li><a id={`block4`} href="#blogBlock" className={styles.blogLink}><span>Blog</span></a></li>
                        :
                        ""
                    }
                </ul>
            </nav>
        </header>
    );
}

export default MobileNav;
