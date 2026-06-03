import smallMe from "./assets/darkAbout.jpg";
import bigMe from "./assets/fullscreendarkFlipped.jpg";
import exampleImg from "./assets/example.jpg";
import wip from "./assets/projects/wip.png"

import webPortoflio from "./assets/projects/webPortfolio.png";

import engine1 from "./assets/projects/engine1.png";
import engine2 from "./assets/projects/engine.gif";
import engine3 from "./assets/projects/engine2.png";
import engine4 from "./assets/projects/engine3.png";

import mealswipe1 from "./assets/projects/mealswipe1.jpg";
import mealswipe2 from "./assets/projects/mealswipe2.jpg";
import mealswipe3 from "./assets/projects/mealswipe3.jpg";
import mealswipe4 from "./assets/projects/mealswipe4.mp4";

import dwarfIsland1 from "./assets/projects/dwarfIsland1.png";
import dwarfIsland2 from "./assets/projects/dwarfIsland2.png";

import tetris1 from "./assets/projects/tetris1.png";
import tetrisCode from "./assets/rawFiles/TetrisCode.zip";
import tetrisGame from "./assets/rawFiles/TetrisGame.accdb";

export const HomeBlockContent = {
	backgroundImgSrc: bigMe,
	smallHeader: "Hello and welcome to my portfolio!",
	bigHeader: "My name is Paul Sohns",
	text: "I'm a software developer with a strong focus on video games — I love building cool games almost as much as I love playing them!",
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
					date: "01.08.2024 - 30.06.2026",
					firstHeadline: "Junior Developer",
					lastHeadline: "InnoGames",
					text: "After my apprenticeship I was offered a junior developer position as a Forge of Empires Mobile developer. This is where I gained most of my C++ knowledge, developed my core engineering skills, and fell in love with C++ and low-level programming. I got to work with cocos2d-x, learning a lot about GLSL shaders and OpenGL."
				},
				{
					date: "01.07.2026 - Now",
					firstHeadline: "Regular Developer",
					lastHeadline: "InnoGames",
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
					text: "I completed my Abitur in computer technologies. The \"Abitur\" is the general qualification for university entrance in Germany."
				},
				{
					date: "2020 - 2021",
					firstHeadline: "FSJ",
					lastHeadline: "HÖB, Hist.-Ökol. Bildungsstätte",
					text: "The FSJ is a German program that enables young adults to voluntarily work in social, educational, or healthcare institutions while gaining practical experience and supporting the community."
				},
				{
					date: "01.08.2021 - 31.07.2024",
					firstHeadline: "Apprenticeship",
					lastHeadline: "InnoGames",
					text: "I started my career as a software developer here as an apprentice. I was taught the foundation of professional software engineering, teamwork, processes, and production workflows. During this time I worked on various projects within the company, including the company's game landing pages, Forge of Empires Mobile and Sunrise Village. I finished the apprenticeship with a grade of 87%."
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
				hint: "How comfortable and familiar I am with basic development tools, services and workflows such as Git, Agile, Jenkins, Bitbucket, GitLab, GitHub, zsh, etc.",
				percentage: "100%" //In %
			},
			{
				skillName: "AI",
				hint: "How familiar and comfortable I am working with AI tools such as Claude, GitHub Copilot, TypingMind, etc.",
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
				hint: "How confident I am in my ability to achieve a set goal using C++. As C++ is a huge field, I am of course in no way claiming to know all of it.",
				percentage: "100%" //In %
			},
			{
				skillName: "Python",
				hint: "How confident I am in my ability to achieve a set goal using Python",
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
		title: "My little engine",
		images: [engine1, engine2, engine4, engine3],
		listEntries: [
			{
				text: "<b>Status:</b> Work in progress"
			},
			{
				text: "<b>Type:</b> From-scratch game engine"
			},
			{
				text: "<b>Languages:</b> Modern C++ & GLSL"
			},
			{
				text: "<b>Tech Stack:</b> OpenGL, GLFW, CMake"
			},
			{
				text: "<b>Scope:</b> Solo | Personal project"
			},
		],
		aiUsage: "This project utilized AI for research and learning purposes. All code was and will be written by myself without any AI-generated content.",
		description: "A from-scratch 3D game engine built in modern C++ using OpenGL and GLFW. Designed as a deep-dive into engine architecture, it implements a complete render pipeline with instanced rendering, custom shader and geometry handling, and synchronized CPU/GPU data structures. The engine features a modular, component-based architecture — including a singleton-managed lifecycle, scene and object management, user input handling, and an in-engine debug UI. Built with CMake.",
		buttons: [
			{
				text: "GitHub Repo",
				url: "https://github.com/Sokkero/openGL-engine"
			},
		]
	},
	{
		title: "Dungeon Crawler",
		images: [wip],
		listEntries: [
			{
				text: "<b>Status:</b> Work in progress"
			},
			{
				text: "<b>Type:</b> Mobile game"
			},
			{
				text: "<b>Languages:</b> GDScript"
			},
			{
				text: "<b>Tech Stack:</b> Godot 4"
			},
			{
				text: "<b>Scope:</b> Solo | Indie game with plans of release"
			},
		],
		aiUsage: "This project utilized AI mainly for research and learning purposes. Most code was written by myself. AI-generated code was used to create \"template\" classes and setup code structures.",
		description: "A mobile-first roguelike dungeon crawler built in Godot 4 with GDScript, inspired by Wizardry Variants Daphne, Shattered Pixel Dungeon, and Exanima. Features procedurally structured, grid-based dungeons with turn-based movement, custom A* pathfinding, and dynamic tile, wall, and door systems — all rendered in a clean low-poly style and targeting Android and iOS.",
		buttons: [
			{
				text: "GitHub Repo",
				url: "https://github.com/Sokkero/dungeonCrawler"
			},
		]
	},
	{
		title: "MealSwipe",
		images: [mealswipe1, mealswipe2, mealswipe3, mealswipe4],
		listEntries: [
			{
				text: "<b>Status:</b> Active, version 1.1.1 released internally"
			},
			{
				text: "<b>Type:</b> Mobile app"
			},
			{
				text: "<b>Languages:</b> JavaScript"
			},
			{
				text: "<b>Tech Stack:</b> React Native + Expo, SQLite, Firebase"
			},
			{
				text: "<b>Scope:</b> App with plans of appstore release with subscription feature"
			},
		],
		aiUsage: "This project heavily utilizes AI. Most of the code was planned and written by the AI agent Claude. Design and feature planning was done by hand without AI.",
		description: "A local-first React Native (Expo) mobile app that helps couples decide what to eat. Both partners swipe through a shared set of meals Tinder-style, and the app surfaces the dishes they both liked. Works fully offline on SQLite, with an optional Firebase layer for cloud backup and real-time household sync via invite codes. Bilingual (EN/DE), with categories, ingredients, dark mode, and ZIP export/import. (Private repo — in active development ahead of a planned commercial release.)",
		buttons: []
	},
	{
		title: "This website",
		images: [webPortoflio],
		listEntries: [
			{
				text: "<b>Status:</b> Live"
			},
			{
				text: "<b>Type:</b> Personal website"
			},
			{
				text: "<b>Languages:</b> JavaScript & SCSS"
			},
			{
				text: "<b>Tech Stack:</b> React, Webpack, EmailJS"
			},
			{
				text: "<b>Scope:</b> Solo | Personal project"
			},
		],
		aiUsage: "AI was only utilized towards the end of the development process for polishing, generating texts and spell checking.",
		description: "A custom-built personal portfolio site made from scratch in React, with no UI framework or site builder. Styled with modular SCSS and bundled via a hand-configured Webpack setup, it features a fully responsive layout, dark aesthetic, an image/video project gallery, and a working contact form powered by EmailJS. Designed and developed end-to-end by myself as a showcase of both my work and my front-end craft.",
		buttons: [
			{
				text: "You're already here!",
				url: ""
			},
			{
				text: "GitHub repo",
				url: "https://github.com/Sokkero/webPortfolioNew"
			},
		]
	},
	{
		title: "Dwarf Island",
		images: [dwarfIsland1, dwarfIsland2],
		listEntries: [
			{
				text: "<b>Status:</b> Abandoned due to a lack of interest"
			},
			{
				text: "<b>Type:</b> Desktop game"
			},
			{
				text: "<b>Languages:</b> C#"
			},
			{
				text: "<b>Tech Stack:</b> Unity3d"
			},
			{
				text: "<b>Scope:</b> Solo | Personal project"
			},
		],
		aiUsage: "",
		description: "Dwarf Island was an experimental game project centered around procedural island generation. The core goal was to generate unique, explorable islands at runtime, combining terrain shaping, environmental placement, and gameplay systems into a cohesive world-generation pipeline. While the project was ultimately abandoned around three years ago, it represents an important milestone in my development journey and showcases my work on procedural content generation, one of the areas of game programming I am most passionate about.",
		buttons: [
			{
				text: "GitHub repo",
				url: "https://github.com/Sokkero/DIgame"
			},
		]
	},
	{
		title: "VBA - Tetris",
		images: [tetris1],
		listEntries: [
			{
				text: "<b>Status:</b> Done"
			},
			{
				text: "<b>Type:</b> Joke game"
			},
			{
				text: "<b>Languages:</b> Visual Basic"
			},
			{
				text: "<b>Tech Stack:</b> Microsoft Access"
			},
			{
				text: "<b>Scope:</b> Abitur finals project"
			},
		],
		aiUsage: "",
		description: "This project was my final computer science assignment in my graduating year at school, with its main emphasis on Microsoft Access (Visual Basic). We were allowed to choose a project by ourselves under the condition that our teacher approved of our choice. Since Visual Basic and Microsoft Access specifically are not a \"videogame-friendly environment\", I was told that it would be unrealistic for my project to succeed at my level of experience and expertise. Nonetheless, I was determined to make it work and managed to succeed. Everything in this project was developed by myself and programmed solely within Microsoft Access in Visual Basic. I am aware that there are bugs and problems that could easily be fixed, but I do not want to alter the code for sentimental reasons, as it would no longer be the first real game I ever created by myself.",
		buttons: [
			{
				text: "Download game",
				url: tetrisGame,
				download: "tetrisgame.accdb"
			},
			{
				text: "Download code",
				url: tetrisCode,
				download: "TetrisCode.zip"
			},
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
			successMessage: "Email sent successfully, I will get back to you as soon as I can!"
		}
	}
};

export const BlogContent = {
	showBlogPage: false
}
