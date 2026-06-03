import React from 'react';
import styles from '../../resources/scss/components/parts/projectModal.module.scss';
import ImageCarousel from "./imageCarousel";
import {ButtonA, ButtonTypes} from "./buttons";

function ProjectModal({projectContent, callbackFunc}) {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalBody}>
                <a
                    className={styles.closeBtn}
                    href={'#'}
                    onClick={callbackFunc}
                >
                    &#xf00d;
                </a>
                <span className={styles.modalTitle}>{projectContent.title}</span>
                <div className={styles.carouselSlider}>
                    <ImageCarousel images={projectContent.images}/>
                </div>
                <div className={styles.modalContent}>
                    <ul>
                        {projectContent.listEntries.map((entry, index) => (
                            <li key={index}>
                                <h5 dangerouslySetInnerHTML={{__html: entry.text}}/>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.aiUsage}>
                        <span className={styles.aiUsageLabel}>&#xf05a; AI usage disclaimer</span>
                        <span dangerouslySetInnerHTML={{__html: projectContent.aiUsage || "No AI tools were used during the creation of this project."}}/>
                    </div>
                    <span className={styles.projectText}>{projectContent.description}</span>
                    <div className={styles.modalButtonContainer}>
                        {projectContent.buttons.map((entry, index) => (
                            <ButtonA
                                text={entry.text}
                                href={entry.url}
                                download={entry.download || false}
                                buttonType={ButtonTypes.LightButton}
                                keyNum={index}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
