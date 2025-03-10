import { Project, ProjectCategory, ProjectCategoryItem } from "@/types/project";

// Import project images
import goldenMindsWeb from "@global/images/ref002.png";
import votingSystem from "@global/images/vt62as.png";
import phEnWeb from "@global/images/523aaa.png";
import portfolioWeb from "@global/images/t2131.png";
import inventoryWeb from "@global/images/551asfh.png";
import chatBot from "@global/images/ch4tb.png";

// Import tech icons
import vueIcon from "@global/svgs/vue.svg?url";
import tsIcon from "@global/svgs/typescript.svg?url";
import tailwindIcon from "@global/svgs/tailwind.svg?url";
import laravelIcon from "@global/svgs/laravel.svg?url";
import bootstrapIcon from "@global/svgs/bootstrap.svg?url";
import jqueryIcon from "@global/svgs/jquery.svg?url";
import phpIcon from "@global/svgs/php.svg?url";
import jsIcon from "@global/svgs/javascript.svg?url";
import cssIcon from "@global/svgs/css3.svg?url";
import mysqlIcon from "@global/svgs/mysql.svg?url";
import postgresIcon from "@global/svgs/postgresql.svg?url";
import firebaseIcon from "@global/svgs/firebase.svg?url";

export const projects: readonly Project[] = [
  {
		id: 1,
		title: "Portfolio Website",
		description:
			"My personal website serves as a digital portfolio, showcasing my projects, skills, and experiences. This project is a testament to my passion for web development and design.",
		image: portfolioWeb,
		githubUrl: "https://github.com/javecilla/portfolio",
		demoUrl: "https://javecilla.vercel.app/",
		technologies: [
			{
				name: "Vue.js",
				icon: vueIcon,
			},
			{
				name: "TypeScript",
				icon: tsIcon,
			},
			{
				name: "Tailwind CSS",
				icon: tailwindIcon,
			},
      {
        name: "Firebase",
        icon: firebaseIcon,
      },
		],
		category: ProjectCategory.PERSONAL,
		isHighlight: false,
	},
  {
    id: 2,
    title: "Golden Minds Official Website",
    description: `I developed the Official Website for Golden Minds Colleges and Academy as a solo project, creating a dynamic platform to serve the student community. Launched to streamline access to essential information, updates, and academic resources, this site enhances the overall educational experience for students and staff.

## Problem & Solution  
Golden Minds Colleges lacked a centralized, user-friendly online presence, leaving students and staff reliant on scattered communication channels. I built a responsive, feature rich website that consolidates key resources course details, announcements, and contact information into one accessible hub, improving engagement and efficiency.

## Key Features  
- **Dynamic Content**: Real-time updates for announcements and events using Vue.js reactivity.  
- **Responsive Design**: Mobile-friendly interface built with Bootstrap for seamless access across devices.  
- **Resource Hub**: Centralized access to academic materials and institutional info.  
- **Admin Dashboard**: Tools for staff to manage content and track site usage.  
- **SEO Optimization**: Improved visibility on search engines for broader reach.

## Project Timeline  
- **2020 - Initial Launch**: Debuted the site with core features for student access built using HTML, CSS and JavaScript developed by the school with a domain **goldenmindsbulacan.com**
- **2022 - Major Upgrade**: Migrated to Laravel and Vue.js for enhanced performance and maintainability with the new **goldenminds.edu.ph** domain.
- **2023 - Feature Expansion**: Added admin dashboard and resource hub based on feedback.  
- **2024 - Performance Upgrade**: Optimized load times and SEO for better user experience.

## Technical Challenges & Solutions  
- **Frontend Reactivity**: Integrated Vue.js with Laravel to enable dynamic updates without full page reloads, enhancing user interaction.  
- **Database Scalability**: Designed PostgreSQL schemas with efficient indexing to handle growing content and user traffic.

## Impact  
- Reduced student inquiries by 35% by centralizing information online.  
- Achieved 6,000+ page views within six months of launch.  
- Praised by college administration for improving communication and accessibility.

## Architecture  
- **Backend**: Laravel for robust API endpoints, content management, and authentication.  
- **Frontend**: Vue.js for reactive components paired with Bootstrap for styling.  
- **Database**: PostgreSQL with normalized tables for scalable data storage.  
- **Deployment**: Hosted on HostGator with Cloudflare for security and CDN performance.

Building this website sharpened my skills in full-stack development. I gained proficiency in integrating Vue.js with Laravel for a smooth, reactive frontend, reducing average page load times by 25% through optimization techniques like lazy loading. I also improved my database design skills with PostgreSQL, ensuring scalability for future growth, and embraced version control best practices using Git for efficient solo project management.
`,
    image: goldenMindsWeb,
    githubUrl: "https://github.com/javecilla/Golden-Minds-Colleges-Web-System",
    demoUrl: "https://www.goldenminds.edu.ph/",
    technologies: [
      {
        name: "Laravel",
        icon: laravelIcon,
      },
      {
        name: "Vue.js",
        icon: vueIcon,
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        name: "PostgreSQL",
        icon: postgresIcon,
      },
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
  },
  {
    id: 3,
    title: "Online Voting System",
    description: ` 
I created a dynamic Online Voting System for Golden Minds Colleges to replace inefficient manual voting processes. Launched in 2023, this solo project delivers a seamless, secure, and engaging digital voting experience, enhancing community participation across multiple events.

## Problem & Solution  
Manual voting at Golden Minds Colleges was slow, error-prone, and inaccessible to remote participants. My solution digitized the process, integrating real-time updates, secure payments via GCash, and Recaptcha verification. This increased voter turnout by 40% in its first year while ensuring accuracy and accessibility.

## Key Features  
- **Live Previews**: Real-time voting results powered by WebSockets.  
- **Accurate Calculations**: Reliable vote tabulation with optimized database queries.  
- **GCash Integration**: Secure, seamless payment handling.  
- **Security**: Email verification and Recaptcha to prevent fraud.  
- **Dashboard**: Comprehensive analytics with charts for tracking engagement.

## Project Timeline  
- **2023 - Santa Maria Teen Model**: Debuted the system, setting a new standard for digital voting.  
- **2023 - Buwan ng Wika**: Enhanced platform for cultural engagement.  
- **2024 - Mister, Miss, and Pride**: Promoted inclusivity with innovative solutions.  
- **2024 - Buwan ng Wika**: Celebrated linguistic heritage with high participation.

## Technical Challenges & Solutions  
- **Real-Time Updates**: Used Laravel’s event broadcasting with WebSockets to manage live previews efficiently, avoiding server overload.  
- **Payment Security**: Integrated GCash via Laravel’s HTTP client and transaction callbacks for reliable processing.

## Impact  
- Processed 5,000+ votes across four events with zero downtime.  
- Boosted voter participation by 40% due to improved accessibility.  
- Adopted as the college’s standard voting platform after positive administrative feedback.

## Architecture  
- **Backend**: Laravel for API endpoints, logic, and integrations (GCash, Recaptcha, email).  
- **Frontend**: jQuery and Bootstrap with real-time WebSocket updates and Chart.js visuals.  
- **Database**: MySQL with normalized tables and indexes for fast vote tallying.
- **Deployment**: Hosted on HostGator with Cloudflare for security and performance.

Developing this system deepened my expertise in several key areas. I honed my ability to optimize high-traffic database queries, achieving a 30% reduction in response times through efficient indexing and query refactoring. Additionally, I mastered secure API integration particularly with third-party services like GCash by leveraging thorough documentation to ensure robust, maintainable code. This project also led me to adopt unit testing for critical components like vote calculations, enhancing reliability and enabling early detection of edge cases.
`,
    image: votingSystem,
    githubUrl: "https://github.com/javecilla/Online-Voting-System",
    demoUrl: "https://voting.goldenmindsbulacan.com/",
    technologies: [
      {
        name: "Laravel",
        icon: laravelIcon,
      },
      {
        name: "jQuery",
        icon: jqueryIcon,
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        name: "MySQL",
        icon: mysqlIcon,
      },
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
  },
  {
    id: 4,
    title: "Ph-En Vocabulary Web App",
    description: `
  I developed the Philippine-English Vocabulary Web App as a commissioned project for fourth-year Bachelor of Secondary Education (BSED) students majoring in English at Polytechnic University of the Philippines (PUP). Designed to enhance vocabulary mastery, this web app offers interactive learning tools, pronunciation guides, and quizzes to support effective language acquisition.

  ## Key Features  
  - **Extensive Word Collection**: Covers Philippine English words with clear meanings.  
  - **Pronunciation Guide**: Includes audio support to ensure correct pronunciation.  
  - **Contextual Usage**: Sample sentences demonstrate real-world application.  
  - **Visual Aids**: Pictures enhance memory retention.  
  - **Interactive Quizzes**: Users can test their knowledge and track progress.  
  - **User Customization**: Personalized settings for an adaptive learning experience.
  
  ## Project Timeline  
  - **August 2024 - Development & Launch**: Initiated after discussions with PUP students and built to meet their academic needs.
  
  ## Technical Challenges & Solutions  
  - **Audio Integration**: Implemented a seamless audio playback feature for pronunciation guides.  
  - **Optimized Database Queries**: Ensured fast retrieval of vocabulary data through efficient indexing.
  
  ## Impact  
  - Improved vocabulary retention for students using structured learning modules.  
  - Provided an accessible and engaging tool for self-paced learning.  
  
  ## Architecture  
  - **Backend**: PHP for API development and content management.  
  - **Frontend**: JavaScript with Bootstrap for a responsive UI.  
  - **Database**: MySQL with optimized queries for efficient word lookup.  
  - **Deployment**: Hosted on Hostinger for reliability and scalability.
  
  This project reinforced my expertise in full-stack web development, particularly in integrating multimedia elements and optimizing database performance. The challenge of making vocabulary learning interactive pushed me to refine user experience design and create a tool that balances education with engagement.
  `,
    image: phEnWeb,
    githubUrl: "https://github.com/javecilla/Philippine_English_Vocabulary",
    demoUrl: "https://philippineenglishvocabulary.com/",
    technologies: [
      {
        name: "PHP",
        icon: phpIcon,
      },
      {
        name: "JavaScript",
        icon: jsIcon,
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        name: "MySQL",
        icon: mysqlIcon,
      },
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
  },  
  {
    id: 5,
    title: "Web-Based Inventory System",
    description: `
I developed the Web-Based Inventory System as a thesis project during my Senior High School at Golden Minds Colleges, Sta. Maria Campus, Bulacan. This project fulfills the requirements of the **Information and Communication Technology (ICT)** strand and provides a structured and automated approach to managing HRM tools and equipment inventories.

## Key Features  
- **User-Friendly Interface**: Intuitive design for easy navigation.  
- **Real-Time Tracking**: Monitors the location and status of tools and equipment.  
- **Transaction Management**: Handles borrowing, returning, and inventory updates.  
- **Dynamic Report Generation**: Provides essential reports for data-driven decisions.  
- **Automated Alerts**: Notifies users of low stock, damaged equipment, or critical updates.  
- **Integrated Mailing System**: Sends email notifications for important actions.  

## Development Journey  
During **Grade 12**, I led my group in developing this system, focusing on innovation and usability. Our dedication and technical approach earned us the **Best Thesis for Innovation** award. The system has since been officially adopted by Golden Minds Colleges as their primary inventory management tool.

## Technical Stack  
- **Backend**: PHP for API development and server-side logic.  
- **Frontend**: JavaScript and CSS for a responsive and interactive UI.  
- **Database**: MySQL for structured data storage and efficient retrieval.  
- **Deployment**: Hosted on a HostGator. 

This project refined my skills in **full-stack development**, particularly in designing **efficient database structures** and implementing **real-time tracking systems**.  
`,
    image: inventoryWeb,
    githubUrl:
      "https://github.com/javecilla/Web-Based-Inventory-Management-System",
    demoUrl: "https://ims.goldenmindsbulacan.com/",
    technologies: [
      {
        name: "PHP",
        icon: phpIcon,
      },
      {
        name: "JavaScript",
        icon: jsIcon,
      },
      {
        name: "CSS",
        icon: cssIcon,
      },
      {
        name: "MySQL",
        icon: mysqlIcon,
      },
    ],
    category: ProjectCategory.ACADEMIC,
    isHighlight: false,
},
  {
		id: 6,
		title: "Conversational Chatbot (FAQs)",
		description: `A personalized conversational chat bot that answer all FAQs about me, integrating generative AI to provide real-time, interactive responses, natural langauge that similar to the AI chat platforms like ChatGPT, Claude, etc.

## Key Features

#### **User-Friendly Interface**  
- **Collapsible Chat Box** - like the messenger interface.
- **Option to End Chat & Start a New Conversation** 
- **Typing Indicator** – Show a "bot is typing..." animation for a more natural feel.  
- **Quick Reply Buttons** – Provide suggested questions that users can tap instead of typing.  
- **Starter Categorization Conversation** - Show a "starter conversation for a more natural like "Hello i am Javecilla ChatBot, How can i assist you?" and then show suggestions questions like "Who are you?", "What’s your background? and  "What services do you offer?",

#### **Improved Chat Experience**  
- **Chunked AI Responses for Real-Time Feel** - Show AI responses in chunks for a more natural flow.
- **Autoscroll to Latest Message** – Ensure new messages are always visible.  
- **Message Timestamp** – Show timestamps for each user and bot message.  
- **Emoji & Markdown Support** – Improve readability and engagement with emojis or formatting (bold, italics, etc.).  

#### **Persistent & Session-Based Features**  
- **Store Chat (state-pinia) History for Current Session** 
- **Load Previous Chats on Page Reload** – Restore chat history when the user revisits.  
- **Database Option (Google Firebase)** – Store chat history beyond the current session for returning users.  

#### **Smart Features & Enhancements**  
- **Smart Search for FAQs** – Let users type keywords, and the chatbot suggests related FAQs.  
- **Fallback Handling** – If the bot doesn't know an answer, it can guide the user to contact you or check your website.  
- **FAQ Categorization** – Organize FAQs into categories (e.g., Services, Pricing, Contact).  

#### **Accessibility**  
- **Screen Reader Support** – Ensure content is readable by screen readers.  
`,
    image: chatBot,
		githubUrl: "https://github.com/javecilla/Conversational-Chatbot-for-FAQs",
		demoUrl: "https://chatbot-faqs.vercel.app/",
		technologies: [
			{
				name: "Vue.js",
				icon: vueIcon,
			},
			{
				name: "TypeScript",
				icon: tsIcon,
			},
			{
				name: "Tailwind CSS",
				icon: tailwindIcon,
			},
      {
        name: "Firebase",
        icon: firebaseIcon,
      },
		],
		category: ProjectCategory.PERSONAL,
		isHighlight: false,
	},
] as const;

export const categories: readonly ProjectCategoryItem[] = [
  { id: "highlights" as const, label: "Highlights" },
  { id: "all" as const, label: "All Projects" },
  { id: ProjectCategory.ACADEMIC, label: "Academic" },
  { id: ProjectCategory.PERSONAL, label: "Personal" },
  { id: ProjectCategory.CLIENT, label: "Client" },
] as const;
