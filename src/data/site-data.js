const TimelineItems = [
	{id: 1, number: '01', title: 'Application review'},
	{id: 2, number: '02', title: 'Interviews'},
	{id: 3, number: '03', title: 'Background investigation'},
	{id: 4, number: '04', title: 'Round Two interview'},
	{id: 5, number: '05', title: 'Offer'},
	{id: 6, number: '06', title: 'Onboarding'},
]

const PerkItemsData = [
	{number: '01', title: 'One',   subtitle: 'Competitive salary',         content: 'Salaries are based on ability and set above market averages, with a clear and attractive bonus system.'},
	{number: '02', title: 'Two',   subtitle: 'Flexible Working Hours',     content: 'Work hours are adjustable to support a personalized rhythm and a healthy balance between work and life.'},
	{number: '03', title: 'Three', subtitle: 'Remote-Friendly Team',       content: 'Multiple roles support remote work, with professional tools enabling efficient distributed collaboration across teams.'},
	{number: '04', title: 'Four',  subtitle: 'Flexible Time Off',          content: 'Public holidays can be shifted; downtime between projects allows you to reallocate leave for personal travel or rest.'},
	{number: '05', title: 'Five',  subtitle: 'Daily Perks & Benefits',     content: 'Includes transport and meal subsidies, holiday gifts, health checks, and regular team events.'},
	{number: '06', title: 'Six',   subtitle: 'Global Collaboration',       content: 'Work across languages and time zones with global teams to grow communication and perspective.'},
	{number: '07', title: 'Seven', subtitle: 'Work With Top Talent',       content: 'Collaborate with designers from leading schools and companies—stay close to fresh ideas and inspiration.'},
	{number: '08', title: 'Eight', subtitle: 'Cross-Project Growth',       content: 'Work across branding, motion, interaction, and Web3 consulting to build a broad, future-ready skill set.'},
	{number: '09', title: 'Nine',  subtitle: 'Paid Volunteer Days',        content: 'Take 1–2 paid days off during project gaps to engage in meaningful volunteer work and social good initiatives.'},
	{number: '10', title: 'Ten',   subtitle: 'Aesthetic Learning', content: 'We reimburse tickets and course fees for design events, exhibitions, and workshops—encouraging continuous visual growth.'},
]

const OpenningRoles = [
	{
		id: '1',
		team: 'MOTO  >  Design Department  >  WEB', 
		title: 'Senior UI Designer',
		fullTime: 'Full-time',
		onSite: 'On-site (ShenZhen)',
		isRemote: 'Remote',
		roleTag: 'UI Designer',
		responsibilities: [
			'Lead the visual design strategy for both web and mobile platforms. Collaborate closely with UX researchers, motion designers, and front-end engineers, providing front-end design support when necessary to ensure seamless integration with client requirements.',
			'Manage multiple design projects simultaneously with strong time management and attention to quality, ensuring timely delivery of high-fidelity design files.',
			'Stay updated on design trends and emerging technologies. Analyze competitors and contribute innovative, efficient design solutions to the team.',
			'Regularly review and optimize your design work through retrospectives and self-reflection.'
		],
		requirements: [
			'A degree in a design-related field, with at least 2 years of experience at a major internet or tech company. (Graduates from top-tier design schools with bilingual communication skills will be given priority.)',
			'Proficient in Figma, Adobe Creative Suite, and interaction/motion design tools such as ProtoPie or Principle. Familiarity with AI-powered design tools is a plus.',
			'A refined aesthetic sense with a strong command of interface hierarchy, typography, color theory, and interaction design.',
			'A complete and polished portfolio is required, showcasing interface and visual design works. (Please note: We conduct detailed background checks on portfolios and candidate credentials. Any discovered misrepresentation or falsification will result in immediate termination of your application.)'
		]
	},
	{
		id: '2',
		team: 'MOTO  >  Design Department  >  WEB', 
		title: 'Global SEO & Content Operation',
		fullTime: 'Full-time',
		onSite: 'On-site (ShenZhen)',
		isRemote: 'Remote',
		roleTag: 'UI Designer',
		responsibilities: [
			"Be responsible for the SEO optimization of the company's brand, formulate multilingual SEO strategies based on different regional, optimize the content structure and keyword layout of the website, and enhance global search visibility",
			'Monitor and analyze website performance using tools like GA4 and Search Console; refine content strategy based on data.',
			'Create and localize high-quality brand content — including project write-ups, blog articles, social media copy, and case narratives — primarily in English, ensure that the language style is consistent with the brand tone',
			'Stay updated with algorithm changes and competitor strategies to continuously refine SEO and content plans.'
		],
		requirements: [
			'Proven experience in SEO strategy and content operations, with a solid understanding of global search engine ecosystems.',
			'Strong English writing skills; capable of crafting or managing high-quality multilingual brand content.',
			'Proficient with SEO tools like Ahrefs, SEMRush, Screaming Frog, GA4, and Google Search Console.',
			'Sensitive to branding tone, user behavior, and digital trends; combines data insight with aesthetic sensibility.'
		]
	},
	{
		id: '3',
		team: 'MOTO  >  Design Department  >  WEB', 
		title: 'Motion & VFX Designer',
		fullTime: 'Full-time',
		onSite: 'On-site (ShenZhen)',
		isRemote: 'Remote',
		roleTag: 'Intern',
		responsibilities: [
			'Take full ownership of motion and visual effects design across company projects, including brand visuals, dynamic website showcases, promotional videos, and product demo animations.',
			'Collaborate closely with UI/UX designers and front-end developers to deliver actionable motion design solutions, with a solid understanding of interaction implementation (CSS animations, WebGL, Lottie, etc.).',
			'Adapt animations for multiple platforms (web, apps, social media), ensuring visual consistency, performance, and compatibility across browsers and devices.',
			'Be familiar with web and mobile design standards, ensuring responsive behavior and cross-platform adaptability for both desktop and mobile environments.',
			'Stay on top of global motion design trends, digital media technologies, and generative interaction art; actively contribute to team brainstorming and creative strategy sessions.'
		],
		requirements: [
			'Degree in Animation, Fine Arts, Design, Digital Media, or related fields, with no less than 3 years of experience in motion design. We prioritize the quality and originality of your portfolio.',
			'Proficient in at least two mainstream motion/VFX software tools such as After Effects, Cinema 4D, Blender, Notch, or Houdini.',
			'Skilled in using UI tools like Figma or Adobe XD for motion integration, with a high sensitivity to dynamic composition, timing, sound, and visual rhythm.',
			'Passionate about exploring new design tools, with strong interest in AI-assisted creativity, generative visuals, and interactive media art, and a mindset of continuous learning.',
			'Candidates familiar with at least one programming or interactive design approach (e.g., CSS keyframes, Processing, Framer Motion, Three.js, GSAP, TouchDesigner) will be given priority.'
		]
	},
	{
		id: '4',
		team: 'MOTO  >  Design Department  >  WEB', 
		title: 'Intern (Design/Branding/Content)',
		fullTime: 'Full-time',
		onSite: 'On-site (ShenZhen)',
		isRemote: 'Remote',
		roleTag: 'Intern',
		responsibilities: [
			'Contribute to day-to-day tasks across design, branding, and social content operations.',
			'Handles certain design tasks independently, helping streamline team workflows.',
			'Support market research efforts and actively engage in team brainstorms, bringing fresh ideas to the table.'
		],
		requirements: [
			'All majors are welcome, but preference will be given to candidates with backgrounds in design, media, marketing, or related fields.',
			'Quick to learn new things, with the ability to efficiently complete assigned tasks within working hours. Strong adaptability in team environments and familiar with major global social media platforms. ( Bilingual candidates — especially in Chinese, English, Korean, Japanese, or Arabic — will be given priority.）'
		]
	},
]

const TeamMembers = [
	{name: 'Edison',       avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Edison.png',       title: 'Founder',                         role: 'Founder',                         description: "Graduated from Shenzhen University. Former head of institutional departments at top Web3 firms, with solid strategy and investment experience. Previously a visual designer at Xunlei and Tencent, bridging design and business insight."},
	{name: 'Mia Zhan',     avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Mia-Zhan.png',     title: 'Co-Founder',                      role: 'Co-Founder',                      description: "Graduated from Xihua University. Ex-Senior UI Specialist at Tencent with 10+ years in top tech firms like Photon Studio and Tenpay. Skilled in high-end UI and brand systems."},
	{name: 'Shiyan',       avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Shiyan.png',       title: 'Strategic Partner, UX Expert',    role: 'Strategic Partner, UX Expert',    description: "Graduate from SAIC. Former Senior UX Designer at Huawei, focused on user onboarding and interaction flow. Combines user-first thinking with sharp design intuition and structured problem-solving."},
	{name: 'Jasper',       avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Jasper.png',       title: 'Frontend Engineer',               role: 'Frontend Engineer',               description: "Specialized in responsive UI, motion, and code-level design execution. Builds seamless bridges between design and development."},
	{name: 'Kinny Liang',  avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Kinny-Liang.png',  title: 'Social Media Strategist',         role: 'Social Media Strategist',         description: "Experienced in content planning and brand messaging. Focused on multi-platform strategy, community ops, and visual storytelling."},
	{name: 'Chan Zhong',   avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Chan-Zhong.png',   title: 'Senior UI Designer',              role: 'Senior UI Designer',              description: "Graduated from Shenzhen University, trained at Central Saint Martins. Specializes in brand visuals and 3D, with a strong cross-media design foundation."},
	{name: 'Lesley Chan',  avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Lesley-Chan.png',  title: 'Senior VFX Artist',               role: 'Senior VFX Artist',               description: "Graduated from Shenzhen University. Former TCL VFX artist, skilled in Houdini, AE, and C4D. Focused on particles, fluid sim, and cinematic visuals."},
	{name: 'Vince',        avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Vince.png',        title: 'Head of Consulting & Operations', role: 'Head of Consulting & Operations', description: "Graduated from Tianjin University. Former Web3 ops lead with expertise in cross-team workflows and global strategy. Deeply connected in the B2B Web3 ecosystem."},
	// {name: 'Amelia Clark', avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Amelia-Clark.png', title: 'CEO', role: '', description: ""},
]

const DesktopPortfolioItems = [
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	{title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 5, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
]

const MobilePortfolioItems = [
	{ title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
	{ title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
	{ title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 2, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
	{ title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 3, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
	{ title: 'Title A', description: 'Backing the best Web 3.0 founders & products', colums: 5, url: '#', image: 'https://plus.unsplash.com/premium_photo-1673795753320-a9df2df4461e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const StatusContents = [
	{title: '150', suffix: '+', content: 'We have successfully  completed a total of 150 tasks'},
	{title: '12',  suffix: '',  content: 'Team members all over the world'},
	{title: '8',   suffix: '',  content: 'With over 8 years of experience in web3 industry'},
	{title: '25',  suffix: 'k', content: 'We have over 25k followers on global social media'},
]

const PortfolioData = {
	desktop: [
		{id: 1, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-meanfi-desktop.png',   fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-meanfi.png'},
		{id: 2, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-kylin-desktop.png',    fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-kylin.png'},
		{id: 3, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-aegis-desktop.png',    fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-aegis.png'},
		{id: 4, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-cosmos-desktop.png',   fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-cosmos.png'},
		{id: 5, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-metaplex-desktop.png', fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-metaplex.png'},
	],
	mobile: [
		{ id: 1, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-1-mobile.png' },
		{ id: 2, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-2-mobile.png' },
		{ id: 3, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-3-mobile.png' },
		{ id: 4, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-4-mobile.png' },
		{ id: 5, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-5-mobile.png' },
		{ id: 6, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-6-mobile.png' },
		{ id: 7, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-7-mobile.png' },
		{ id: 8, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-8-mobile.png' },
		{ id: 8, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-9-mobile.png' },
		{ id: 8, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-10-mobile.png' },
		{ id: 8, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-11-mobile.png' },
		{ id: 8, title: 'Title A', description: 'Backing the best Web 3.0 founders & products', url: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-12-mobile.png' },
	]
}

const TestimonialIcons = [
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-ventures.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-gateio-gray.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-chain-catcher.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-aws.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-bybit.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-rootdata.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-gateio-black.png',
]

const SubmittedImg = 'https://assets-sh-padelx.shanghaipadel.com/moto-submitted-already.png'

const ServicesItems = ['Web Design / UI & UX', '3D & Concept Animation', 'Brand Identity & Social Media Visual']

const CopyRight = '© 2025 Moto Design Ltd. All rights reserved.'

const CompanyEmail = 'Hello@motodesign@.cn'

const CompanyDomain = 'motodesign.cn'

const HandImg = 'https://assets-sh-padelx.shanghaipadel.com/moto-sticky-hand-img.png'

export {TimelineItems, PerkItemsData, OpenningRoles, TeamMembers, PortfolioData, StatusContents, ServicesItems, CopyRight, CompanyEmail, CompanyDomain, HandImg, TestimonialIcons, SubmittedImg}

