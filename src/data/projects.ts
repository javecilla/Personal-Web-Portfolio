import { Project, ProjectCategory, ProjectCategoryItem } from '@/types/project'

// Import project images
import goldenMindSims from '@global/images/ref001.png'
import goldenMindsWeb from '@global/images/ref002.png'
import votingSystem from '@global/images/vt62as.png'
import phEnWeb from '@global/images/523aaa.png'
import portfolioWeb from '@global/images/t2131.png'
import galleryWeb from '@global/images/t2131.png'
import inventoryWeb from '@global/images/551asfh.png'
import chatBot from '@global/images/ch4tb.png'
import oarsmc from '@global/images/oarsmc.png'
import kmykSystem from '@global/images/kmyk.png'
import drpauSystem from '@global/images/drpauabc_cis.png'

// Import tech icons
import vueIcon from '@global/svgs/vue.svg?url'
import tsIcon from '@global/svgs/typescript.svg?url'
import tailwindIcon from '@global/svgs/tailwind.svg?url'
import laravelIcon from '@global/svgs/laravel.svg?url'
import bootstrapIcon from '@global/svgs/bootstrap.svg?url'
import jqueryIcon from '@global/svgs/jquery.svg?url'
import phpIcon from '@global/svgs/php.svg?url'
import jsIcon from '@global/svgs/javascript.svg?url'
import cssIcon from '@global/svgs/css3.svg?url'
import htmlIcon from '@global/svgs/html5.svg?url'
import mysqlIcon from '@global/svgs/mysql.svg?url'
import postgresIcon from '@global/svgs/postgresql.svg?url'
import firebaseIcon from '@global/svgs/firebase.svg?url'
import reactIcon from '@global/svgs/react.svg?url'
import dockerIcon from '@global/svgs/docker.svg?url'

export const projects: readonly Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'My personal website serves as a digital portfolio, showcasing my projects, skills, and experiences. This project is a testament to my passion for web development and design.',
    image: portfolioWeb,
    githubUrl: 'https://github.com/javecilla/Personal-Web-Portfolio',
    demoUrl: 'https://javecilla.vercel.app/',
    technologies: [
      {
        name: 'Vue.js',
        icon: vueIcon
      },
      {
        name: 'TypeScript',
        icon: tsIcon
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon
      },
      {
        name: 'Firebase',
        icon: firebaseIcon
      }
    ],
    category: ProjectCategory.PERSONAL,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 2,
    title: 'Golden Minds Official Website',
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
- **Database Scalability**: Designed MySQL schemas with efficient indexing to handle growing content and user traffic.

## Impact  
- Reduced student inquiries by 35% by centralizing information online.  
- Achieved 6,000+ page views within six months of launch.  
- Praised by college administration for improving communication and accessibility.

## Architecture  
- **Backend**: Laravel for robust API endpoints, content management, and authentication.  
- **Frontend**: Vue.js for reactive components paired with Bootstrap for styling.  
- **Database**: MySQL with normalized tables for scalable data storage.  
- **Deployment**: Hosted on HostGator with Cloudflare for security and CDN performance.

Building this website sharpened my skills in full-stack development. I gained proficiency in integrating Vue.js with Laravel for a smooth, reactive frontend, reducing average page load times by 25% through optimization techniques like lazy loading. I also improved my database design skills with MySQL, ensuring scalability for future growth, and embraced version control best practices using Git for efficient solo project management.
`,
    image: goldenMindsWeb,
    githubUrl: 'https://github.com/javecilla/Golden-Minds-Colleges-Web-System',
    demoUrl: 'https://www.goldenminds.edu.ph/',
    technologies: [
      {
        name: 'MySQL',
        icon: mysqlIcon
      },
      {
        name: 'Laravel',
        icon: laravelIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'Vue.js',
        icon: vueIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
    isRecent: false
  },
  {
    id: 3,
    title: 'Online Voting System',
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
    githubUrl: 'https://github.com/javecilla/Online-Voting-System',
    demoUrl: 'https://voting.goldenmindsbulacan.com/',
    technologies: [
      {
        name: 'MySQL',
        icon: mysqlIcon
      },
      {
        name: 'Laravel',
        icon: laravelIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'jQuery',
        icon: jqueryIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
    isRecent: false
  },
  {
    id: 4,
    title: 'Ph-En Vocabulary Web App',
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
    githubUrl: 'https://github.com/javecilla/Philippine_English_Vocabulary',
    demoUrl: 'https://philippineenglishvocabulary.com/',
    technologies: [
      {
        name: 'MySQL',
        icon: mysqlIcon
      },
      {
        name: 'PHP',
        icon: phpIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'jQuery',
        icon: jqueryIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 5,
    title: 'Web-Based Inventory System',
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
      'https://github.com/javecilla/Web-Based-Inventory-Management-System',
    demoUrl: 'https://ims.goldenmindsbulacan.com/',
    technologies: [
      {
        name: 'MySQL',
        icon: mysqlIcon
      },
      {
        name: 'PHP',
        icon: phpIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'jQuery',
        icon: jqueryIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.ACADEMIC,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 6,
    title: 'Conversational Chatbot (FAQs)',
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
    githubUrl: 'https://github.com/javecilla/Conversational-Chatbot-for-FAQs',
    demoUrl: 'https://chatbot-faqs.vercel.app/',
    technologies: [
      {
        name: 'Vue.js',
        icon: vueIcon
      },
      {
        name: 'TypeScript',
        icon: tsIcon
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon
      },
      {
        name: 'Firebase',
        icon: firebaseIcon
      }
    ],
    category: ProjectCategory.PERSONAL,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 7,
    title: 'Online Account Receivables for Multi-Purpose Cooperative',
    description: `
An individual project Online Account Receivables (OAR) System for a Multi-Purpose Cooperative during my 2nd Year on Web System Technologies subject. This system streamlines the management of cooperative accounts, transactions, and financial records, enhancing efficiency and transparency.

## Key Features  
- **User-Friendly Interface**: Intuitive design for easy navigation.  
- **User Management**:
  - **Admin Panel**:
    - Add, update, and remove members.
    - Assign roles (Administrator, Member, Accountant).
    - Reset passwords and manage user credentials.
  - **Member Access**:
    - View their account balances, invoices, and payment history
    - Submit proof of payment.
- **Accounts Receivable Management**
  - **Invoice Management**:
    - Generate and send invoices to members.
    - Automate recurring invoices for periodic contributions or loans.
    - Track overdue invoices.
  - **Payment Tracking**:
    - Record payments made by members (manual and auto-reconciled via bank integration).
    - Monitor payment statuses (paid, pending, overdue).
    - Send payment reminders and notifications via email.
- **Financial Reporting**
  - **Generate reports for**:
    - Outstanding receivables by member and total.
    - Payment histories and trends.
    - Monthly, quarterly, and annual financial summaries.
- **Notifications and Alerts**
  - **Notify members of**:
    - Upcoming payment deadlines.
    - Overdue accounts.
  - **Alert administrators about overdue accounts, unusual activity, or system errors.**
- **Data Security and Backup**
  - **Role-based access control (RBAC) to restrict access.**
  - **Encrypt sensitive data (e.g., payment details).**
  - **Implement daily automated backups of the database.**
- **Additional Security**
  - **Implement CAPTCHA for form submissions to prevent automated submissions.**
  - **Implement two-factor authentication for account access.**
  - **Implement a password reset mechanism for lost passwords.**

## Development Journey  
A solo or individual project given by my professor, I developed this system to meet the requirements of the **Web System Technologies** subject.

## Technical Stack  
- **Backend**: PHP for API development and server-side logic.  
- **Frontend**: JavaScript and CSS for a responsive and interactive UI.  
- **Database**: MySQL for structured data storage and efficient retrieval.  
- **Deployment**: Hosted on a Infinity. 

This project refined my skills in **full-stack development**, particularly in designing **efficient database structures** and implementing **role-based access control**.  
`,
    image: oarsmc,
    githubUrl: 'https://github.com/javecilla/it211-project-account-receivable',
    demoUrl: 'https://avecilla-project-multipurpose.infinityfreeapp.com',
    technologies: [
      {
        name: 'MySQL',
        icon: mysqlIcon
      },
      {
        name: 'PHP',
        icon: phpIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'jQuery',
        icon: jqueryIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.ACADEMIC,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 8,
    title: 'Golden Minds Revised SIMSSHS',
    description: `I developed the Golden Minds Colleges Student Information Management System (SIMS) for Senior High School as a solo project to streamline academic operations and improve data accuracy. This platform empowers the institution with modern tools for managing student records, grades, enrollment, and scheduling.

## Problem & Solution  
The existing portal at Golden Minds Colleges was built entirely with legacy PHP code, making it difficult to maintain, scale, or extend with new features. It lacked modern architecture, resulting in frequent bugs and limited flexibility for academic operations. To address this, I redeveloped the system from the ground up using Laravel and Vue.js—creating a centralized, secure, and modular platform that supports efficient student data management, easier maintenance, and future enhancements.

## Key Features  
- **Student Records Management**: Store and manage student profiles, enrollment data, and academic history.  
- **Grading System**: Enable instructors to encode and release grades digitally with controlled access.  
- **Class Scheduling**: Build and manage class schedules with conflict detection and printable reports.  
- **Admin Dashboard**: User role-based access for managing system-wide data and activity logs.  
- **Responsive Interface**: Vue.js and Bootstrap for seamless usability across desktops and mobile devices.

## Project Timeline  
- **2020 – Initial Launch**: The original portal was developed internally by the school using raw HTML, CSS, JavaScript, and PHP. While functional, it lacked scalability, structure, and modern development standards.
- **2022 – Planning & Proposal**: I initiated a proposal to rebuild the system using a modern tech stack (Laravel + Vue.js), aiming to improve maintainability, security, and user experience.
- **2023 – System Rebuild & Expansion**: I rebuilt the platform from scratch, introducing core features such as class scheduling, user role-based access, and a more modular design. Submitted for administrative review and feedback.
- **2024 – Approval & Ongoing Development**: The revised system received approval from the administration. Continuous development is underway, focusing on stability, new features, and long-term maintainability.

## Impact  
- Reduced administrative processing time by 40% across admissions and grading workflows.  
- Increased transparency for students with 24/7 access to personal records.  
- Improved staff efficiency by consolidating core academic operations into one platform.

## Architecture  
- **Backend**: Laravel for API development, role-based authentication, and server-side validation.  
- **Frontend**: Vue.js components integrated with Tailwind for responsive UI/UX.  
- **Database**: PostgreSQL with optimized schema designs for reliable and scalable data management.  
- **Containerization**: Docker for consistent development environments and simplified deployment workflows.
- **Deployment**: Deployed on HostGator with Cloudflare support for enhanced performance and security.

This project deepened my experience in building modular and scalable systems for educational institutions. I sharpened my expertise in backend architecture with Laravel, frontend reactivity with Vue.js, and secure data modeling with PostgreSQL. I also applied version control best practices to maintain consistent progress throughout the solo development cycle.
`,
    image: goldenMindSims,
    githubUrl: 'https://github.com/javecilla/GMC-SIMSSHS-Revised',
    demoUrl: 'https://simsshs.goldenminds.edu.ph/',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: postgresIcon
      },
      {
        name: 'Laravel',
        icon: laravelIcon
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon
      },
      {
        name: 'Vue.js',
        icon: vueIcon
      },
      {
        name: 'TypeScript',
        icon: tsIcon
      },
      {
        name: 'Docker',
        icon: dockerIcon
      }
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: true,
    isRecent: false
  },
  {
    id: 9,
    title: 'Gallery Website',
    description: `Welcome to our little corner of the internet—a digital gallery that showcases moments, memories, and creations that mean the world to us.
  
  This website features visual content like images and videos, thoughtfully arranged to reflect both artistry and emotion. More than just a gallery, it’s a shared space—a canvas that holds pieces of our story.
  
  It’s filled with content inspired by me and my girlfriend—from the meaningful to the mundane—and serves as our personal archive of love, laughter, and the beautiful chaos we’ve captured together.
  
  ## Key Features
  
  #### **Aesthetic Visual Gallery**  
  - **Image and Video Display** – Organized into albums and categories.
  - **Full-Screen Viewing** – Immersive mode to enjoy every photo in detail.
  - **Mobile Responsive Design** – Seamlessly adapts across devices for consistent experience.
  
  #### **Personal Touch**  
  - **Custom Titles and Captions** – Each memory comes with a personal note or label.
  - **Themed Collections** – Albums grouped by places, seasons, or shared experiences.
  - **Editorial-Style Descriptions** – Each section tells a short story or emotion behind the moment.
  
  #### **User Interaction Features**  
  - **Soft Animations** – Subtle transitions to enhance viewing experience.
  - **Auto Scroll to Latest** – Keeps the latest uploads in focus.
  - **Pin Favorite Memories** – Highlighted posts to revisit again and again.
  
  #### **Technical Stack**  
  - **Vue.js + TypeScript** – For smooth, component-driven interactivity.
  - **Tailwind CSS** – Clean, responsive, and minimalistic design styling.
  - **Firebase** – For storage, hosting, and real-time data sync.
  
  This project isn’t just a site—it’s a space to relive the memories that shaped us. A love letter written in pixels and frames.`,
    image: galleryWeb,
    githubUrl: 'https://github.com/javecilla/04-12-2024',
    demoUrl: 'https://04122024.vercel.app/',
    technologies: [
      {
        name: 'Vue.js',
        icon: vueIcon
      },
      {
        name: 'TypeScript',
        icon: tsIcon
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon
      },
      {
        name: 'Firebase',
        icon: firebaseIcon
      }
    ],
    category: ProjectCategory.PERSONAL,
    isHighlight: false,
    isRecent: false
  },
  {
    id: 10,
    title: 'Kalat Mo, Yaman Ko',
    description: `I developed Kalat Mo, Yaman Ko, a community-driven digital platform designed to transform clutter into opportunities and strengthen local connections through sustainability.  

This platform empowers users to **share, give away, and repurpose pre-loved items**, aligning with the core principles of **Reduce, Reuse, and Recycle**. Beyond just item sharing, it’s a space built to promote **eco-conscious living** and foster a **collaborative community ecosystem**.

I was referred by my professor to join the project team as the **Frontend Developer**, where I handled the full front-end implementation—ensuring a clean, responsive, and accessible user interface. The platform also integrates an automated CI/CD pipeline for frictionless deployment and iteration.

## Key Features

#### **Community-Centered Experience**  
- **Item Sharing & Repurposing** – Users can give away or claim pre-loved items.  
- **Eco-Sustainability Focus** – Encourages reducing waste through community engagement.  
- **Intuitive Navigation** – Simple, guided flow for ease of use.  

#### **Frontend Development Excellence**  
- **Responsive Web Design** – Optimized for both desktop and mobile experiences.  
- **Lightweight & Fast UI** – Prioritizing performance and accessibility.  
- **Clean Visual Hierarchy** – Organized content that aligns with sustainability goals.

#### **CI/CD & Automation**  
- **GitHub Auto-Deployment** – Every push to the main branch triggers live updates.  
- **Continuous Integration** – Smooth release cycles for fast iteration.  
- **Scalable Codebase** – Structured for future feature rollouts.

This project reflects a **fusion of sustainable innovation and clean frontend engineering**—a platform built to inspire communities to **turn clutter into collective value**.`,
    image: kmykSystem,
    githubUrl: 'https://github.com/javecilla/Kalat-Mo-Yaman-Ko',
    demoUrl: 'https://website-079a545a.fee.xnf.temporary.site/',
    technologies: [
      {
        name: 'HTML',
        icon: htmlIcon
      },
      {
        name: 'CSS',
        icon: cssIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ],
    category: ProjectCategory.CLIENT,
    isHighlight: false,
    isRecent: true
  },
  {
    id: 11,
    title: 'Clinic Information System for Dr. Pau Animal Bite Center',
    description: `This project CIS for Dr. Pau Animal Bite Center is a web application developed to accomplish the requirements of the IT 305W - Advance Web Application a group project and i am team leader and developer of the project.

## About the Project
The **Clinic Information System** is designed to solve a common problem for medical clinics: the inefficient and decentralized management of patient records and appointments. This initial version focuses on the core **Patient Management Module**, which allows patients to register, log in, and book their own appointments online, while also empowering clinic staff to manage walk-in patients and view the daily appointment schedule.

The application utilizes the **Create, Read, Update & Delete (CRUD)** method for all data operations, with all information securely stored and managed using **Firebase** services as required by the project specifications.

## Key Features

#### **Patient Portal**
- **Secure Authentication** – User registration with email verification and login using Firebase Authentication.
- **Personal Dashboard** – View profile information and appointment history.
- **Appointment Booking** – A multi-step form to book new appointments for either a New Bite Incident or a Follow-up/General Consultation.

#### **Staff Portal**
- **Daily Appointments** – A comprehensive dashboard displaying the list of patient appointments for the day.
- **Patient Search** – Functionality to search for existing patients.
- **Walk-in Registration** – A dedicated form for staff to register walk-in patients directly.

## Technologies Used
This project is built using modern web technologies to ensure a responsive, efficient, and scalable application.

- **Front-End Framework**: ReactJS (with Functional Components and Hooks)
- **Styling**: Bootstrap
- **Icons**: Font Awesome
- **Backend as a Service (BaaS)**: Firebase
- **Authentication**: Firebase Authentication for user registration and login.
- **Database**: Firebase Realtime Database to store and manage all application data.
- **Storage**: Firebase Storage for user profile pictures.
- **Hosting**: Firebase Hosting for final deployment.
- **Google ReCAPTCHA**: reCAPTCHA v2 (Checkbox) for client-side anti-bot verification on sensitive forms.
- **Email Service**: EmailJS for sending email notifications.`,
    image: drpauSystem,
    githubUrl: 'https://github.com/javecilla/CIS-AWA-BSIT3EG1-PROJECT',
    demoUrl: 'https://cis-awa-bsit3eg1-project.web.app/',
    technologies: [
      {
        name: 'HTML',
        icon: htmlIcon
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon
      },
      {
        name: 'React',
        icon: reactIcon
      },
      {
        name: 'Firebase',
        icon: firebaseIcon
      }
    ],
    category: ProjectCategory.ACADEMIC,
    isHighlight: false,
    isRecent: true
  }
] as const

export const categories: readonly ProjectCategoryItem[] = [
  { id: 'highlights' as const, label: 'Highlights' },
  { id: 'recent' as const, label: 'Recent' },
  { id: 'all' as const, label: 'All Projects' },
  { id: ProjectCategory.ACADEMIC, label: 'Academic' },
  { id: ProjectCategory.PERSONAL, label: 'Personal' },
  { id: ProjectCategory.CLIENT, label: 'Client' }
] as const
