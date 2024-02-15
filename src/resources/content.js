import smallMe from "./images/darkAbout.jpg";
import bigMe from "./images/fullscreendarkFlipped.jpg"
import projectImg1 from "./images/project1.jpg"
import projectImg2 from "./images/project2.jpg"
import projectImg3 from "./images/project3.jpg"

export const HomeBlockContent = {
    backgroundImgSrc: bigMe,
    smallHeader: "Greetings!",
    bigHeader: "Nunquam imitari castor.",
    text: "A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine. A falsis, xiphias domesticus pulchritudine.",
    moreAboutMeBtn: "&#xf007; More about me",
    moreAboutMeBtnTarget: "#aboutMeBlock",
    portfolioBtn: "&#xf0b1; Portfolio",
    portfolioBtnTarget: "#portfolioBlock"
};

export const AboutMeContent = {
    headlineWhite: "About ",
    headlineAccent: "me",
    subHeadline: "Est secundus detrius, cesaris. Est secundus detrius, cesaris.",
    myInfoContent: {
        imageSrc: smallMe,
        imageAlt: "A picture of me",
        cvBtnText: "&#xf019; Download my CV",
        cvBtnTarget: "https://www.google.com/",
        leftColumnEntries: [
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
        ],
        rightColumnEntries: [
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
            {
                firstPart: "Something",
                lastPart: "else entirely"
            },
        ]
    },
    myPastContent: {
        experienceColumn: {
            headline: "Experience",
            entries: [
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
            ]
        },
        educationColumn: {
            headline: "Education",
            entries: [
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
                {
                    date: "01.01.2001 - 31.12.2024",
                    firstHeadline: "First Part",
                    lastHeadline: "Last Part",
                    text: "Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis? Domesticus lixas ducunt ad canis. Cur coordinatae messis?"
                },
            ]
        },
    },
    mySkillsContent: {
        headline: "Skills",
        // percentage is 20% minimum, otherwise it will look weird
        skillEntries: [
            {
                skillName: "CSS",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            },
            {
                skillName: "My skill",
                percentage: "80%" //In %
            }
        ]
    }
};

export const PortfolioContent = {
    headlineWhite: "My ",
    headlineAccent: "Portfolio",
    subHeadline: "Est secundus detrius, cesaris. Est secundus detrius, cesaris.",
    projectDummyTitle: "Project"
};

export const ProjectContent = [
    {
        title: "Project title 1",
        images: [projectImg1, projectImg2, projectImg3,projectImg1, projectImg2, projectImg3,projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    },
    {
        title: "Project title 2",
        images: [projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    },
    {
        title: "Project title 3",
        images: [projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    },
    {
        title: "Project title 4",
        images: [projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    },
    {
        title: "Project title 5",
        images: [projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    },
    {
        title: "Project title 6",
        images: [projectImg1, projectImg2, projectImg3],
        listEntries: [
            {
                text: "<b>&#xf007; Something:</b> else1"
            },
            {
                text: "<b>&#xf007; Something:</b> else2"
            },
            {
                text: "<b>&#xf007; Something:</b> else3"
            },
            {
                text: "<b>&#xf007; Something:</b> else4"
            }
        ],
        description: "Project Description",
        buttons: [
            {
                text: "test1",
                url: "https://www.google.de/"
            },
            {
                text: "test2",
                url: "https://www.google.de/"
            }
        ]
    }
]

export const ContactMeContent = {
    headlineWhite: "Get ",
    headlineAccent: "in touch",
    subHeadline: "Heuretess persuadere! Heuretess persuadere! Heuretess persuadere!",
    leftColumn: {
        entries: [
            {
                header: "Olla de magnum turpis",
                symbol: "&#xf09a; ",
                text: "Olla de magnum turpis"
            },
            {
                header: "Olla de magnum turpis",
                symbol: "&#xf09a; ",
                text: "Olla de magnum turpis"
            }
        ],
        socialsHeader: "Olla de magnum turpis",
        socials: [
            {
                icon: "&#xf09a;",
                target: "https://www.google.com/"
            },
            {
                icon: "&#xf09a;",
                target: "https://www.google.com/"
            },
            {
                icon: "&#xf09a;",
                target: "https://www.google.com/"
            },
            {
                icon: "&#xf09a;",
                target: "https://www.google.com/"
            }
        ]
    },
    rightColumn: {
        text: "Cur cobaltum messis? Fidess volare in dexter cirpi! Cur cobaltum messis? Fidess volare in dexter cirpi! Cur cobaltum messis? Fidess volare in dexter cirpi!",
        form: {
            nameInputPlaceholder: "YOUR NAME",
            emailInputPlaceholder: "YOUR EMAIL",
            textInputPlaceholder: "YOUR MESSAGE",
            sendButtonText: "&#xf1d8; Send message",
            responseMessage: "Your response here"
        }
    }
};

export const BlogContent = {
    showBlogPage: false
}
