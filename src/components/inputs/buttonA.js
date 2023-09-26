import React, {useEffect} from 'react';
import styles from '../../resources/scss/components/inputs/buttonA.scss';
import {MakeSmoothScroll} from "./navigatorLogic";

export const ButtonTypes = {
    LightButton: 0,
    DarkButton: 1
}

function ButtonA({text, href, buttonType, extraStyle, isNavigator}) {
    let buttonClass = buttonType === ButtonTypes.LightButton ? styles.lightButton : styles.darkButton;

    useEffect(() => {
        if(isNavigator) {
            let elements = document.querySelectorAll(`a.${styles.linkElem}`);
            MakeSmoothScroll(elements);
        }
    }, []);

    return (
        <a href={href} className={`${styles.linkElem} ${buttonClass} ${extraStyle}`}>
            <span
                dangerouslySetInnerHTML={{__html: text}}
            />
        </a>
    );
}

export default ButtonA;
