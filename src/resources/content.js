import smallMe from "./images/darkAbout.jpg";
import bigMe from "./images/fullscreendarkFlipped.jpg";
import projectImg1 from "./images/project1.jpg";
import projectImg2 from "./images/project2.jpg";
import projectImg3 from "./images/project3.jpg";

export const HomeBlockContent = {
	backgroundImgSrc: bigMe,
	smallHeader: "Hello and welcome to my portfolio!",
	bigHeader: "My name is Paul Sohns",
	text: "I am a software developer with a big focus on videogames who loves creating cool games almost as much as I love playing them!",
	moreAboutMeBtn: "&#xf007; More about me",
	moreAboutMeBtnTarget: "#aboutMeBlock",
	portfolioBtn: "&#xf0b1; Portfolio",
	portfolioBtnTarget: "#portfolioBlock"
};

export const AboutMeContent = {
	headlineWhite: "About ",
	headlineAccent: "me",
	subHeadline: "A little something about me, how I got here and my skills",
	myInfoContent: {
		imageSrc: smallMe,
		imageAlt: "A picture of me",
		cvBtnText: "&#xf019; Download my CV",
		cvBtnTarget: "https://www.google.com/",
		leftColumnEntries: [
			{
				firstPart: "Full name",
				lastPart: "Paul Sohns"
			},
			{
				firstPart: "Born in",
				lastPart: "Hannover, Germany"
			},
			{
				firstPart: "Nationality",
				lastPart: "German"
			},
			{
				firstPart: "Favorite genres",
				lastPart: "Shooter, RPG, Adventure"
			},
		],
		rightColumnEntries: [
			{
				firstPart: "Birthday",
				lastPart: "01.02.2001"
			},
			{
				firstPart: "Current location",
				lastPart: "Hamburg, Germany"
			},
			{
				firstPart: "Languages",
				lastPart: "German, English"
			},
			{
				firstPart: "All time favorite game",
				lastPart: "Super Mario Sunshine"
			},
		]
	},
	myPastContent: {
		experienceColumn: {
			headline: "Experience",
			entries: [
				{
					date: "01.08.2024 - 31.06.2026",
					firstHeadline: "Junior Developer",
					lastHeadline: "Innogames",
					text: "After my apprenticeship I was offered a junior developer position as a Forge of Empires Mobile developer. It is here that I gathered most of my C++ knowledge, learned most of my development skills and fell in love with C++ and low level programming as a whole. I got to work with cocos2dx, learning lots about GLSL shaders and OpenGL."
				},
				{
					date: "01.07.2026 - Now",
					firstHeadline: "Regular Developer",
					lastHeadline: "Innogames",
					text: "I am currently working as a Regular Developer at Forge of Empires Mobile."
				},
			]
		},
		educationColumn: {
			headline: "Education",
			entries: [
				{
					date: "2017 - 2020",
					firstHeadline: "Abitur",
					lastHeadline: "BBS Papenburg",
					text: "I completed my Abitur in computer technologies. The \"Abitur\" is the general qualification for university entrance in germany."
				},
				{
					date: "2020 - 2021",
					firstHeadline: "FSJ",
					lastHeadline: "HÖB, Hist.-Ökol. Bildungsstätte",
					text: "The FSJ is a german program that enables young adults to voluntarily work in social, educational, or healthcare institutions while gaining practical experience and supporting the community."
				},
				{
					date: "01.08.2021 - 31.07.24",
					firstHeadline: "Apprenticeship",
					lastHeadline: "InnoGames",
					text: "I started my career as a software developer here as an apprentice. I was taught the foundation of professional software engineering, teamwork, processes, and production workflows. During this time I worked on various projects within the company, including the games landing pages, Forge of Empires Mobile and Sunrise Village. I finished the apprenticeship with a grade of 87%."
				},
			]
		},
	},
	mySkillsContent: {
		headline: "Skills",
		// percentage is 20% minimum, otherwise it will look weird
		skillEntries: [
			{
				skillName: "Basic dev skills",
				hint: "How comfortable and familiar I am with basic development tools, services and workflows such as git, agile, jenkins, bitbucket, gitlab, github, zsh, etc.",
				percentage: "100%" //In %
			},
			{
				skillName: "AI",
				hint: "How familiar and comfortable I am working with AI tools such as claude, github copilot, typingmind, etc.",
				percentage: "100%" //In %
			},
			{
				skillName: "Web development",
				hint: "How confident I am in working on web pages, including HTML, CSS, JavaScript, React, web hosting and SEO",
				percentage: "100%" //In %
			},
			{
				skillName: "OpenGL 3.3+",
				hint: "How confident I am in my ability to create and/or work on an existing rendering pipeline.",
				percentage: "90%" //In %
			},
			{
				skillName: "Godot",
				hint: "How confident I am in my ability to produce a playable, smooth and fun game using Godot.",
				percentage: "85%" //In %
			},
			{
				skillName: "Unity",
				hint: "How confident I am in my ability to produce a playable, smooth and fun game using Unity.",
				percentage: "75%" //In %
			},
		]
	},
	myLanguagesContent: {
		headline: "Language proficiencies",
		// percentage is 20% minimum, otherwise it will look weird
		languageEntries: [
			{
				skillName: "C++",
				hint: "How confident I am in my ability to achieve a set goal using C++. As C++ is a huge field, I am ofcourse in no way claiming to know everything about C++",
				percentage: "100%" //In %
			},
			{
				skillName: "Python",
				hint: "How confident I am in my ability to achieve a set goal using python",
				percentage: "90%" //In %
			},
			{
				skillName: "TypeScript",
				hint: "How confident I am in my ability to achieve a set goal using TypeScript",
				percentage: "90%" //In %
			},
			{
				skillName: "PHP",
				hint: "How confident I am in my ability to achieve a set goal using PHP",
				percentage: "80%" //In %
			},
			{
				skillName: "GLSL",
				hint: "How confident I am in my ability to write and understand GLSL shader code",
				percentage: "80%" //In %
			},
			{
				skillName: "C#",
				hint: "How confident I am in my ability to achieve a set goal using C#",
				percentage: "75%" //In %
			},
		]
	}
};

export const PortfolioContent = {
	headlineWhite: "My ",
	headlineAccent: "Portfolio",
	subHeadline: "A list of my personal projects.",
	projectDummyTitle: "Project"
};

export const ProjectContent = [
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
]

export const ContactMeContent = {
	emailService: {
		publicKey: "jCPZSDU8mMul65CQG",
		serviceId: "service_hp4jedd",
		templateId: "template_2zeudr6",
		blockHeadless: true,
		requestThrottle: 10000
	},
	headlineWhite: "Get ",
	headlineAccent: "in touch",
	subHeadline: "Got any questions, requests or offers for me? Send me a message through this form!",
	leftColumn: {
		entries: [
		],
		socialsHeader: "Find me here:",
		socials: [
			{
				icon: "&#xf0e1;",
				target: "https://www.linkedin.com/in/paul-sohns-05058b208/"
			},
			{
				icon: "&#xf09b;",
				target: "https://github.com/Sokkero"
			},
			{
				icon: "&#xf1b6;",
				target: "https://steamcommunity.com/id/sokkero"
			},
		]
	},
	rightColumn: {
		text: "This form uses EmailJS to deliver the message. Your name, email and message content will not be saved or cached anywhere but in the email sent to me.",
		form: {
			nameInputPlaceholder: "YOUR NAME",
			emailInputPlaceholder: "YOUR EMAIL",
			textInputPlaceholder: "YOUR MESSAGE",
			sendButtonText: "&#xf1d8; Send message",
			successMessage: "Email Send successfully, I will get back to you as soon as I can!"
		}
	}
};

export const BlogContent = {
	showBlogPage: false
}
