import React from 'react';
import styles from '../../resources/scss/components/blocks/aboutMeBlockWrapper.scss';
import {AboutMeContent} from "../../resources/content";
import BlockHeader from "./aboutMeParts/AboutMeHeader";

function PortfolioBlockWrapper() {
    return (
        <section id='aboutMeBlock' className={`${styles.aboutMeWrapper} contentBlock`}>
            <BlockHeader
                headlineWhite={"My "}
                headlineMainColor={'Portfolio'}
                subHeadline={"Cum lanista peregrinatione, omnes zirbuses experientia brevis, secundus homoes."}
            />
        </section>
    );
}

export default PortfolioBlockWrapper;
