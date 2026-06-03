import React, {useEffect, useRef} from 'react';
import styles from '../../resources/scss/components/parts/buttons.module.scss';
import {MakeSmoothScroll} from "./navigatorLogic";

export const ButtonTypes = {
    LightButton: 0,
    DarkButton: 1
}

export function ButtonA({text, href, buttonType, extraStyle = "", isNavigator = false, keyNum = -1, download = false}) {
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
            download={download}
            className={`${styles.linkElem} ${buttonClass} ${extraStyle}`}
            ref={linkRef}
            key={keyNum >= 0 ? keyNum : ""}
        >
            <span
                dangerouslySetInnerHTML={{__html: text}}
            />
        </a>
    );
}

export function ButtonRound({symbol, href, extraStyle = "", isNavigator = false, keyNum = -1}) {
    const linkRef = useRef(null);

    useEffect(() => {
        if(isNavigator) {
            MakeSmoothScroll(linkRef);
        }
    }, []);

    return (
        <a
            href={href}
            className={`${styles.roundLink} ${extraStyle}`}
            ref={linkRef}
            key={keyNum >= 0 ? keyNum : ""}
        >
            <span
                dangerouslySetInnerHTML={{__html: symbol}}
            />
        </a>
    );
}

export function ButtonSubmit({text, name, buttonType, extraStyle = "", keyNum = -1}) {
    let buttonClass = buttonType === ButtonTypes.LightButton ? styles.lightButton : styles.darkButton;

    return (
        <button
            type={'submit'}
            name={name}
            className={`${styles.linkElem} ${buttonClass} ${extraStyle}`}
            key={keyNum >= 0 ? keyNum : ""}
        >
            <span
                dangerouslySetInnerHTML={{__html: text}}
            />
        </button>
    );
}
