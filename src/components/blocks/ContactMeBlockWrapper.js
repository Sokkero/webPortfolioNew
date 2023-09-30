import React from 'react';
import styles from '../../resources/scss/components/blocks/contactMeBlockWrapper.scss';
import BlockHeader from "./aboutMeParts/AboutMeHeader";
import {ButtonSubmit, ButtonTypes} from "../parts/buttons";
import {AboutMeTexts, HomeBlockTexts} from "../../resources/texts";

function ContactMeBlockWrapper() {
    return (
        <section id='contactBlock' className={`${styles.contactWrapper} contentBlock`}>
            <BlockHeader
                headlineWhite={"Get "}
                headlineMainColor={"in touch"}
                subHeadline={"Heuretess persuadere! Heuretess persuadere! Heuretess persuadere!"}
            />
            <div className={styles.content}>
                <div className={styles.contactInfoColumn}>
                    <span className={styles.headline}>Olla de magnum turpis</span>
                    <span className={styles.text}><span className={styles.textIcon}>&#xf09a; </span>Olla de magnum turpis</span>
                    <span className={styles.headline}>Olla de magnum turpis</span>
                    <div className={styles.iconRow}>
                        <span className={styles.socialIcon}>&#xf09a;</span>
                        <span className={styles.socialIcon}>&#xf09a;</span>
                        <span className={styles.socialIcon}>&#xf09a;</span>
                        <span className={styles.socialIcon}>&#xf09a;</span>
                    </div>
                </div>
                <div className={styles.contactFormColumn}>
                    <p>Cur cobaltum messis? Fidess volare in dexter cirpi! Cur cobaltum messis? Fidess volare in dexter cirpi! Cur cobaltum messis? Fidess volare in dexter cirpi!</p>
                    <form>
                        <div className={styles.formRowInputs}>
                            <div className={styles.inputFieldWrapper}>
                                <input className={styles.inputField} id="name" name="name" type="text" placeholder="YOUR NAME" autoComplete="name" />
                            </div>
                            <div className={styles.inputFieldWrapper}>
                                <input className={styles.inputField} id="email" name="email" type="text" placeholder="YOUR EMAIL" autoComplete="email" />
                            </div>
                        </div>
                        <div className={styles.formRowText}>
                            <textarea className={styles.inputField} id="comment" name="message" placeholder="YOUR MESSAGE"></textarea>
                        </div>
                        <div className={styles.formRowCta}>
                            <ButtonSubmit
                                name={'send'}
                                buttonType={ButtonTypes.LightButton}
                                text={'&#xf1d8; Send message'}
                            />
                        </div>
                        <div className={styles.formRowResponse}>
                            <p>Your response here</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactMeBlockWrapper;
