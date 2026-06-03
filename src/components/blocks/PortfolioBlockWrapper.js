import React, {useState} from 'react';
import styles from '../../resources/scss/components/blocks/portfolioBlockWrapper.module.scss';
import {PortfolioContent, ProjectContent} from "../../resources/content";
import BlockHeader from "../parts/blockHeader";
import ProjectModal from "../parts/projectModal";

function PortfolioBlockWrapper() {
    const [currentModal, setCurrentModal] = useState(-1);

    return (
        <section id='portfolioBlock' className={`${styles.portfolioWrapper} contentBlock`}>
            <div className={styles.content}>
                <BlockHeader
                    headlineWhite={PortfolioContent.headlineWhite}
                    headlineMainColor={PortfolioContent.headlineAccent}
                    subHeadline={PortfolioContent.subHeadline}
                />
                <ul>
                    {ProjectContent.map((entry, index) => (
                        <li key={index}>
                            <a
                                href={"#"}
                                onClick={() => {
                                    setCurrentModal(index);
                                }}
                            >
                                <img src={entry.images[0]} alt={"Project"}/>
                                <div className={styles.hoverDiv}>
                                    <span>{entry.title}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {
                    currentModal >= 0 ?
                        <ProjectModal
                            projectContent={ProjectContent[currentModal]}
                            callbackFunc={setCurrentModal}
                        /> :
                        ""
                }
            </div>
        </section>
    );
}

export default PortfolioBlockWrapper;
