import React, {useEffect, useRef} from 'react';
import styles from '../../resources/scss/components/parts/buttonA.scss';
import {MakeSmoothScroll} from "./navigatorLogic";

export const ButtonTypes = {
    LightButton: 0,
    DarkButton: 1
}

function ButtonA({text, href, buttonType, extraStyle, isNavigator}) {
    const linkRef = useRef(null);

    let buttonClass = buttonType === ButtonTypes.LightButton ? styles.lightButton : styles.darkButton;

    useEffect(() => {
        if(isNavigator) {
            MakeSmoothScroll(linkRef);
        }
    }, []);

    return (
        <a
            href={href}
            className={`${styles.linkElem} ${buttonClass} ${extraStyle}`}
            ref={linkRef}
        >
            <span
                dangerouslySetInnerHTML={{__html: text}}
            />
        </a>
    );
}

export default ButtonA;
