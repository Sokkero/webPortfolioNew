import React from 'react';
import styles from '../../resources/scss/components/blocks/contactMeBlockWrapper.scss';
import BlockHeader from "./aboutMeParts/AboutMeHeader";
import {ButtonSubmit, ButtonTypes} from "../parts/buttons";
import {ContactMeContent} from "../../resources/content";

function ContactMeBlockWrapper() {
    return (
        <section id='contactBlock' className={`${styles.contactWrapper} contentBlock`}>
            <BlockHeader
                headlineWhite={ContactMeContent.headlineWhite}
                headlineMainColor={ContactMeContent.headlineAccent}
                subHeadline={ContactMeContent.subHeadline}
            />
            <div className={styles.content}>
                <div className={styles.contactInfoColumn}>
                    {ContactMeContent.leftColumn.entries.map((entry, index) => (
                        <div>
                            <span key={index} className={styles.headline}>{entry.header}</span>
                            <span className={styles.text}><span className={styles.textIcon} dangerouslySetInnerHTML={{__html: entry.symbol}}/>{entry.text}</span>
                        </div>
                    ))}
                    {ContactMeContent.leftColumn.socials.length > 0 ?
                        ([
                            <span key={0} className={styles.headline}>{ContactMeContent.leftColumn.socialsHeader}</span>,
                            <div key={1} className={styles.iconRow}>
                                {ContactMeContent.leftColumn.socials.map((entry, index) => (
                                    <span key={index + 2} className={styles.socialIcon} dangerouslySetInnerHTML={{__html: entry.icon}}/>
                                ))}
                            </div>
                        ])
                        :
                        ""
                    }
                </div>
                <div className={styles.contactFormColumn}>
                    <p>{ContactMeContent.rightColumn.text}</p>
                    <form>
                        <div className={styles.formRowInputs}>
                            <div className={styles.inputFieldWrapper}>
                                <input className={styles.inputField} id="name" name="name" type="text" placeholder={ContactMeContent.rightColumn.form.nameInputPlaceholder} autoComplete="name" />
                            </div>
                            <div className={styles.inputFieldWrapper}>
                                <input className={styles.inputField} id="email" name="email" type="text" placeholder={ContactMeContent.rightColumn.form.emailInputPlaceholder} autoComplete="email" />
                            </div>
                        </div>
                        <div className={styles.formRowText}>
                            <textarea className={styles.inputField} id="comment" name="message" placeholder={ContactMeContent.rightColumn.form.textInputPlaceholder}></textarea>
                        </div>
                        <div className={styles.formRowCta}>
                            <ButtonSubmit
                                name={'send'}
                                buttonType={ButtonTypes.LightButton}
                                text={ContactMeContent.rightColumn.form.sendButtonText}
                            />
                        </div>
                        <div className={styles.formRowResponse}>
                            <p>{ContactMeContent.rightColumn.form.responseMessage}</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactMeBlockWrapper;
