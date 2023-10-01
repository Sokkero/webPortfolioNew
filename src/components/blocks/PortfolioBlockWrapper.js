import React from 'react';
import styles from '../../resources/scss/components/blocks/portfolioBlockWrapper.scss';
import {AboutMeContent} from "../../resources/content";
import BlockHeader from "../parts/blockHeader";
import projectImg from "../../resources/images/project.jpg"

function PortfolioBlockWrapper() {
    return (
        <section id='aboutMeBlock' className={`${styles.portfolioWrapper} contentBlock`}>
            <BlockHeader
                headlineWhite={"My "}
                headlineMainColor={'Portfolio'}
                subHeadline={"Cum lanista peregrinatione, omnes zirbuses experientia brevis, secundus homoes."}
            />
            <div className={styles.content}>
                <ul>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>Project</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>Project</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>Project</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>Project</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>Project</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default PortfolioBlockWrapper;
