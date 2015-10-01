const config = {
	pageTitle: "Kamakshi Pathapati",
	pageSubTitle: "UX/UI Designer",
	profilePic: "images/kami-profile-pic.png",
	aboutMe: "I am a UX designer with a passion for great design and solving problems. I have experience in end-to-end design and development of mobile applications in supply-chain area for 2 years. My area of expertise is in mobile ERP UX. Prior to my experience in the industry, I have been in academic research for 3 years at the University of Kansas.",
	excludedGeneratedPages: ["resume"],
	excludedMenuItems: ["home", "my work", "writing", "extras"],
	displayDefaultHomePage: true,
	resumeLink: "/contents/resume/Kamakshi_Pathapati.pdf",
	knownTemplateMappings: {
		"my work": "scrolling-page",
		"home": "home",
		"extras": "master-detail",
		"writing": "master-detail"
	},
	menuItemsOrder: {
		"my work": 1,
		"resume": 2,
		"writing": 3,
		"extras": 4
	} 
};

export default config;