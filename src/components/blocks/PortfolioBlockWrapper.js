import React from 'react';
import styles from '../../resources/scss/components/blocks/portfolioBlockWrapper.scss';
import {PortfolioContent} from "../../resources/content";
import BlockHeader from "../parts/blockHeader";
import projectImg from "../../resources/images/project.jpg"

function PortfolioBlockWrapper() {
    return (
        <section id='portfolioBlock' className={`${styles.portfolioWrapper} contentBlock`}>
            <div className={styles.content}>
                <BlockHeader
                    headlineWhite={PortfolioContent.headlineWhite}
                    headlineMainColor={PortfolioContent.headlineAccent}
                    subHeadline={PortfolioContent.subHeadline}
                />
                <ul>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>{PortfolioContent.projectDummyTitle}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>{PortfolioContent.projectDummyTitle}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>{PortfolioContent.projectDummyTitle}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>{PortfolioContent.projectDummyTitle}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"#"}>
                            <img src={projectImg} alt={"Project"}/>
                            <div className={styles.hoverDiv}>
                                <span>{PortfolioContent.projectDummyTitle}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default PortfolioBlockWrapper;
