export interface ProductFeature {
  title: string;
  desc: string;
}

export interface UserStep {
  step: string;
  title: string;
  desc: string;
}

export interface Microsoft365Product {
  name: string;
  slug: string;
  category: 'Core Apps' | 'Collaboration' | 'Productivity' | 'Business Tools' | 'Power Platform & AI';
  description: string;
  tagline: string;
  iconName: string;
  color: string;
  platforms: ('Web' | 'Desktop' | 'Mobile')[];
  overview: string;
  useCases: string[];
  howItWorks: string[];
  features: ProductFeature[];
  webAccess: string;
  installation: string[];
  newUserGuide: UserStep[];
  existingUserGuide: UserStep[];
  relatedProducts: string[];
}

export const microsoft365Products: Microsoft365Product[] = [
  {
    name: 'Microsoft Word',
    slug: 'word',
    category: 'Core Apps',
    description: 'Create professional documents, write essays, design newsletters, and collaborate in real-time.',
    tagline: 'Write, edit, and collaborate on documents with ease.',
    iconName: 'FileText',
    color: '#2b579a',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Word is the industry-standard word processing software designed to help you create, edit, and share high-quality documents. It features advanced typography, spelling and grammar diagnostics, and premium design layouts.',
    useCases: [
      'Writing resumes and cover letters',
      'Creating business reports and proposals',
      'Designing brochures, flyers, and newsletter sheets',
      'Drafting essays and educational papers',
      'Co-authoring documents synchronously with remote team members'
    ],
    howItWorks: [
      'Create a new document from a blank sheet or pre-built design template.',
      'Draft and format your copy using modern fonts, alignments, and custom themes.',
      'Insert tables, graphics, headers, and reference footnotes.',
      'Review and refine text with real-time editorial suggestions.',
      'Share the document link to co-author with others, or export as PDF/DOCX.'
    ],
    features: [
      { title: 'Editor AI Guide', desc: 'Advanced grammar checks, style refinements, and vocabulary suggestions to elevate your writing.' },
      { title: 'Real-time Co-Authoring', desc: 'Work with your team concurrently on the same document with live cursor indicators and threads.' },
      { title: 'Rich Templates Library', desc: 'Start quickly with thousands of professionally styled templates for resumes, reports, and brochures.' },
      { title: 'PDF Reflow & Editing', desc: 'Open PDF documents directly within Word, convert them to editable text, and save back to PDF format.' }
    ],
    webAccess: 'Open your web browser, navigate to office.com, sign in with your account credentials, select Word, and click "New blank document" to begin editing.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com.',
      'Select "Install Microsoft 365 Apps" on your profile dashboard.',
      'Locate and execute the downloaded setup installer.',
      'Wait for the automated installation suite to compile.',
      'Launch Microsoft Word from your start menu, log in, and begin drafting.'
    ],
    newUserGuide: [
      { step: '01', title: 'Register Account', desc: 'Create a free personal Microsoft account or configure corporate access credentials.' },
      { step: '02', title: 'Verify Address', desc: 'Authenticate your email address using the multi-digit security code received.' },
      { step: '03', title: 'Login & Access Portal', desc: 'Sign in to the central dashboard at office.com to view all available productivity tools.' },
      { step: '04', title: 'Select Word App', desc: 'Click the Word icon to initialize your cloud workspace and start a blank document.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch App/Site', desc: 'Open your installed Word application or navigate to the web version at office.com.' },
      { step: '02', title: 'Provide Credentials', desc: 'Input your existing Microsoft or work/school credentials to verify your license.' },
      { step: '03', title: 'Load Documents', desc: 'Access your cloud documents immediately from the "Recent Files" list.' }
    ],
    relatedProducts: ['excel', 'powerpoint', 'onedrive', 'outlook']
  },
  {
    name: 'Microsoft Excel',
    slug: 'excel',
    category: 'Core Apps',
    description: 'Organize, analyze, and visualize data using spreadsheets, formulas, and PivotTables.',
    tagline: 'Track budgets, analyze charts, and build data sheets.',
    iconName: 'FileSpreadsheet',
    color: '#107c41',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Excel is a powerful spreadsheet application that allows users to organize structured tables, execute mathematical formulas, generate dynamic charts, and build deep pivot calculations.',
    useCases: [
      'Creating monthly personal and business budgets',
      'Analyzing numerical databases with formula models',
      'Plotting visual charts, trendlines, and scatter diagrams',
      'Building PivotTables for fast corporate metrics extraction',
      'Tracking project timelines and task logs'
    ],
    howItWorks: [
      'Open a workbook and organize metrics into cells across rows and columns.',
      'Apply computational formulas (e.g. SUM, VLOOKUP, or XLOOKUP) to execute calculations.',
      'Style rows with borders, custom colors, and conditional highlights.',
      'Generate dynamic charts from selected cells to visually show trends.',
      'Save the workbook to OneDrive for instant sharing and secure collaboration.'
    ],
    features: [
      { title: 'Formula Builder Engine', desc: 'Access hundreds of calculations, lookup functions, logical conditions, and custom financial models.' },
      { title: 'PivotTables & Charts', desc: 'Summarize complex, massive lists of records into actionable visual reports with a few clicks.' },
      { title: 'Conditional Formatting', desc: 'Automatically apply color scales, data bars, and icons to highlight trends and anomalies.' },
      { title: 'Power Query & Data Connect', desc: 'Import, filter, and shape data from multiple external sources like SQL, web APIs, or CSV files.' }
    ],
    webAccess: 'Log in to office.com, click on the Excel icon in the left-hand navigation panel, and launch a new workbook directly in your browser.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com.',
      'Select "Install Microsoft 365 Apps" on your profile dashboard.',
      'Locate and execute the downloaded setup installer.',
      'Wait for the automated installation suite to compile.',
      'Launch Microsoft Excel, sign in, and create your first workbook.'
    ],
    newUserGuide: [
      { step: '01', title: 'Register Account', desc: 'Register a Microsoft account using your email or configure corporate tenant access.' },
      { step: '02', title: 'Select Excel Web', desc: 'Open office.com, select Excel, and launch a blank workbook to test the basic grid interface.' },
      { step: '03', title: 'Input Simple Data', desc: 'Enter basic columns, try out a simple "=SUM(A1:A10)" calculation, and check output.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Excel Client', desc: 'Launch Excel from your system dock or browse to office.com/excel.' },
      { step: '02', title: 'Link Account', desc: 'Sign in to access worksheets synced to OneDrive.' },
      { step: '03', title: 'Resume Sheet Editing', desc: 'Pick up where you left off from recent worksheets.' }
    ],
    relatedProducts: ['word', 'powerpoint', 'onedrive', 'lists']
  },
  {
    name: 'Microsoft PowerPoint',
    slug: 'powerpoint',
    category: 'Core Apps',
    description: 'Design beautiful, professional slide decks for meetings, lectures, and sales pitches.',
    tagline: 'Deliver engaging, cinematic slide show presentations.',
    iconName: 'Presentation',
    color: '#d83b01',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft PowerPoint is a feature-rich presentation tool used to design slide decks, integrate multimedia, and deliver reports to teams, classrooms, or large audiences.',
    useCases: [
      'Creating sales decks and marketing presentations',
      'Designing educational lectures and student reports',
      'Building quarterly business reviews and company decks',
      'Delivering webinars with screen-sharing and speaking notes',
      'Animating workflows and visual graphics'
    ],
    howItWorks: [
      'Select a presentation template or build slides from a blank layout.',
      'Insert text blocks, bullet points, diagrams, images, and videos.',
      'Apply dynamic slide transitions (like Morph) and object entrance animations.',
      'Use Presenter View to view speaker notes and timers while presenting.',
      'Share slide decks for concurrent co-authoring.'
    ],
    features: [
      { title: 'Morph Transition Tool', desc: 'Automatically animate object shapes, positions, and colors across slides with zero configuration.' },
      { title: 'Presenter Coach Mode', desc: 'Practice your presentation and get real-time audio pacing feedback and filler-word diagnostics.' },
      { title: 'Designer Layout Suggest', desc: 'Let AI scan your slide text to automatically generate styled layouts, icons, and themes.' },
      { title: 'Co-Authoring Threads', desc: 'Leave slide comments, tag teammates with @mentions, and review deck histories together.' }
    ],
    webAccess: 'Navigate to office.com, log in, click PowerPoint in the left panel, and click "New presentation" to start building slides.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com.',
      'Select "Install Microsoft 365 Apps" on your profile dashboard.',
      'Locate and execute the downloaded setup installer.',
      'Wait for the automated installation suite to compile.',
      'Launch PowerPoint, log in to authenticate, and start your slides.'
    ],
    newUserGuide: [
      { step: '01', title: 'Set Up Account', desc: 'Create a new Microsoft profile to host your documents and sync settings.' },
      { step: '02', title: 'Launch PowerPoint Web', desc: 'Go to office.com, open the PowerPoint app, and choose a starting slide layout.' },
      { step: '03', title: 'Select Designer theme', desc: 'Add slide title text and click "Designer" to let AI suggest beautiful themes.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch Presentation Client', desc: 'Open installed PowerPoint or log into your corporate portal.' },
      { step: '02', title: 'Verify User License', desc: 'Ensure your account has access to the full PowerPoint suite.' },
      { step: '03', title: 'Open Recent Deck', desc: 'Load synced slides from your recent presentations list.' }
    ],
    relatedProducts: ['word', 'excel', 'onedrive', 'teams']
  },
  {
    name: 'Microsoft Outlook',
    slug: 'outlook',
    category: 'Core Apps',
    description: 'Manage your professional emails, schedule meetings on shared calendars, and sync your contact directories.',
    tagline: 'Streamline your emails, calendar, and task management.',
    iconName: 'Mail',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Outlook is an enterprise-grade email client and personal information manager. It aggregates emails, shared calendars, scheduling assistants, and contacts into a single workflow.',
    useCases: [
      'Reading and organizing professional email threads',
      'Booking meetings and rooms with shared calendars',
      'Managing user contact directories and mailing lists',
      'Organizing daily schedules with task flags and reminders',
      'Scheduling automatic "Out of Office" auto-responders'
    ],
    howItWorks: [
      'Configure your email address (Exchange, IMAP, or Outlook.com).',
      'Receive, filter, search, and categorize email messages.',
      'Access the calendar to schedule meetings, invite attendees, and coordinate rooms.',
      'Add reminders, flags, and categories to track critical emails.',
      'Create rules to automatically filter incoming mail into specific folders.'
    ],
    features: [
      { title: 'Focused Inbox View', desc: 'Automatically filters critical messages into "Focused" and general notifications into "Other".' },
      { title: 'Shared Calendars Scheduler', desc: 'View calendar schedules side-by-side to find open meeting slots for multiple team members.' },
      { title: 'Integrated Task Board', desc: 'Flag email messages to automatically convert them to task checklist items in your task board.' },
      { title: 'Enterprise Access Security', desc: 'Advanced protection against phishing scams, malware links, and data loss.' }
    ],
    webAccess: 'Open your web browser, navigate to outlook.com or office.com/mail, and sign in with your email address to access your inbox.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com.',
      'Select "Install Microsoft 365 Apps" on your profile dashboard.',
      'Locate and execute the downloaded setup installer.',
      'Wait for the automated installation suite to compile.',
      'Launch Outlook, input your corporate/personal email address, and sync your inbox.'
    ],
    newUserGuide: [
      { step: '01', title: 'Create Email Address', desc: 'Register a free outlook.com account or use your corporate Exchange email.' },
      { step: '02', title: 'Navigate to Outlook Web', desc: 'Access your mailbox from any browser at outlook.live.com.' },
      { step: '03', title: 'Configure Profile', desc: 'Set up your signature, theme preferences, and focused inbox settings.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch Outlook App', desc: 'Open Outlook on your PC or mobile, or log into office.com/mail.' },
      { step: '02', title: 'Re-authenticate Credentials', desc: 'Sync your folders and calendar events by logging in.' },
      { step: '03', title: 'Access Inbox', desc: 'Continue reading and managing your emails and meeting invites.' }
    ],
    relatedProducts: ['teams', 'todo', 'planner', 'onedrive']
  },
  {
    name: 'Microsoft OneNote',
    slug: 'onenote',
    category: 'Core Apps',
    description: 'Capture ideas, organize structured notebooks, insert web clippings, and draw sketches on an infinite canvas.',
    tagline: 'Your digital notebook for capturing and organizing ideas.',
    iconName: 'Notebook',
    color: '#80397b',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft OneNote is a digital note-taking application that mimics a physical notebook. It features section tabs, page lists, and an infinite canvas to draw, write, type text, and embed media.',
    useCases: [
      'Taking note pages during lectures or meetings',
      'Clipping web articles, screenshots, and references',
      'Organizing cookbook recipe lists or trip itineraries',
      'Sketching design ideas and brainstorm boards with stylus pens',
      'Sharing team notebooks for shared reference materials'
    ],
    howItWorks: [
      'Create a notebook and organize it with colored sections and pages.',
      'Type anywhere on the page, drag blocks, or sketch with pen tools.',
      'Insert images, audio recordings, files, and links.',
      'Use tag boxes (e.g. To Do, Star, Question) to flag key content.',
      'Sync notebooks to OneDrive to access them from all devices.'
    ],
    features: [
      { title: 'Infinite Canvas Workspace', desc: 'Type, sketch, or drag media anywhere on the screen without grid layout constraints.' },
      { title: 'Notebook Sections Organization', desc: 'Organize notes with structured levels (Notebooks → Section Groups → Sections → Pages).' },
      { title: 'Ink to Text Conversion', desc: 'Handwrite notes using a stylus and convert them into digital text with a single tap.' },
      { title: 'Web Clipper Extension', desc: 'Save entire articles, recipe blogs, or selected screenshots from your browser directly to your notes.' }
    ],
    webAccess: 'Go to office.com, sign in with your Microsoft account, click on OneNote, and select or create a synced notebook.',
    installation: [
      'OneNote is free for everyone. Download it from the Windows Store, Mac App Store, or todo.microsoft.com.',
      'Execute the downloaded installer package.',
      'Once complete, launch OneNote from your desktop shortcut.',
      'Sign in with your Microsoft account to load and sync your notebooks.'
    ],
    newUserGuide: [
      { step: '01', title: 'Get Microsoft ID', desc: 'Obtain a free Microsoft account to host your note data in the cloud.' },
      { step: '02', title: 'Launch OneNote Web', desc: 'Navigate to onenote.com, sign in, and create your first Notebook.' },
      { step: '03', title: 'Add Section & Page', desc: 'Add a section tab (e.g. "Work Notes") and write your first page.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch OneNote client', desc: 'Open OneNote on your device or access it online at onenote.com.' },
      { step: '02', title: 'Sync Notes via Login', desc: 'Log in to pull down your notebooks.' },
      { step: '03', title: 'Resume Brainstorming', desc: 'Search notes using keywords across all notebooks.' }
    ],
    relatedProducts: ['word', 'todo', 'onedrive', 'copilot']
  },
  {
    name: 'Microsoft Access',
    slug: 'access',
    category: 'Core Apps',
    description: 'Build local databases, design relational tables, and create custom entry forms for desktop applications.',
    tagline: 'Create custom database applications for PC desktop management.',
    iconName: 'Database',
    color: '#a3000b',
    platforms: ['Desktop'],
    overview: 'Microsoft Access is a desktop-only relational database management system. It combines a database engine with a graphical user interface and software-development tools.',
    useCases: [
      'Building small-business relational database applications',
      'Designing custom forms for structured data entry',
      'Generating complex PDF reporting summaries from tables',
      'Developing offline data records systems',
      'Running SQL queries across locally linked tables'
    ],
    howItWorks: [
      'Create a database file (.accdb) and design database tables.',
      'Configure table relationships (One-to-Many, Many-to-Many).',
      'Build drag-and-drop Data Entry Forms to simplify records input.',
      'Construct queries using the visual query designer or SQL code.',
      'Design reports for printing or PDF exports.'
    ],
    features: [
      { title: 'Relational Database Engine', desc: 'Define table schemas with relationships and referential integrity.' },
      { title: 'Visual Form Builder', desc: 'Create custom graphical user interfaces for database entry without writing code.' },
      { title: 'SQL Query Designer', desc: 'Write SQL commands or use the visual drag-and-drop tool to filter and join data tables.' },
      { title: 'Printable PDF Reports', desc: 'Design professional summary layouts, group data, and print or export records.' }
    ],
    webAccess: 'Microsoft Access is a legacy desktop application for Windows PCs only. It does not have a web browser version.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com (requires a Windows PC).',
      'Ensure your plan includes Access (e.g. Microsoft 365 Business or Professional).',
      'Click "Install Microsoft 365 Apps" to download the installer suite.',
      'Execute the installer and wait for setup to complete.',
      'Launch Access from the start menu to begin building databases.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify Windows OS', desc: 'Ensure you are using a Windows PC, as Access is not compatible with macOS or mobile.' },
      { step: '02', title: 'Verify active License', desc: 'Ensure your Microsoft 365 account includes desktop access to Microsoft Access.' },
      { step: '03', title: 'Open Access Client', desc: 'Launch Access, click "Blank database", name your database file, and click create.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Access PC app', desc: 'Launch Microsoft Access on your Windows workstation.' },
      { step: '02', title: 'Select local Database', desc: 'Browse to load your local .accdb database files.' },
      { step: '03', title: 'Run Query Forms', desc: 'Access your database forms to input data or run reports.' }
    ],
    relatedProducts: ['excel', 'lists', 'sharepoint', 'onedrive']
  },
  {
    name: 'OneDrive',
    slug: 'onedrive',
    category: 'Collaboration',
    description: 'Securely store files in the cloud, access them from any device, and share folders with teammates.',
    tagline: 'Access, share, and back up your files from anywhere.',
    iconName: 'Cloud',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'OneDrive is Microsoft cloud storage service. It enables users to securely back up files, sync folders across devices, and share document links with colleagues or external partners.',
    useCases: [
      'Backing up system Desktop, Documents, and Pictures folders',
      'Accessing personal files from any browser or mobile app',
      'Sharing large file links with friends or work clients',
      'Reverting files to earlier versions using File Version History',
      'Syncing document changes to enable live co-authoring'
    ],
    howItWorks: [
      'Save documents directly to your OneDrive folder on your PC.',
      'Files automatically sync to the cloud when connected to the internet.',
      'Share links with view-only or editable permissions.',
      'Access files remotely by browsing to onedrive.com.',
      'Use File Version History to restore documents from previous saves.'
    ],
    features: [
      { title: 'Files On-Demand Sync', desc: 'Access cloud files from Windows Explorer or Mac Finder without downloading them first, saving local storage.' },
      { title: 'File Version History', desc: 'View, compare, and restore historical versions of files to easily recover from mistakes.' },
      { title: 'Personal Vault Locker', desc: 'A protected storage folder requiring two-step verification to safeguard sensitive documents.' },
      { title: 'Secure Link Sharing', desc: 'Generate links with password protection, custom expiration dates, and restricted download access.' }
    ],
    webAccess: 'Open your web browser, navigate to onedrive.com or office.com/onedrive, and log in with your email address to manage your files.',
    installation: [
      'OneDrive is pre-installed on Windows. For Mac, download it from account.microsoft.com or the Mac App Store.',
      'Run the setup and input your Microsoft credentials.',
      'Choose the local folder location for your synced files.',
      'Select which cloud folders should sync to your device, and click finish.'
    ],
    newUserGuide: [
      { step: '01', title: 'Register Account', desc: 'Register a Microsoft ID to secure 5GB of free storage (expandable with subscription).' },
      { step: '02', title: 'Open OneDrive Web', desc: 'Go to onedrive.com to view your default folders.' },
      { step: '03', title: 'Upload First File', desc: 'Drag and drop a file into your browser window to test cloud storage.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open OneDrive Client', desc: 'Ensure the OneDrive sync client is active in your system tray.' },
      { step: '02', title: 'Sign In Account', desc: 'Provide credentials to verify your storage allocation.' },
      { step: '03', title: 'Access Cloud Folders', desc: 'Open your local OneDrive directory in file explorer to view synced files.' }
    ],
    relatedProducts: ['word', 'excel', 'powerpoint', 'sharepoint']
  },
  {
    name: 'Microsoft Teams',
    slug: 'teams',
    category: 'Collaboration',
    description: 'Host video meetings, chat in structured channels, share files, and integrate project apps in a central hub.',
    tagline: 'The ultimate chat, meeting, and collaboration workspace.',
    iconName: 'Users',
    color: '#6264a7',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Teams is a unified communication and collaboration platform. It combines persistent workplace chat, video meetings, file storage, and application integration into one application.',
    useCases: [
      'Hosting online video calls, meetings, and screen-sharing sessions',
      'Chatting with team members in organized department channels',
      'Co-authoring files stored on SharePoint without exiting Teams',
      'Creating chat threads with remote business partners',
      'Automating workflows by integrating project management apps'
    ],
    howItWorks: [
      'Create or join a workspace Org, and invite team members.',
      'Organize channels (e.g., General, Marketing, Development) for specific topics.',
      'Post chat updates, tag team members with @mentions, and share files.',
      'Start instant video calls, or schedule meetings on your calendar.',
      'Add custom tabs (e.g. Planner, Excel sheets) to channel tabs.'
    ],
    features: [
      { title: 'Organized Channels Threads', desc: 'Keep conversation histories clean and focused with structured channel topics and message replies.' },
      { title: 'HD Video Meetings', desc: 'Host video calls with custom background blurs, breakout rooms, live transcripts, and whiteboard panels.' },
      { title: 'SharePoint File Sync', desc: 'Every file shared in Teams is stored in SharePoint for secure, concurrent co-authoring.' },
      { title: 'Third-Party App Tabs', desc: 'Integrate tools like Planner, Jira, GitHub, or Excel directly as tabs within chat channels.' }
    ],
    webAccess: 'Open your web browser, navigate to teams.microsoft.com or office.com/teams, and sign in with your email address to access your channels.',
    installation: [
      'Download Teams desktop client from microsoft.com/teams/download-app.',
      'Execute the downloaded installer file.',
      'Wait for the installation setup window to complete.',
      'Launch Teams, sign in with your work, school, or personal credentials, and join your workspace.'
    ],
    newUserGuide: [
      { step: '01', title: 'Get Account credentials', desc: 'Set up your account or verify invite credentials sent by your workspace administrator.' },
      { step: '02', title: 'Log in to Teams Web', desc: 'Navigate to teams.microsoft.com in a web browser to test channels.' },
      { step: '03', title: 'Set Up Avatar & Profile', desc: 'Add a profile photo, adjust notification settings, and set your status.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Teams app', desc: 'Launch Teams on your system start dock or go to teams.microsoft.com.' },
      { step: '02', title: 'Authenticate User', desc: 'Sign in to access your organizations.' },
      { step: '03', title: 'Check Mentions & Chats', desc: 'Review your activity feed for unread mentions, chats, and channel replies.' }
    ],
    relatedProducts: ['outlook', 'onedrive', 'sharepoint', 'planner']
  },
  {
    name: 'SharePoint',
    slug: 'sharepoint',
    category: 'Collaboration',
    description: 'Build enterprise intranet sites, organize document libraries, and share resources across department portals.',
    tagline: 'Collaborate and manage documents on secure intranet sites.',
    iconName: 'Globe',
    color: '#0072c6',
    platforms: ['Web', 'Mobile'],
    overview: 'SharePoint is an enterprise-grade document management and intranet collaboration platform. It allows organizations to build web portals, manage file libraries, and share company announcements.',
    useCases: [
      'Hosting corporate intranet home pages for company news',
      'Creating secure document repositories for departments',
      'Configuring complex workflows with automated approvals',
      'Publishing official company policies and resources',
      'Organizing records database sheets for corporate teams'
    ],
    howItWorks: [
      'An administrator creates a SharePoint Team or Communication Site.',
      'Teams upload documents to structured SharePoint Document Libraries.',
      'Configure metadata columns to tag and filter records.',
      'Edit site pages with web widgets for announcements and calendars.',
      'Sync files locally using the OneDrive sync engine.'
    ],
    features: [
      { title: 'Document Libraries', desc: 'Structured file systems with custom metadata columns, checking-out controls, and strict access permissions.' },
      { title: 'Corporate Intranets', desc: 'Build company portals using pre-built web widgets for announcements, quick links, and organization charts.' },
      { title: 'Power Automate Workflows', desc: 'Connect SharePoint to automate tasks like document approvals, email alerts, or archiving.' },
      { title: 'Granular Group Permissions', desc: 'Restrict document folders to specific teams (e.g. Finance, HR) with Active Directory groups.' }
    ],
    webAccess: 'Navigate to office.com, sign in with your corporate tenant email, and click on the SharePoint icon to view your company sites.',
    installation: [
      'SharePoint is a cloud platform and does not require a local client installation. Intranet sites and file folders are accessed via web browsers or through the SharePoint Mobile application.'
    ],
    newUserGuide: [
      { step: '01', title: 'Receive Org Invites', desc: 'Obtain corporate email credentials or workspace tenant access.' },
      { step: '02', title: 'Open SharePoint Portal', desc: 'Access your corporate SharePoint landing page at office.com.' },
      { step: '03', title: 'Follow Team Sites', desc: 'Click "Follow" on key department sites to pins them to your dashboard.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Site Portal', desc: 'Open your web browser and navigate to your corporate SharePoint site link.' },
      { step: '02', title: 'Log in with Office ID', desc: 'Provide your credentials to verify access permissions.' },
      { step: '03', title: 'Access Libraries', desc: 'Locate department document folders or corporate dashboards.' }
    ],
    relatedProducts: ['teams', 'onedrive', 'planner', 'lists']
  },
  {
    name: 'Microsoft Loop',
    slug: 'loop',
    category: 'Collaboration',
    description: 'Co-create ideas, compile resources, and sync dynamic loop components that remain updated across Teams, Outlook, and Word.',
    tagline: 'Flexible workspaces with components that stay in sync.',
    iconName: 'Notebook',
    color: '#0078d4',
    platforms: ['Web', 'Mobile', 'Desktop'],
    overview: 'Microsoft Loop is a transformative co-creation application that brings together teams, content, and tasks across your tools and devices. It features Loop Workspaces, Loop Pages, and Loop Components that sync instantly in real-time.',
    useCases: [
      'Brainstorming project outlines as a group concurrently',
      'Embedding real-time voting tables in Outlook emails and Teams chats',
      'Compiling wiki reference documentation for developers',
      'Tracking shared team action lists across platforms',
      'Documenting product ideas with interactive canvasses'
    ],
    howItWorks: [
      'Create a shared Loop Workspace and configure sub-pages.',
      'Type text, insert tables, checklists, or progress trackers.',
      'Turn any page block into a live Loop Component.',
      'Share the component link and paste it into Outlook or Teams.',
      'Watch components update in real-time across all application windows.'
    ],
    features: [
      { title: 'Synced Loop Components', desc: 'Turn tables, bullet lists, or task boards into live items that stay updated wherever they are shared.' },
      { title: 'Flexible Workspaces', desc: 'Gather all project assets—documents, files, links, and notes—into a single workspace portal.' },
      { title: 'Workspace Ideas Page', desc: 'Start with a clean canvas to capture thoughts, insert templates, and brainstorm ideas before publishing.' },
      { title: 'Real-time Live Chatting', desc: 'React, comment, and collaborate with inline emoji responses and comment threads.' }
    ],
    webAccess: 'Navigate to loop.microsoft.com or office.com/loop, sign in, and launch a new Loop workspace in your web browser.',
    installation: [
      'Microsoft Loop desktop client is available for Windows and macOS via loop.microsoft.com or the Microsoft Store.',
      'Execute the installer setup.',
      'Sign in with your Microsoft account to authenticate and load workspaces.'
    ],
    newUserGuide: [
      { step: '01', title: 'Account Verification', desc: 'Register a Microsoft ID or access via your corporate active tenant.' },
      { step: '02', title: 'Launch Loop Web', desc: 'Open loop.microsoft.com to initialize your Loop dashboard.' },
      { step: '03', title: 'Create Work Space', desc: 'Click the "+" button to launch a Workspace, name it, and add teammates.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Loop App', desc: 'Launch Loop on your PC, mobile, or log into loop.microsoft.com.' },
      { step: '02', title: 'Authenticate User', desc: 'Sign in to fetch synced workspaces.' },
      { step: '03', title: 'Inspect Live Components', desc: 'Load active components to monitor real-time updates.' }
    ],
    relatedProducts: ['teams', 'outlook', 'onedrive', 'todo']
  },
  {
    name: 'Microsoft Viva',
    slug: 'viva',
    category: 'Collaboration',
    description: 'Ecosystem designed to unify communications, knowledge resources, insights, and goal tracking within Teams.',
    tagline: 'Supercharge workplace culture, connection, and growth.',
    iconName: 'Sparkles',
    color: '#0078d4',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Viva is an employee experience platform built within Microsoft Teams and Microsoft 365. It integrates communications, learning, resources, and insights into work flows to foster employee growth and productivity.',
    useCases: [
      'Accessing corporate news bulletins inside Teams',
      'Tracking personal focus times and workflow insights',
      'Aggregating learning paths from LinkedIn Learning or corporate modules',
      'Mapping organizational objectives and key results (OKRs)',
      'Sharing knowledge articles across organizational hubs'
    ],
    howItWorks: [
      'Log into Microsoft Teams and add the Microsoft Viva suite tabs.',
      'Viva Connections pulls corporate news feeds onto your dashboard.',
      'Viva Insights provides statistics on your workspace patterns and focus blocks.',
      'Viva Learning centralizes course modules and tracks training.',
      'Viva Goals structures your team OKRs and aligns focus.'
    ],
    features: [
      { title: 'Viva Connections News', desc: 'A personalized intranet dashboard delivering curated organization news, resources, and conversations.' },
      { title: 'Viva Insights Analytics', desc: 'Confidential productivity insights helping you block focus hours, schedule breaks, and prevent burnout.' },
      { title: 'Viva Learning Portal', desc: 'Centralize training modules from Microsoft Learn, LinkedIn Learning, and custom LMS platforms.' },
      { title: 'Viva Goals OKRs', desc: 'Align your teams with company strategic priorities and track key business goals in real-time.' }
    ],
    webAccess: 'Log into office.com with corporate enterprise credentials, and access the Viva apps through the Microsoft Teams web portal or dedicated portal pages.',
    installation: [
      'Microsoft Viva is integrated directly as modules within Microsoft Teams. It does not require separate client software installation.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify Enterprise Plan', desc: 'Ensure your school or work account includes Viva permissions.' },
      { step: '02', title: 'Open Teams Platform', desc: 'Log in to Microsoft Teams to host Viva portals.' },
      { step: '03', title: 'Add Viva apps', desc: 'Click "Apps" in Teams, search "Viva", and pin the modules to your sidebar.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Teams client', desc: 'Launch Teams on your PC, mobile, or open Teams Web.' },
      { step: '02', title: 'Select Viva Sidebar', desc: 'Click on Viva Insights, Connections, or Learning in the sidebar.' },
      { step: '03', title: 'Access Dashboard', desc: 'Review focus calendars, OKRs, or personal learning courses.' }
    ],
    relatedProducts: ['teams', 'sharepoint', 'planner', 'todo']
  },
  {
    name: 'Microsoft To Do',
    slug: 'todo',
    category: 'Productivity',
    description: 'Organize your daily tasks, set reminders, categorize lists, and sync flagged emails in a clean app.',
    tagline: 'Keep track of your daily tasks and focus on what matters.',
    iconName: 'CheckSquare',
    color: '#34383c',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft To Do is a lightweight task management application. It features a "My Day" dashboard, task lists, and reminders to help you organize your daily work.',
    useCases: [
      'Creating daily task checklists',
      'Setting reminders for deadlines',
      'Importing flagged email tasks from Outlook',
      'Sharing shopping or project checklists with family/teammates',
      'Structuring large tasks into smaller step-checklists'
    ],
    howItWorks: [
      'Create lists (e.g., Work, Personal, Shopping) to organize tasks.',
      'Add items to lists, and set due dates and reminders.',
      'Add items to the "My Day" view to build your daily focus list.',
      'Break tasks down by adding sub-steps, notes, and file attachments.',
      'Sync across mobile and desktop to track tasks on the go.'
    ],
    features: [
      { title: 'My Day Planner Dashboard', desc: 'A clean slate every morning that suggests tasks based on upcoming deadlines to build your focus list.' },
      { title: 'Outlook Flagged Mail Sync', desc: 'Flag email messages in Outlook to automatically sync them to your To Do inbox.' },
      { title: 'Shared Task Collaborator', desc: 'Invite family, friends, or work colleagues to share task lists and collaborate on checklists.' },
      { title: 'Sub-Step Breakdowns', desc: 'Add step lists, due date alerts, attachments, and notes to break down large tasks.' }
    ],
    webAccess: 'Open your web browser, navigate to todo.microsoft.com or office.com/todo, and log in with your email address to access your lists.',
    installation: [
      'Download To Do desktop app from Windows Store, Mac App Store, or todo.microsoft.com.',
      'Execute the downloaded installer suite.',
      'Once complete, launch the app from your desktop shortcut.',
      'Sign in with your Microsoft account to load and sync your task lists.'
    ],
    newUserGuide: [
      { step: '01', title: 'Create Microsoft account', desc: 'Register a Microsoft ID to host your task lists in the cloud.' },
      { step: '02', title: 'Open To Do Web', desc: 'Go to todo.microsoft.com to view your default task inbox.' },
      { step: '03', title: 'Add First Task', desc: 'Type a task in the "My Day" input box to start tracking tasks.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch To Do client', desc: 'Open To Do on your PC, mobile, or log into todo.microsoft.com.' },
      { step: '02', title: 'Sync Task Databases', desc: 'Log in to pull down your list directories.' },
      { step: '03', title: 'Review Daily List', desc: 'Check off completed items or review overdue items in the sidebar.' }
    ],
    relatedProducts: ['outlook', 'planner', 'lists', 'teams']
  },
  {
    name: 'Microsoft Planner',
    slug: 'planner',
    category: 'Productivity',
    description: 'Organize team projects using visual Kanban boards, track task progression, and assign duties.',
    tagline: 'Collaborate on team tasks and project boards.',
    iconName: 'Kanban',
    color: '#31752f',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Planner is a visual task management tool built for teams. It uses Kanban boards to help teams organize project tasks, track progress, and coordinate assignments.',
    useCases: [
      'Managing project sprints with Kanban task cards',
      'Assigning duties to team members in marketing or product teams',
      'Tracking project timelines and task completion metrics',
      'Collaborating on team tasks in Microsoft Teams channels',
      'Organizing structured events or onboarding programs'
    ],
    howItWorks: [
      'A project manager creates a Plan and links it to a team.',
      'Organize the board by creating columns (Buckets) for phases (e.g. To Do, In Progress, Done).',
      'Add task cards containing checklists, labels, due dates, and assignees.',
      'Drag and drop cards across columns as progress is made.',
      'View progress charts to track workloads and status metrics.'
    ],
    features: [
      { title: 'Kanban Board View', desc: 'Drag-and-drop task cards across column buckets to visually track project progression.' },
      { title: 'Task Allocation Cards', desc: 'Add assignees, due dates, sub-checklists, file attachments, and comment logs to task cards.' },
      { title: 'Visual Metrics Charts', desc: 'Instantly view visual progress charts showing task status, workloads, and bucket breakdowns.' },
      { title: 'Teams Hub Integration', desc: 'Add Planner boards as tabs in Microsoft Teams channels for direct team access.' }
    ],
    webAccess: 'Navigate to office.com, log in, click the Planner icon, and choose a team plan board to begin managing tasks.',
    installation: [
      'Microsoft Planner is a cloud-native application. It does not require a desktop install and is accessed via web browsers or through the Planner tab in Microsoft Teams.'
    ],
    newUserGuide: [
      { step: '01', title: 'Log in corporate portal', desc: 'Sign in to office.com with your work or school credentials.' },
      { step: '02', title: 'Open Planner App', desc: 'Click the Planner icon on the dashboard to view your assigned plans.' },
      { step: '03', title: 'Create New Plan Board', desc: 'Click "New Plan", name your project board, link it to a team, and click create.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Planner Web', desc: 'Log in to office.com/planner or click the Planner tab in your Teams app.' },
      { step: '02', title: 'View Assigned Tasks', desc: 'Click "My Tasks" in the sidebar to view all cards assigned to you.' },
      { step: '03', title: 'Update Task Cards', desc: 'Mark sub-checklists as completed or drag cards to update progress.' }
    ],
    relatedProducts: ['teams', 'todo', 'lists', 'sharepoint']
  },
  {
    name: 'Microsoft Forms',
    slug: 'forms',
    category: 'Productivity',
    description: 'Design digital surveys, student quizzes, and feedback forms to collect data and view results in real-time.',
    tagline: 'Create custom surveys, quizzes, and forms in minutes.',
    iconName: 'ClipboardList',
    color: '#008272',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Forms is an online survey creator. It allows users to quickly build surveys, feedback forms, and quizzes with automatic grading and real-time responses.',
    useCases: [
      'Creating customer feedback and satisfaction surveys',
      'Designing classroom quizzes with automatic grading',
      'Collecting event registrations and sign-up details',
      'Gathering internal team feedback and suggestions',
      'Conducting quick online polls during meetings'
    ],
    howItWorks: [
      'Create a new Form or Quiz using the drag-and-drop builder.',
      'Add question types like choice questions, text boxes, and ratings.',
      'Customize themes, logo icons, and redirect configurations.',
      'Share the form link, embed code, or QR code.',
      'Review responses in real-time or export results to Excel for deep analysis.'
    ],
    features: [
      { title: 'Interactive Form Builder', desc: 'Build surveys using question types like Multiple Choice, Text, Rating, and Dates.' },
      { title: 'Quiz Auto-Grading Engine', desc: 'Define correct answers and point values for quiz questions to automate student grading.' },
      { title: 'Real-Time Charts Analytics', desc: 'Instantly view response summaries with auto-generated charts and metrics panels.' },
      { title: 'Dynamic Branching Logic', desc: 'Route respondents to specific questions based on their answers to previous questions.' }
    ],
    webAccess: 'Open your web browser, navigate to forms.microsoft.com or office.com/forms, and sign in with your email address to build forms.',
    installation: [
      'Microsoft Forms is a web-based cloud platform. It does not require local desktop client software and is accessed via web browsers.'
    ],
    newUserGuide: [
      { step: '01', title: 'Create Microsoft account', desc: 'Create a personal Microsoft account or log in with corporate credentials.' },
      { step: '02', title: 'Navigate to Forms', desc: 'Go to forms.microsoft.com to view your form templates dashboard.' },
      { step: '03', title: 'Build First Survey', desc: 'Click "New Form", add a choice question, and write your first query.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Forms Web', desc: 'Log in to office.com/forms or click the Forms tab in Excel.' },
      { step: '02', title: 'Review Form Responses', desc: 'Select an active form and click the "Responses" tab to view metrics.' },
      { step: '03', title: 'Export Data to Excel', desc: 'Click "Open in Excel" to download response spreadsheets.' }
    ],
    relatedProducts: ['excel', 'onedrive', 'teams', 'lists']
  },
  {
    name: 'Microsoft Lists',
    slug: 'lists',
    category: 'Productivity',
    description: 'Track database assets, organize issues, schedule events, and manage inventory in structured table boards.',
    tagline: 'Track information, assets, and workflows with smart tables.',
    iconName: 'List',
    color: '#008272',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Lists is an information tracking application built on SharePoint. It allows users to build structured list boards to track issues, inventory, assets, and events.',
    useCases: [
      'Tracking software bugs and resolution status',
      'Managing physical assets and IT inventory logs',
      'Scheduling event speaker slots and logistics',
      'Onboarding new employees with task trackers',
      'Publishing shared resource directories'
    ],
    howItWorks: [
      'Create a list from a template or start with a blank table.',
      'Define column schemas (e.g. Text, Choice, Date, Person, Files).',
      'Add database items and assign status flags.',
      'Configure views (e.g. List, Grid, Kanban Board, Calendar).',
      'Set alert rules to automatically notify teams when items change.'
    ],
    features: [
      { title: 'Flexible Data Schema', desc: 'Define columns with custom formatting, multi-choice lists, dates, assignees, and attachments.' },
      { title: 'Custom Table Views', desc: 'Switch between standard List views, visual Kanban boards, interactive Calendars, or grid sheets.' },
      { title: 'Automated Status Alerts', desc: 'Configure rules to automatically send email notifications when items are updated.' },
      { title: 'SharePoint Site Host', desc: 'Fully hosted on SharePoint for enterprise-grade security and permissions.' }
    ],
    webAccess: 'Navigate to office.com, sign in with your account credentials, and select the Lists icon to manage your tables.',
    installation: [
      'Microsoft Lists is a cloud-based application. It does not require desktop client software and is accessed via web browsers or the Mobile app.'
    ],
    newUserGuide: [
      { step: '01', title: 'Log in to office.com', desc: 'Sign in to the portal using your work, school, or personal credentials.' },
      { step: '02', title: 'Open Lists Web App', desc: 'Click the Lists icon on the dashboard to view your tables.' },
      { step: '03', title: 'Create List Template', desc: 'Click "New List", choose a template like "Issue Tracker", and click create.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch Lists Web Portal', desc: 'Log in to office.com/lists or open the Lists app in your Teams workspace.' },
      { step: '02', title: 'Select synched lists', desc: 'Choose a table from the dashboard.' },
      { step: '03', title: 'Add or Edit items', desc: 'Click "New" to log a new entry or edit cell values.' }
    ],
    relatedProducts: ['sharepoint', 'teams', 'planner', 'excel']
  },
  {
    name: 'Microsoft Bookings',
    slug: 'bookings',
    category: 'Productivity',
    description: 'Provide an online booking page where external clients can schedule, manage, and track appointment slots.',
    tagline: 'Simplify scheduling and appointment bookings for your clients.',
    iconName: 'ClipboardList',
    color: '#0078d4',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Bookings makes scheduling and managing appointments easy. It includes a web-based booking calendar that integrates with Outlook to optimize staff schedules, automatically send confirmation emails, and decrease no-shows.',
    useCases: [
      'Allowing external clients to book product demo sessions',
      'Scheduling parent-teacher meetings in school calendars',
      'Booking service appointments (IT support, consulting, tutoring)',
      'Managing room reservations and lab resources',
      'Coordinating candidate job interview schedules'
    ],
    howItWorks: [
      'Create a Bookings Calendar and define your services list.',
      'Configure staff profiles and sync their personal Outlook calendars.',
      'Define business hours and appointment buffer zones.',
      'Publish your secure external booking page URL.',
      'Clients visit the page, select a service/time slot, and reserve.'
    ],
    features: [
      { title: 'Outlook Calendar Sync', desc: 'Syncs automatically with employee Outlook calendars to verify availability and prevent double bookings.' },
      { title: 'Self-Service Booking Page', desc: 'A clean, customer-facing web portal where clients can book, reschedule, or cancel bookings 24/7.' },
      { title: 'Auto Email Reminders', desc: 'Automate confirmation emails, SMS notifications, and calendar invites to reduce client no-shows.' },
      { title: 'Granular Staff Assignment', desc: 'Assign bookings to specific employees or allow customers to select their preferred agent.' }
    ],
    webAccess: 'Open your web browser, navigate to office.com, sign in with your enterprise license account, and select the Bookings app.',
    installation: [
      'Microsoft Bookings is a cloud-based web service. It does not require desktop client software and is managed entirely through internet browsers.'
    ],
    newUserGuide: [
      { step: '01', title: 'Request license access', desc: 'Ensure your enterprise profile includes access permissions for Microsoft Bookings.' },
      { step: '02', title: 'Launch Bookings Portal', desc: 'Open office.com/bookings, log in, and click "Create Booking Calendar".' },
      { step: '03', title: 'Define Business Hours', desc: 'Input your company name, staff details, and service availability windows.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Bookings Web', desc: 'Log in to your dashboard at office.com/bookings.' },
      { step: '02', title: 'Verify Calendar sync', desc: 'Confirm Outlook synchronization parameters are active for all staff.' },
      { step: '03', title: 'Share Booking URL', desc: 'Locate and distribute your published booking link to clients.' }
    ],
    relatedProducts: ['outlook', 'teams', 'todo', 'planner']
  },
  {
    name: 'Microsoft Whiteboard',
    slug: 'whiteboard',
    category: 'Collaboration',
    description: 'Collaborate with teammates on a digital infinite canvas using post-its, templates, sketches, and shapes.',
    tagline: 'Your digital visual collaboration workspace.',
    iconName: 'Notebook',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Whiteboard is a freeform digital canvas where people, ideas, and content can come together. It features interactive drawing tools, sticky notes, flowchart shapes, and template boards for visual collaboration.',
    useCases: [
      'Hosting remote design sprint brainstorm sessions',
      'Sketching block architecture diagrams with stylus pens',
      'Creating visual flowchart mappings and mindmaps',
      'Collaborating in real-time during Microsoft Teams video calls',
      'Structuring Agile retrospectives with visual templates'
    ],
    howItWorks: [
      'Create a new Whiteboard canvas page.',
      'Draw using digital pens, insert post-it notes, and add shapes.',
      'Invite teammates to join your canvas workspace.',
      'Collaborate concurrently, add text blocks, and drop reactions.',
      'Export the finished canvas graphic as a high-res PNG image.'
    ],
    features: [
      { title: 'Infinite Canvas Board', desc: 'Draw, sketch, write, and insert media files without page size constraints.' },
      { title: 'Real-time Group Drawing', desc: 'Watch your team draw, place sticky notes, and write notes simultaneously.' },
      { title: 'Pre-built Sprint Templates', desc: 'Get started quickly with templates for Agile planning, design reviews, and mindmapping.' },
      { title: 'Direct Teams Integration', desc: 'Open a collaborative whiteboard instantly inside active Teams video conference calls.' }
    ],
    webAccess: 'Navigate to whiteboard.microsoft.com or office.com/whiteboard in your web browser, log in, and launch a canvas.',
    installation: [
      'Download Microsoft Whiteboard from the Windows Store, Mac App Store, or whiteboard.microsoft.com.',
      'Execute the setup installer.',
      'Launch the app and log in to fetch your synced canvas boards.'
    ],
    newUserGuide: [
      { step: '01', title: 'Get Microsoft profile', desc: 'Sign up for a free Microsoft ID or log in with corporate credentials.' },
      { step: '02', title: 'Open Whiteboard Web', desc: 'Browse to whiteboard.office.com to initialize your dashboard.' },
      { step: '03', title: 'Create Visual Board', desc: 'Click "Create New Whiteboard" and choose a pen tool to test drawing.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch Whiteboard app', desc: 'Open Whiteboard on your PC, mobile, or start a board in Teams.' },
      { step: '02', title: 'Authenticate login', desc: 'Sign in to import your saved visual boards.' },
      { step: '03', title: 'Resume Visual design', desc: 'Open a saved board and continue sketching or brainstorming.' }
    ],
    relatedProducts: ['teams', 'onenote', 'onedrive', 'planner']
  },
  {
    name: 'Microsoft Stream',
    slug: 'stream',
    category: 'Productivity',
    description: 'Securely upload, organize, edit, and share corporate training videos, meetings, and screen recordings.',
    tagline: 'Your enterprise video management and sharing platform.',
    iconName: 'Presentation',
    color: '#bc1948',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Stream is an intelligent enterprise video service that makes it easy to upload, view, and share videos securely within your organization. It supports auto-generated transcripts, speaker timeline search, and meeting recordings sync.',
    useCases: [
      'Uploading corporate onboarding and training videos',
      'Accessing recorded Teams organization meetings',
      'Recording web screen captures to share with colleagues',
      'Publishing company-wide announcements and video bulletins',
      'Configuring educational video playlists'
    ],
    howItWorks: [
      'Upload a video file (MP4, MOV, etc.) or record your screen.',
      'Wait for the automated speech-to-text transcript index to compile.',
      'Add descriptions, chapters, and custom thumbnails.',
      'Share video links or embed them in SharePoint portal pages.',
      'Review viewer analytics and timestamp comments.'
    ],
    features: [
      { title: 'Interactive Transcripts', desc: 'Auto-generate speech-to-text transcripts and search for keywords to jump to specific points.' },
      { title: 'Teams Meeting Sync', desc: 'Automatically saves Teams video conference recordings directly to OneDrive or SharePoint for streaming.' },
      { title: 'Video Chapter markers', desc: 'Segment long videos into structured chapters with custom timestamps to simplify navigation.' },
      { title: 'Enterprise Access Controls', desc: 'Restrict video permissions to specific individuals, departments, or Active Directory groups.' }
    ],
    webAccess: 'Navigate to office.com, sign in with your work or school account, and select the Stream app from the dashboard.',
    installation: [
      'Microsoft Stream is a web-based cloud platform. It does not require separate local client installation and is accessed via web browsers or mobile apps.'
    ],
    newUserGuide: [
      { step: '01', title: 'Sign In Account', desc: 'Log in to your work or school Microsoft account at office.com.' },
      { step: '02', title: 'Open Stream Dashboard', desc: 'Locate the Stream app to view corporate video playlists.' },
      { step: '03', title: 'Record Screen', desc: 'Click "New Recording" to capture your browser screen and test publishing.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Stream portal', desc: 'Navigate to office.com and select the Stream icon.' },
      { step: '02', title: 'Search meeting recordings', desc: 'Browse your recent recorded meetings folder.' },
      { step: '03', title: 'Share Video links', desc: 'Generate permissions links to share videos with colleagues.' }
    ],
    relatedProducts: ['teams', 'sharepoint', 'onedrive', 'powerpoint']
  },
  {
    name: 'Microsoft Exchange',
    slug: 'exchange',
    category: 'Business Tools',
    description: 'Enterprise email hosting, calendar management, and folder synchronization running on secure cloud servers.',
    tagline: 'Enterprise email, calendar, and address book server hosting.',
    iconName: 'Mail',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Exchange is the backend server hosting platform for business email, calendar sync, and contact directories. It powers the data synchronization behind Microsoft Outlook mailboxes.',
    useCases: [
      'Hosting corporate custom domain email mailboxes',
      'Syncing mailbox folders and calendars across all devices',
      'Configuring global company email disclaimer templates',
      'Managing resource mailboxes for meeting rooms',
      'Enforcing strict corporate email retention policies'
    ],
    howItWorks: [
      'The IT administrator configures Exchange DNS records on your domain.',
      'Create and allocate user mailboxes and shared email aliases.',
      'Configure mail flow rules (e.g. blocking spam, adding footers).',
      'Sync data with Outlook desktop, web, and mobile clients.',
      'Exchange continuously archives and scans emails for security threat protection.'
    ],
    features: [
      { title: 'Global Address List (GAL)', desc: 'Centralizes contact profiles for all users in the organization for Outlook search.' },
      { title: 'Shared Mailboxes alias', desc: 'Configure shared mailboxes (e.g., info@company.com) that multiple team members can access.' },
      { title: 'Advanced Threat Protection', desc: 'Exchange Online Protection scans incoming messages for spam, phishing links, and viruses.' },
      { title: 'Granular Data Archiving', desc: 'Define email retention schedules to automatically archive historical emails.' }
    ],
    webAccess: 'Enterprise administrators manage Exchange settings through the Exchange Admin Center at admin.exchange.microsoft.com. Users access emails via Outlook.',
    installation: [
      'Microsoft Exchange is a cloud-based email server infrastructure. Users do not install Exchange locally; they configure their Outlook client to connect to it.'
    ],
    newUserGuide: [
      { step: '01', title: 'Configure Domain DNS', desc: 'Set up MX, SPF, and DKIM records on your web domain.' },
      { step: '02', title: 'Create Active mailbox', desc: 'Create user mailboxes in the Microsoft 365 Admin Center.' },
      { step: '03', title: 'Open Outlook email', desc: 'Instruct users to sign in to Outlook with their credentials to sync their inbox.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Exchange Admin', desc: 'Log in to admin.exchange.microsoft.com with admin credentials.' },
      { step: '02', title: 'Update Mail Flow rules', desc: 'Adjust global settings, mailbox quotas, or spam block lists.' },
      { step: '03', title: 'Save Configurations', desc: 'Apply policies across all active user accounts.' }
    ],
    relatedProducts: ['outlook', 'teams', 'defender', 'intune']
  },
  {
    name: 'Microsoft Defender',
    slug: 'defender',
    category: 'Business Tools',
    description: 'Enterprise security suite providing antivirus protection, firewall defenses, and cloud threat monitoring.',
    tagline: 'Comprehensive security and threat protection for devices.',
    iconName: 'Shield',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Defender is a unified security management and endpoint protection suite. It provides advanced antivirus shields, network firewalls, and cloud security threat diagnostics to safeguard devices and accounts.',
    useCases: [
      'Scanning local computers for malware and viruses',
      'Configuring network firewall access lists',
      'Protecting endpoints from ransomware encryption attacks',
      'Auditing user accounts for weak credentials',
      'Blocking malicious links inside email attachments'
    ],
    howItWorks: [
      'Deploy the Microsoft Defender client to Windows and macOS devices.',
      'Defender monitors running processes and scans downloaded files.',
      'Block unauthorized network traffic and filter browser links.',
      'Alert security administrators when anomalous system activity is detected.',
      'Manage security configurations through the Security portal.'
    ],
    features: [
      { title: 'Advanced Endpoint Protection', desc: 'Antivirus threat prevention that blocks spyware, viruses, and trojan infections.' },
      { title: 'Automated Device Isolation', desc: 'Instantly isolate compromised network computers to stop security threats from spreading.' },
      { title: 'Safe Links & Attachments', desc: 'Sandbox and scan incoming email attachments to block phishing links before they load.' },
      { title: 'Centralized Security Portal', desc: 'A unified admin dashboard displaying alerts and security configurations.' }
    ],
    webAccess: 'Administrators manage security configurations through the Defender Security portal at security.microsoft.com.',
    installation: [
      'Defender is integrated into Windows. For macOS, iOS, or Android, download the Defender client from security.microsoft.com or app stores.',
      'Execute the installer and sign in with your enterprise credentials.'
    ],
    newUserGuide: [
      { step: '01', title: 'Sign In Admin portal', desc: 'Log in to security.microsoft.com with your administrative account.' },
      { step: '02', title: 'Configure Security Policies', desc: 'Define basic threat thresholds, antivirus schedules, and email scanning rules.' },
      { step: '03', title: 'Enroll Organization devices', desc: 'Install Defender endpoint clients on all company laptops.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Security Dashboard', desc: 'Open the portal at security.microsoft.com or launch Defender on your device.' },
      { step: '02', title: 'Analyze Threat alerts', desc: 'Review active alerts, malware incidents, and vulnerability reports.' },
      { step: '03', title: 'Trigger Endpoint scans', desc: 'Run security scans on specific devices to ensure protection.' }
    ],
    relatedProducts: ['intune', 'purview', 'exchange', 'outlook']
  },
  {
    name: 'Microsoft Intune',
    slug: 'intune',
    category: 'Business Tools',
    description: 'Manage company laptops and mobile devices, enforce security configurations, and deploy corporate apps.',
    tagline: 'Manage and secure mobile devices, laptops, and apps.',
    iconName: 'Laptop',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Intune is a cloud-based mobile device management (MDM) and mobile application management (MAM) service. It allows organizations to manage corporate laptops, mobile devices, and deploy apps.',
    useCases: [
      'Configuring email profiles on employee mobile devices',
      'Remotely wiping corporate data from lost company laptops',
      'Enforcing passcode and screen lock policies on mobile devices',
      'Deploying updates and applications to Windows and macOS devices',
      'Auditing organization devices for security compliance'
    ],
    howItWorks: [
      'Enroll corporate laptops and mobile devices into the Intune platform.',
      'Configure device profiles to enforce settings and credentials.',
      'Define compliance rules (e.g. requiring device encryption).',
      'Distribute applications to devices silently over the cloud.',
      'If a device is lost, trigger a remote wipe command to erase data.'
    ],
    features: [
      { title: 'Mobile Device Management (MDM)', desc: 'Remotely configure, monitor, and wipe Windows, macOS, iOS, and Android devices.' },
      { title: 'Mobile App Management (MAM)', desc: 'Secure corporate data within mobile apps (e.g. Outlook) without managing the entire device.' },
      { title: 'Conditional Access Sync', desc: 'Block devices from accessing corporate resources if they do not meet compliance standards.' },
      { title: 'Silent App Deployments', desc: 'Publish and update productivity applications silently on enrolled devices.' }
    ],
    webAccess: 'Administrators manage device enrollment and profiles through the Intune admin portal at intune.microsoft.com.',
    installation: [
      'Users enroll devices by installing the Intune Company Portal application from app stores or portal.manage.microsoft.com, and signing in.'
    ],
    newUserGuide: [
      { step: '01', title: 'Open Intune Admin Console', desc: 'Log in to intune.microsoft.com with your administrator credentials.' },
      { step: '02', title: 'Define Device Policies', desc: 'Establish passcodes, Wi-Fi profiles, and encryption standards.' },
      { step: '03', title: 'Distribute Company Portal', desc: 'Instruct users to download Company Portal to register their devices.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Admin Console', desc: 'Go to intune.microsoft.com to view your device list.' },
      { step: '02', title: 'Inspect Device Compliance', desc: 'Check for non-compliant devices or pending software updates.' },
      { step: '03', title: 'Trigger Wipe command', desc: 'Select a lost device and click "Wipe" to protect corporate data.' }
    ],
    relatedProducts: ['defender', 'purview', 'exchange', 'sharepoint']
  },
  {
    name: 'Microsoft Purview',
    slug: 'purview',
    category: 'Business Tools',
    description: 'Govern and secure corporate data assets, enforce data retention policies, and monitor data leaks.',
    tagline: 'Govern, protect, and manage your data estate.',
    iconName: 'Database',
    color: '#0078d4',
    platforms: ['Web'],
    overview: 'Microsoft Purview is a comprehensive data governance, risk management, and compliance platform. It helps organizations gain visibility into their data estate, protect sensitive files, and ensure regulatory compliance.',
    useCases: [
      'Scanning document libraries for credit card numbers or PII data',
      'Applying sensitivity labels (e.g. Highly Confidential) to files',
      'Configuring automated data retention and deletion schedules',
      'Tracking the lineage of databases across SQL and cloud servers',
      'Auditing file sharing to prevent accidental data leaks'
    ],
    howItWorks: [
      'Connect Purview to your databases, OneDrive, and SharePoint libraries.',
      'Purview scans and catalogs your files and databases.',
      'Automatically apply sensitivity labels based on file content.',
      'Monitor and block unauthorized file sharing or downloads.',
      'Review compliance metrics and audit logs in the Purview portal.'
    ],
    features: [
      { title: 'Unified Data Map Catalog', desc: 'Scan and catalog databases, cloud files, and SharePoint documents to build a searchable directory.' },
      { title: 'Information Protection Labels', desc: 'Apply encryption, watermarks, and access controls to sensitive files using tags.' },
      { title: 'Data Loss Prevention (DLP)', desc: 'Prevent accidental sharing of sensitive files (e.g. SSNs, code secrets) outside the organization.' },
      { title: 'Compliance Audit Logs', desc: 'Audit file modifications, sharing logs, and admin access records.' }
    ],
    webAccess: 'Administrators access data governance dashboards through the Purview portal at purview.microsoft.com.',
    installation: [
      'Microsoft Purview is a cloud-native platform. It does not require desktop client software installation and is managed through internet browsers.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify Licensing scope', desc: 'Verify that your enterprise plan includes Microsoft Purview compliance features.' },
      { step: '02', title: 'Access Purview portal', desc: 'Log in to purview.microsoft.com with your administrative credentials.' },
      { step: '03', title: 'Initialize Data scans', desc: 'Connect SharePoint and databases to catalog your data assets.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Purview Console', desc: 'Log in to purview.microsoft.com to view your data dashboard.' },
      { step: '02', title: 'Review Data Alerts', desc: 'Inspect active DLP sharing alerts or compliance warnings.' },
      { step: '03', title: 'Adjust Sensitivity Labels', desc: 'Modify encryption parameters or document classification rules.' }
    ],
    relatedProducts: ['intune', 'defender', 'sharepoint', 'onedrive']
  },
  {
    name: 'Microsoft 365 Copilot',
    slug: 'copilot',
    category: 'Power Platform & AI',
    description: 'Boost your workflows using AI integrated directly across Word, Excel, Teams, and PowerPoint.',
    tagline: 'Supercharge your productivity with integrated AI assistance.',
    iconName: 'Sparkles',
    color: '#0078d4',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft 365 Copilot is an AI assistant integrated across Microsoft 365 apps. It uses large language models to help you draft documents, analyze spreadsheet data, summarize chat histories, and design presentations.',
    useCases: [
      'Drafting documents and proposals in Word based on simple prompts',
      'Analyzing data and building formulas in Excel using chat queries',
      'Summarizing long chat histories and action items in Teams channels',
      'Creating entire draft slide decks in PowerPoint from text documents',
      'Drafting professional email responses in Outlook'
    ],
    howItWorks: [
      'Launch Copilot within a supported Microsoft 365 application.',
      'Input natural language prompts in the chat panel.',
      'Copilot reads document contexts to draft content, format layouts, or execute formulas.',
      'Refine the AI output using conversational adjustments.',
      'Verify details and save the document.'
    ],
    features: [
      { title: 'Context-Aware AI Drafting', desc: 'Draft reports, summaries, or articles in Word based on your existing notes and files.' },
      { title: 'Chat-Based Formula Analyst', desc: 'Analyze data in Excel by asking questions in plain English to automatically build formulas.' },
      { title: 'Instant Teams Summaries', desc: 'Get summaries of missed channel chats, meeting transcripts, and action items.' },
      { title: 'Slide Deck Creator AI', desc: 'Convert text documents into styled PowerPoint slide decks with a single prompt.' }
    ],
    webAccess: 'Log in to office.com, sign in with your enterprise credentials, and click the Copilot icon to launch the chat panel in your browser.',
    installation: [
      'Microsoft 365 Copilot is integrated directly into Microsoft 365 apps. It does not require a separate installation but requires an active Microsoft 365 Copilot license add-on.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify active License', desc: 'Verify that your enterprise plan includes the Microsoft 365 Copilot add-on license.' },
      { step: '02', title: 'Open Microsoft 365 app', desc: 'Open any supported application like Word Web or Teams Web at office.com.' },
      { step: '03', title: 'Launch Copilot Panel', desc: 'Click the Copilot button in the app toolbar to initialize the chat helper.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Launch Office App Client', desc: 'Open any Office application (e.g. Word, Excel, Teams) on your system.' },
      { step: '02', title: 'Verify Account Login', desc: 'Sign in with your enterprise credentials to authenticate Copilot.' },
      { step: '03', title: 'Interact with AI Helper', desc: 'Click the Copilot icon in the toolbar to run commands.' }
    ],
    relatedProducts: ['word', 'excel', 'powerpoint', 'teams']
  },
  {
    name: 'Microsoft Copilot Pages',
    slug: 'copilot-pages',
    category: 'Power Platform & AI',
    description: 'Dynamic canvas workspace designed for multiplayer AI collaboration, letting teams edit Copilot insights.',
    tagline: 'Collaborate with teams on AI-generated content canvas.',
    iconName: 'Sparkles',
    color: '#0078d4',
    platforms: ['Web'],
    overview: 'Microsoft Copilot Pages is a dynamic multiplayer canvas designed for AI-assisted team collaboration. It allows users to capture insights from Copilot chats and compile them into a shared page where team members can co-edit and update the content.',
    useCases: [
      'Collaboratively editing Copilot research outputs with teammates',
      'Refining business pitches from AI drafts',
      'Compiling competitor analysis maps from web insights',
      'Structuring project task boards from AI suggestions',
      'Co-writing technical documentation outlines'
    ],
    howItWorks: [
      'Chat with Microsoft 365 Copilot to generate insights.',
      'Click "Edit in Page" to convert the chat output into a Page canvas.',
      'Invite team members to join your multiplayer canvas.',
      'Co-author text, add resources, and edit formatting.',
      'Share the finished Page as a resource link or pin it in Teams.'
    ],
    features: [
      { title: 'Multiplayer AI Editing', desc: 'Collaborate with teammates concurrently on the same canvas workspace.' },
      { title: 'Chat-to-Page Conversion', desc: 'Convert Copilot chat responses into editable canvas pages with a single click.' },
      { title: 'Dynamic Component Blocks', desc: 'Embed Loop components, checklists, tables, and files directly on Pages.' },
      { title: 'Synced Project Sharing', desc: 'Share Pages across Teams, Outlook, and SharePoint workspaces.' }
    ],
    webAccess: 'Navigate to copilot.microsoft.com, sign in with your enterprise credentials, and click "Pages" in the navigation panel to view your canvas workspace.',
    installation: [
      'Microsoft Copilot Pages is a web-based cloud service. It does not require separate local client installation and is accessed via web browsers.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify enterprise access', desc: 'Verify that your Microsoft plan includes Copilot and Loop Pages licenses.' },
      { step: '02', title: 'Open Copilot Chat', desc: 'Go to copilot.microsoft.com and log in with your credentials.' },
      { step: '03', title: 'Convert Chat to Page', desc: 'Run a search query and click "Edit in Page" to initialize your first canvas.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Access Pages Dashboard', desc: 'Navigate to copilot.microsoft.com/pages in your browser.' },
      { step: '02', title: 'Select synched Page', desc: 'Choose a saved multiplayer canvas from the dashboard.' },
      { step: '03', title: 'Invite team members', desc: 'Share the page URL to co-author with teammates.' }
    ],
    relatedProducts: ['copilot', 'loop', 'teams', 'word']
  },
  {
    name: 'Microsoft Power Automate',
    slug: 'power-automate',
    category: 'Power Platform & AI',
    description: 'Design automated workflows, sync data, trigger alerts, and connect apps without writing code.',
    tagline: 'Automate repetitive tasks and business workflows.',
    iconName: 'Sparkles',
    color: '#2572c0',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Power Automate is an enterprise workflow automation tool. It allows users to build automated flows between apps and services to sync files, get notifications, and collect data, without writing code.',
    useCases: [
      'Automatically saving email attachments to OneDrive',
      'Configuring manager approval workflows for vacation requests',
      'Triggering Microsoft Teams notifications when a database changes',
      'Syncing data between Salesforce and SharePoint tables',
      'Automating repetitive desktop data entry tasks using RPA'
    ],
    howItWorks: [
      'Create a new Flow (Cloud, Scheduled, or Desktop).',
      'Define a Trigger event (e.g., "When a new email arrives").',
      'Add Connectors to link applications (e.g. Outlook, Teams, SQL).',
      'Add Actions (e.g., "Create a file", "Send chat message").',
      'Test the flow and publish it to run in the background.'
    ],
    features: [
      { title: 'Visual Flow Designer', desc: 'Create automated workflows using a drag-and-drop builder with conditional branches.' },
      { title: 'Thousands of Connectors', desc: 'Connect Microsoft apps and third-party tools like Salesforce, Gmail, Slack, and Jira.' },
      { title: 'Manager Approvals Flows', desc: 'Build multi-stage approvals workflows that integrate notifications directly into Outlook and Teams.' },
      { title: 'Robotic Process Automation (RPA)', desc: 'Record mouse clicks and keyboard strokes on desktop apps to automate legacy tasks.' }
    ],
    webAccess: 'Navigate to make.powerautomate.com or office.com/automate, and log in with your email address to build workflows.',
    installation: [
      'Power Automate for Desktop (RPA) can be installed on Windows. Download it from make.powerautomate.com/desktop.',
      'Execute the setup installer.',
      'Sign in with your Microsoft account to authenticate and load flows.'
    ],
    newUserGuide: [
      { step: '01', title: 'Register profile', desc: 'Sign in to make.powerautomate.com using your credentials.' },
      { step: '02', title: 'Select Flow template', desc: 'Choose a template like "Save email attachments to OneDrive" to get started.' },
      { step: '03', title: 'Connect Accounts', desc: 'Authorize connectors for Outlook and OneDrive, and click "Create Flow".' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Power Automate Web', desc: 'Log in to make.powerautomate.com or open the Power Automate desktop app.' },
      { step: '02', title: 'Select active Flows', desc: 'Review your list of active workflows and check execution logs.' },
      { step: '03', title: 'Modify Trigger steps', desc: 'Open a flow, edit variables or actions, and click save.' }
    ],
    relatedProducts: ['power-apps', 'power-bi', 'sharepoint', 'teams']
  },
  {
    name: 'Power Apps',
    slug: 'power-apps',
    category: 'Power Platform & AI',
    description: 'Develop custom web and mobile business database applications with minimal coding.',
    tagline: 'Build custom business apps with low-code development.',
    iconName: 'Database',
    color: '#742774',
    platforms: ['Web', 'Mobile'],
    overview: 'Microsoft Power Apps is a suite of apps, services, and connectors that provides a rapid development environment to build custom business applications. It allows users to build responsive, low-code apps that connect to corporate database systems.',
    useCases: [
      'Building mobile app portals for employee time tracking',
      'Designing asset inspection checklist apps for tablets',
      'Developing custom data entry forms linked to SQL servers',
      'Creating internal corporate directories and reservation apps',
      'Configuring customer portal registration dashboards'
    ],
    howItWorks: [
      'Log into the Power Apps Creator Portal (make.powerapps.com).',
      'Select a data source (e.g. SharePoint, SQL Server, Dataverse).',
      'Choose a layout template (Canvas or Model-driven app).',
      'Drag and drop buttons, inputs, tables, and media elements.',
      'Publish the app to share it with users through browsers or mobile apps.'
    ],
    features: [
      { title: 'Canvas App Designer', desc: 'Design custom app interfaces using a drag-and-drop editor and Excel-like formulas.' },
      { title: 'Dataverse Connectors', desc: 'Connect to Microsoft secure, structured cloud database service out of the box.' },
      { title: 'Responsive Layouts', desc: 'Apps automatically scale to render on phone screens, tablets, and desktop browsers.' },
      { title: 'Teams Hub Hosting', desc: 'Embed custom Power Apps as tabs or sidebars in Microsoft Teams workspaces.' }
    ],
    webAccess: 'Navigate to make.powerapps.com, sign in with your enterprise credentials, and click "Apps" in the sidebar to run or edit applications.',
    installation: [
      'Power Apps are run within browsers. For mobile devices, download the "Power Apps" player client from the App Store or Google Play Store to run published apps.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify Enterprise Plan', desc: 'Ensure your Microsoft 365 subscription includes Power Apps developer permissions.' },
      { step: '02', title: 'Access App Creator', desc: 'Log in to make.powerapps.com and select "Start with data".' },
      { step: '03', title: 'Design First Screen', desc: 'Choose SharePoint as your database, auto-generate a layout, and click save.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Apps dashboard', desc: 'Log in to make.powerapps.com or open the Power Apps mobile app.' },
      { step: '02', title: 'Select developed app', desc: 'Choose a published app from the dashboard.' },
      { step: '03', title: 'Run App functionality', desc: 'Interact with inputs, database tables, and submit forms.' }
    ],
    relatedProducts: ['power-automate', 'power-bi', 'sharepoint', 'teams']
  },
  {
    name: 'Power BI',
    slug: 'power-bi',
    category: 'Power Platform & AI',
    description: 'Transform raw data into interactive dashboards, generate analytical reports, and share insights.',
    tagline: 'Analyze data and share insights with interactive dashboards.',
    iconName: 'FileSpreadsheet',
    color: '#f2c811',
    platforms: ['Web', 'Desktop', 'Mobile'],
    overview: 'Microsoft Power BI is a business intelligence platform. It provides tools for data modeling, visualization, and sharing interactive reports to help organizations make data-driven decisions.',
    useCases: [
      'Aggregating database sources into unified dashboards',
      'Generating monthly interactive financial reports',
      'Tracking sales pipelines and performance metrics',
      'Sharing web-embedded dashboard metrics with teams',
      'Analyzing user engagement trends across websites'
    ],
    howItWorks: [
      'Import data from sources (Excel, SQL, Google Analytics) using Power BI Desktop.',
      'Clean and model table relationships.',
      'Create interactive charts, maps, gauge widgets, and tables.',
      'Publish reports to the Power BI Service cloud portal.',
      'Share dashboards with teammates and configure automatic data refresh schedules.'
    ],
    features: [
      { title: 'Power BI Desktop App', desc: 'A desktop application for Windows PCs used for data modeling, query formatting, and report design.' },
      { title: 'Interactive Dashboards', desc: 'Filter, drill down, and explore data by clicking on visual charts and widgets.' },
      { title: 'Direct Data Refreshes', desc: 'Configure automatic data refresh schedules to keep dashboard metrics up to date.' },
      { title: 'Mobile Dashboard Viewer', desc: 'View security-enforced dashboards optimized for mobile screens on the go.' }
    ],
    webAccess: 'Navigate to app.powerbi.com, sign in with your enterprise credentials, and click "Workspaces" to view shared dashboards.',
    installation: [
      'Download Power BI Desktop for Windows from powerbi.microsoft.com/desktop.',
      'Execute the installer setup.',
      'Once complete, launch the desktop client, log in, and import data.'
    ],
    newUserGuide: [
      { step: '01', title: 'Log in to Web Service', desc: 'Access the Power BI dashboard at app.powerbi.com using your credentials.' },
      { step: '02', title: 'Install Desktop Client', desc: 'Download Power BI Desktop on Windows for advanced data modeling.' },
      { step: '03', title: 'Build visual report', desc: 'Import an Excel file, drag a bar chart onto the canvas, and click save.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Power BI Service', desc: 'Log in to app.powerbi.com in your web browser.' },
      { step: '02', title: 'Select active Workspace', desc: 'Open your department workspace to view shared dashboards.' },
      { step: '03', title: 'Interact with visuals', desc: 'Click chart bars, filter date parameters, or download data tables.' }
    ],
    relatedProducts: ['excel', 'power-automate', 'power-apps', 'sharepoint']
  },
  {
    name: 'Microsoft Project',
    slug: 'project',
    category: 'Power Platform & AI',
    description: 'Coordinate enterprise schedules, track project portfolios, manage resources, and plot visual Gantt charts.',
    tagline: 'Enterprise project management and Gantt chart scheduling.',
    iconName: 'Kanban',
    color: '#31752f',
    platforms: ['Web', 'Desktop'],
    overview: 'Microsoft Project is a comprehensive project management software package. It is designed to assist project managers in developing schedules, assigning resources to tasks, tracking progress, managing budgets, and analyzing workloads.',
    useCases: [
      'Developing complex, multi-year project Gantt charts',
      'Managing task dependencies and critical path schedules',
      'Allocating staff workloads across enterprise projects',
      'Tracking project budget spends and forecast variances',
      'Reporting portfolio statuses to corporate executives'
    ],
    howItWorks: [
      'Create a new Project file and configure calendar parameters.',
      'List tasks and define sub-tasks in a work breakdown structure (WBS).',
      'Configure task dependencies (Finish-to-Start, Start-to-Start).',
      'Assign resources and configure hourly rate parameters.',
      'Baselines the schedule to track actual progress against the plan.'
    ],
    features: [
      { title: 'Gantt Chart Scheduler', desc: 'Plan timelines visually with drag-and-drop task dependency links.' },
      { title: 'Resource Management Tool', desc: 'Model employee availability, allocate workloads, and resolve resource over-allocations.' },
      { title: 'Critical Path Analysis', desc: 'Automatically calculate task sequences that determine the overall project duration.' },
      { title: 'Portfolio Dashboards', desc: 'Consolidate multiple project timelines into a single portfolio dashboard.' }
    ],
    webAccess: 'Navigate to project.microsoft.com, sign in with your enterprise license credentials, and manage timelines.',
    installation: [
      'Log into your Microsoft account portal at account.microsoft.com.',
      'Ensure your plan includes Project (e.g. Project Plan 3 or 5).',
      'Click "Install apps" to download the setup installer.',
      'Execute the installer and launch Microsoft Project from the start menu.'
    ],
    newUserGuide: [
      { step: '01', title: 'Verify active License', desc: 'Verify that your account has an active Project Plan license.' },
      { step: '02', title: 'Launch Project Web', desc: 'Navigate to project.microsoft.com to initialize a timeline.' },
      { step: '03', title: 'Plot Gantt timeline', desc: 'Add tasks, define due dates, link dependencies, and click save.' }
    ],
    existingUserGuide: [
      { step: '01', title: 'Open Project client', desc: 'Launch Project on your PC or access it online at project.microsoft.com.' },
      { step: '02', title: 'Select Project file', desc: 'Load files synced from SharePoint or local storage.' },
      { step: '03', title: 'Log progress updates', desc: 'Update percent complete values on active task bars.' }
    ],
    relatedProducts: ['planner', 'teams', 'sharepoint', 'onedrive']
  }
];
