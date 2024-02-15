import React from 'react';
import styles from '../../resources/scss/components/parts/projectModal.scss';
import ImageCarousel from "./imageCarousel";
import {ButtonA, ButtonRound, ButtonTypes} from "./buttons";

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
                        <li>
                            <h5><b>&#xf007; Something:</b> else in a very very long text, this is ridiculous, im not even sure if I spelled that word correctly but who gives a shit honestly</h5>
                        </li>
                        <li>
                            <h5><b>&#xf007; Something:</b> else</h5>
                        </li>
                        <li>
                            <h5><b>&#xf007; Something:</b> else</h5>
                        </li>
                        <li>
                            <h5><b>&#xf007; Something:</b> else</h5>
                        </li>
                        <li>
                            <h5><b>&#xf007; Something:</b> else</h5>
                        </li>
                    </ul>
                    <span className={styles.projectText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </span>
                    <ButtonA
                        text={"Test"}
                        href={"https://www.google.com/"}
                        buttonType={ButtonTypes.LightButton}
                        extraStyle={styles.modalButton}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
