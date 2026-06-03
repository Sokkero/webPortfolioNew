import React from 'react';
import styles from '../../resources/scss/components/parts/blockHeader.module.scss';

function BlockHeader({headlineWhite, headlineMainColor, subHeadline}) {
    return (
        <div className={styles.header}>
            <h2>{headlineWhite}<span>{headlineMainColor}</span></h2>
            <span>{subHeadline}</span>
        </div>
    );
}

export default BlockHeader;
