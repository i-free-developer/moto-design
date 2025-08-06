const TimelineItems = [
	{id: 1, number: '01', title: 'Application review'},
	{id: 2, number: '02', title: 'Interviews'},
	{id: 3, number: '03', title: 'Background investigation'},
	{id: 4, number: '04', title: 'Round Two interview'},
	{id: 5, number: '05', title: 'Offer'},
	{id: 6, number: '06', title: 'Probation review'},
	{id: 7, number: '07', title: 'Onboarding'},
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
	{number: '10', title: 'Ten',   subtitle: 'Aesthetic Learning',         content: 'We reimburse tickets and course fees for design events, exhibitions, and workshops—encouraging continuous visual growth.'},
]

// 5 roles
const OpenningRoles = [
	{
		id: '1',
		team: 'MOTO  >  Design Department  >  WEB',
		title: 'Senior UI Designer',
		fullTime: 'Full-time',
		onSite: 'On-site (Shenzhen)',
		isRemote: '',
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
		title: 'Senior Front-end Expert',
		fullTime: 'Full-time',
		onSite: 'On-site (Shenzhen)',
		isRemote: 'Remote',
		roleTag: 'Front-end Engineer',
		responsibilities: [
			'Work closely with the design team to translate design prototypes into pixel-perfect, high-fidelity interfaces.',
			'Ensure responsive design and cross-device adaptability, delivering consistent performance across all breakpoints.',
			'Lead interaction development, including animation frameworks, transitions, scroll behavior, and microinteractions.',
			'Collaborate with backend developers and product managers, and contribute to improving workflows and development standards.'
		],
		requirements: [
			'Solid foundation in HTML, CSS, and JavaScript, with proficiency in at least one modern framework like React, Vue, or Next.js.',
			'Experience with motion libraries and animation APIs like GSAP, Framer Motion, and WebGL-based libraries such as Three.js.',
			'Experienced with modern frontend tooling—build systems (Vite, Webpack), Git workflows, and performance tuning.',
			'Emphasize clean code, maintainable structure, and take part in code reviews and refactoring tasks, committed to effective teamwork and shared goals.'
		],
		bonusPoints: [
			'Design-sensitive: capable of translating abstract visual intentions into precise code, and providing feedback from a front-end perspective.',
			'Candidates with independently developed projects or fully launched products are preferred.'
		]
	},
	{
		id: '3',
		team: 'MOTO  >  Design Department  >  WEB',
		title: 'Motion & VFX Designer',
		fullTime: 'Full-time',
		onSite: 'On-site (Shenzhen)',
		isRemote: '',
		roleTag: 'Motion Designer',
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
		],
		bonusPoints: ['Candidates familiar with at least one programming or interactive design approach (e.g., CSS keyframes, Processing, Framer Motion, Three.js, GSAP, TouchDesigner) will be given priority.']
	},
	{
		id: '4',
		team: 'MOTO  >  Design Department  >  WEB',
		title: 'Global SEO & Content Operation',
		fullTime: 'Full-time',
		onSite: 'On-site (Shenzhen)',
		isRemote: 'Remote',
		roleTag: 'SEO & Operation',
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
		],
		bonusPoints: [
			'Experience in building or managing content for international brand websites is a strong plus.',
			'Bonus for candidates with overseas experience or strong cross-cultural communication skills.'
		]
	},
	{
		id: '5',
		team: 'MOTO  >  Design Department  >  WEB',
		title: 'Intern (Design/Branding/Content)',
		fullTime: 'Full-time',
		onSite: 'On-site (Shenzhen)',
		isRemote: '',
		roleTag: 'Intern',
		responsibilities: [
			'Contribute to day-to-day tasks across design, branding, and social content operations.',
			'Handles certain design tasks independently, helping streamline team workflows.',
			'Support market research efforts and actively engage in team brainstorms, bringing fresh ideas to the table.'
		],
		requirements: [
			'All majors are welcome, but preference will be given to candidates with backgrounds in design, media, marketing, or related fields.',
			'Quick to learn new things, with the ability to efficiently complete assigned tasks within working hours. Strong adaptability in team environments and familiar with major global social media platforms. ( Bilingual candidates — especially in Chinese, English, Korean, Japanese, or Arabic — will be given priority.）'
		],
		subSections: [
			{title: 'Design-related positions', content: 'Solid design fundamentals, expert software skills, sharp aesthetics, and a curious mind for new design tools.'},
			{title: 'Content operation positions', content: 'Strong copywriting skills with the ability to quickly and appropriately craft content for various business needs. Proficient in using AI tools to enhance efficiency. Previous experience in successful event planning during university is a plus. Sensitive and professional in understanding client needs — candidates with a natural talent for digital marketing will be prioritized.'}
		]
	},
]

const TeamMembers = [
	{name: 'Ec',           avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Edison.png',       title: 'Founder',                         subtitle: 'Ec is the art director, steering visual concepts and creative direction.',                          description: "Graduated from Shenzhen University. Former head of institutional departments at top Web3 firms, with solid strategy and investment experience. Previously a visual designer at Xunlei and Tencent, bridging design and business insight."},
	{name: 'Mia Zhan',     avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Mia-Zhan.png',     title: 'Co-Founder',                      subtitle: "MiaZhan serves as the head of vision, shaping the team's long - term visual strategies.",           description: "Graduated from Xihua University. Ex-Senior UI Specialist at Tencent with 10+ years in top tech firms like Photon Studio and Tenpay. Skilled in high-end UI and brand systems."},
	{name: 'Shiyan',       avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Shiyan.png',       title: 'Strategic Partner, UX Expert',    subtitle: 'Shiyan is the head of UI&UX function, optimizing user interface and experience.',                   description: "Graduate from SAIC. Former Senior UX Designer at Huawei, focused on user onboarding and interaction flow. Combines user-first thinking with sharp design intuition and structured problem-solving."},
	{name: 'Jasper',       avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Jasper.png',       title: 'Frontend Engineer',               subtitle: 'Jasper acts as the talent admin, handling recruitment and team - member management.',               description: "Specialized in responsive UI, motion, and code-level design execution. Builds seamless bridges between design and development."},
	{name: 'Kinny Liang',  avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Kinny-Liang.png',  title: 'Social Media Strategist',         subtitle: 'Kinny Liang is in charge of media management, dealing with media relations and promotion matters.', description: "Experienced in content planning and brand messaging. Focused on multi-platform strategy, community ops, and visual storytelling."},
	{name: 'Chan Zhong',   avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Chan-Zhong.png',   title: 'Senior UI Designer',              subtitle: 'ChanZhong is a front - end specialist, building and maintaining web front - end interfaces.',       description: "Graduated from Shenzhen University, trained at Central Saint Martins. Specializes in brand visuals and 3D, with a strong cross-media design foundation."},
	{name: 'Lesley Chan',  avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Lesley-Chan.png',  title: 'Senior VFX Artist',               subtitle: 'Lesley Chan is a 3D animation and VFX artist, creating 3D animations and visual effects.',          description: "Graduated from Shenzhen University. Former TCL VFX artist, skilled in Houdini, AE, and C4D. Focused on particles, fluid sim, and cinematic visuals."},
	{name: 'Vince',        avatar: 'https://assets-sh-padelx.shanghaipadel.com/moto-avatar-Vince.png',        title: 'Head of Consulting & Operations', subtitle: 'Vince is in charge of channel management, overseeing communication and outreach channels.',         description: "Graduated from Tianjin University. Former Web3 ops lead with expertise in cross-team workflows and global strategy. Deeply connected in the B2B Web3 ecosystem."},
]

const StatusContents = [
	{title: '150', suffix: '+', content: 'We have successfully  completed a total of 150 tasks'},
	{title: '12',  suffix: '',  content: 'Team members all over the world'},
	{title: '8',   suffix: '',  content: 'With over 8 years of experience in web3 industry'},
	{title: '25',  suffix: 'k', content: 'We have over 25k followers on global social media'},
]

const PortfolioData = {
	desktop: [
		{id: 1, title: 'UI/UX Design for a Minimalist DeFi Platform',  description: 'A clean interface for non-custodial DeFi banking, focused on payments and yield tools. Prioritizes clarity, data visibility, and user autonomy.', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-meanfi-desktop.png',   fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-meanfi.png'},
		{id: 2, title: 'Kylin Web3 Platform Design',                   description: 'A bold, tech-forward design tailored for Web3-native users, supporting oracle and indexing services with scalable on-chain data access.',         image: 'https://assets-sh-padelx.shanghaipadel.com/moto-kylin-desktop.png',    fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-kylin.png'},
		{id: 3, title: 'Stablecoin Platform Design for Aegis',         description: 'A transparent, credible interface for Aegis’s stablecoin and lending suite, built to boost user trust in permissionless finance.',                image: 'https://assets-sh-padelx.shanghaipadel.com/moto-aegis-desktop.png',    fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-aegis.png'},
		{id: 4, title: 'UI Design for the Internet of Blockchains',    description: 'Futuristic visuals for Cosmos’ interchain vision, balancing technical depth with accessible multichain narratives.',                              image: 'https://assets-sh-padelx.shanghaipadel.com/moto-cosmos-desktop.png',   fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-cosmos.png'},
		{id: 5, title: 'Website Design for an NFT Protocol on Solana', description: 'A developer-first site that streamlines access to NFT minting, auctions, and tools across the Solana ecosystem.',                                 image: 'https://assets-sh-padelx.shanghaipadel.com/moto-metaplex-desktop.png', fullImage: 'https://assets-sh-padelx.shanghaipadel.com/moto-metaplex.png'},
	],
	mobile: [
		{ id: 1,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-1.png' },
		{ id: 2,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-2.png' },
		{ id: 3,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-3.png' },
		{ id: 4,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-4.png' },
		{ id: 5,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-5.png' },
		{ id: 6,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-6.png' },
		{ id: 7,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-7.png' },
		{ id: 8,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-8.png' },
		{ id: 9,  title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-9.png' },
		{ id: 10, title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-10.png' },
		{ id: 11, title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-11.png' },
		{ id: 12, title: '#', description: '#', image: 'https://assets-sh-padelx.shanghaipadel.com/moto-mobile-12.png' },
	]
}

const TestimonialIcons = [
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-ventures.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-gateio.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-chain-catcher.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-aws.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-bybit.png',
	'https://assets-sh-padelx.shanghaipadel.com/moto-icon-rootdata.png',
]

const ServicesItems = ['Web Design / UI & UX', '3D & Concept Animation', 'Brand Identity & Social Media Visual']

const CopyRight = '© 2025 Moto Design Ltd. All rights reserved.'

const CompanyEmail = 'Hello@motodesign.cn'

const CompanyDomain = 'motodesign.cn'

const HandImg = 'https://assets-sh-padelx.shanghaipadel.com/moto-sticky-hand-img.png'

// const ApiPath = 'http://localhost:3000/api'

function ApiPath() { return location.href.includes('localhost') ? 'http://localhost:3000/api' : 'https://api.motodesign.cn/api' }

export {TimelineItems, PerkItemsData, OpenningRoles, TeamMembers, PortfolioData, StatusContents, ServicesItems, CopyRight, CompanyEmail, CompanyDomain, HandImg, TestimonialIcons, ApiPath}

