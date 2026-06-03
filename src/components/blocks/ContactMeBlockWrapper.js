import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../resources/scss/components/blocks/contactMeBlockWrapper.module.scss';
import BlockHeader from "../parts/blockHeader";
import {ButtonSubmit, ButtonRound, ButtonTypes} from "../parts/buttons";
import {ContactMeContent} from "../../resources/content";

const ResponseType = {
    NONE: 0,
    SUCCESS: 1,
    ERROR: 2
}

function ContactMeBlockWrapper() {
    const formRef = useRef(null);
    const [response, setResponse] = useState(ResponseType.NONE);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(ContactMeContent.emailService.serviceId, ContactMeContent.emailService.templateId, formRef.current, {publicKey: ContactMeContent.emailService.publicKey})
            .then(
                () => {
                    setResponse(ResponseType.SUCCESS);
                    formRef.current.reset();
                },
                (error) => {
                    setResponse(ResponseType.ERROR);
                    setError(error);
                },
            );
    }

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
                        <div key={index}>
                            <span className={styles.headline}>{entry.header}</span>
                            <span className={styles.text}><span className={styles.textIcon} dangerouslySetInnerHTML={{__html: entry.symbol}}/>{entry.text}</span>
                        </div>
                    ))}
                    {ContactMeContent.leftColumn.socials.length > 0 ?
                        ([
                            <span key={0} className={styles.headline}>{ContactMeContent.leftColumn.socialsHeader}</span>,
                            <div key={1} className={styles.iconRow}>
                                {ContactMeContent.leftColumn.socials.map((entry, index) => (
                                    <ButtonRound
                                        symbol={entry.icon}
                                        href={entry.target}
                                        extraStyle={styles.socialIconExtra}
                                        key={index}
                                    />
                                ))}
                            </div>
                        ])
                        :
                        ""
                    }
                </div>
                <div className={styles.contactFormColumn}>
                    <p>{ContactMeContent.rightColumn.text}</p>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className={styles.formRowInputs}>
                            <div className={styles.inputFieldWrapper}>
                                <input
                                    className={styles.inputField}
                                    id="name"
                                    name="from_name"
                                    type="text"
                                    placeholder={ContactMeContent.rightColumn.form.nameInputPlaceholder}
                                    autoComplete="name"
                                    required={true}
                                />
                            </div>
                            <div className={styles.inputFieldWrapper}>
                                <input
                                    className={styles.inputField}
                                    id="email"
                                    name="from_email"
                                    type="email"
                                    placeholder={ContactMeContent.rightColumn.form.emailInputPlaceholder}
                                    autoComplete="email"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className={styles.formRowText}>
                            <textarea
                                className={styles.inputField}
                                id="comment"
                                name="message"
                                placeholder={ContactMeContent.rightColumn.form.textInputPlaceholder}
                                required={true}
                            />
                        </div>
                        <div className={styles.formRowCta}>
                            <ButtonSubmit
                                name={'send'}
                                buttonType={ButtonTypes.LightButton}
                                text={ContactMeContent.rightColumn.form.sendButtonText}
                            />
                        </div>
                        {response !== ResponseType.NONE ? (
                            <div className={styles.formRowResponse}>
                                <p>{response === ResponseType.SUCCESS ? ContactMeContent.rightColumn.form.successMessage : error}</p>
                            </div>
                        ) : ''}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactMeBlockWrapper;
