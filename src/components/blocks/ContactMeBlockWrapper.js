import React from 'react';
import styles from '../../resources/scss/components/blocks/contactMeBlockWrapper.scss';
import BlockHeader from "./aboutMeParts/AboutMeHeader";
import ButtonA, {ButtonTypes} from "../parts/buttonA";
import {AboutMeTexts, HomeBlockTexts} from "../../resources/texts";

function ContactMeBlockWrapper() {
    return (
        <section id='contactBlock' className={`${styles.contactWrapper} contentBlock`}>
            <BlockHeader
                headlineWhite={"Get "}
                headlineMainColor={"in touch"}
                subHeadline={"Heuretess persuadere! Heuretess persuadere! Heuretess persuadere!"}
            />
        </section>
    );
}

export default ContactMeBlockWrapper;
