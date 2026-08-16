export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  milestones: {
    title: string;
    description: string;
    skills: string[];
  }[];
  popular: boolean;
}

export interface DocSection {
  id: string;
  title: string;
  slug: string;
  content: string;
  codeSnippet?: string;
  language?: string;
}

export interface DocTopic {
  id: string;
  title: string;
  icon: string;
  articles: DocSection[];
}

export interface DevTool {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  compatibility: string[];
  tags: string[];
  features: string[];
  bestFor: string;
  website: string;
}

export interface MicrosoftProduct {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  features: string[];
  useCase: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'Master modern frontend and backend technologies to build scalable production web applications from scratch.',
    category: 'Web Development',
    level: 'Beginner',
    duration: '6 Months',
    popular: true,
    milestones: [
      {
        title: 'Foundations',
        description: 'Understand HTML5, CSS3, layout systems (Flexbox, Grid), responsive design, and CSS variables.',
        skills: ['HTML5', 'CSS3', 'Responsive Design', 'Sass']
      },
      {
        title: 'JavaScript Deep Dive',
        description: 'Learn modern ES6+ JS, DOM manipulation, asynchronous calls, APIs, and functional concepts.',
        skills: ['JavaScript ES6', 'DOM API', 'Promises/Fetch', 'JSON']
      },
      {
        title: 'Frontend Frameworks',
        description: 'Deep dive into React, state management, routing, Hooks, Tailwind CSS, and Next.js.',
        skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux Toolkit']
      },
      {
        title: 'Backend & APIs',
        description: 'Learn Node.js, Express, databases, REST APIs, authentication, and middlewares.',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT']
      },
      {
        title: 'Production Deployments',
        description: 'Deploy applications with Docker, CI/CD, and Vercel/AWS. Prepare for professional developer roles.',
        skills: ['Docker', 'AWS', 'GitHub Actions', 'Vercel']
      }
    ]
  },
  {
    id: 'js-pro',
    title: 'Advanced JavaScript & TypeScript',
    description: 'Unlock the full power of JavaScript. Deep dive into engines, async patterns, and strict typing with TypeScript.',
    category: 'JavaScript',
    level: 'Intermediate',
    duration: '3 Months',
    popular: true,
    milestones: [
      {
        title: 'JS Under the Hood',
        description: 'Execution context, call stack, event loop, prototypes, closures, and memory management.',
        skills: ['Event Loop', 'Closures', 'Prototypes', 'Memory Management']
      },
      {
        title: 'TypeScript Integration',
        description: 'Static typing, interface definition, advanced generics, union types, and declaration files.',
        skills: ['TypeScript Basics', 'Generics', 'Utility Types', 'Strict Linting']
      },
      {
        title: 'Design Patterns',
        description: 'Singleton, Observer, Factory, Module, and Dependency Injection pattern implementations.',
        skills: ['Design Patterns', 'SOLID Principles', 'Refactoring']
      }
    ]
  },
  {
    id: 'python-data',
    title: 'Python & Data Engineering',
    description: 'Learn Python programming, data analytics, automated pipelines, and cloud database integrations.',
    category: 'Python',
    level: 'Beginner',
    duration: '4 Months',
    popular: false,
    milestones: [
      {
        title: 'Python Core',
        description: 'Data types, control structures, object-oriented python, and built-in modules.',
        skills: ['OOP Python', 'File I/O', 'Error Handling', 'Pip']
      },
      {
        title: 'Data Wrangling',
        description: 'Work with Pandas, NumPy, and databases to clean and structure raw analytical records.',
        skills: ['Pandas', 'NumPy', 'Jupyter Notebooks', 'SQLite']
      },
      {
        title: 'Pipelines & Orchestration',
        description: 'Build ETL processes, schedule tasks, and deploy scripts onto cloud servers.',
        skills: ['ETL Pipelines', 'Airflow', 'Docker', 'AWS Lambda']
      }
    ]
  },
  {
    id: 'java-backend',
    title: 'Enterprise Java Developer',
    description: 'Build robust, highly scalable, and secure backend systems using Spring Boot and Java Enterprise ecosystem.',
    category: 'Java',
    level: 'Intermediate',
    duration: '5 Months',
    popular: false,
    milestones: [
      {
        title: 'Core Java & OOP',
        description: 'Collections framework, multi-threading, concurrency utilities, and JVM internals.',
        skills: ['Java Collections', 'Concurrency', 'JVM Tuning', 'Maven']
      },
      {
        title: 'Spring Framework',
        description: 'Dependency Injection, Spring Boot APIs, Spring Data JPA, and security configurations.',
        skills: ['Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs']
      },
      {
        title: 'Microservices & Scaling',
        description: 'Service discovery, API gateways, Docker containerization, and message queues.',
        skills: ['Docker', 'Eureka', 'Spring Cloud', 'RabbitMQ']
      }
    ]
  },
  {
    id: 'cpp-systems',
    title: 'C++ Systems Programming',
    description: 'Master manual memory management, system calls, high-performance computing, and game engines basics.',
    category: 'C++',
    level: 'Advanced',
    duration: '6 Months',
    popular: false,
    milestones: [
      {
        title: 'Modern C++ Foundations',
        description: 'Pointers, smart pointers, stack vs heap allocation, and Standard Template Library (STL).',
        skills: ['Pointers', 'Smart Pointers', 'STL Containers', 'C++17/20']
      },
      {
        title: 'Low-Level Optimization',
        description: 'Memory alignment, cache locality, compiler optimization, and custom allocators.',
        skills: ['Valgrind', 'CMake', 'Multithreading', 'Memory Profiling']
      },
      {
        title: 'System Integrations',
        description: 'Interfacing with OS kernels, socket programming, and building lightweight engines.',
        skills: ['Sockets', 'POSIX APIs', 'Graphics Pipelines']
      }
    ]
  }
];

export const documentation: DocTopic[] = [
  {
    id: 'html-css',
    title: 'HTML & CSS Layouts',
    icon: 'Layout',
    articles: [
      {
        id: 'flexbox',
        title: 'Flexbox Quickstart Guide',
        slug: 'flexbox-guide',
        content: `Flexbox is a one-dimensional layout model. It makes it easier to design flexible responsive layout structures without using float or positioning.

By defining \`display: flex\` on a container, all its direct children instantly become flex items, flowing horizontally or vertically based on properties.`,
        codeSnippet: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
        language: 'css'
      },
      {
        id: 'grid',
        title: 'Grid Layout Essentials',
        slug: 'grid-essentials',
        content: `CSS Grid Layout is a two-dimensional grid-based layout system. It handles both columns and rows simultaneously, allowing for complex web UI alignments.`,
        codeSnippet: `.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}
.featured-card {
  grid-column: span 8;
  grid-row: span 2;
}`,
        language: 'css'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    icon: 'Code',
    articles: [
      {
        id: 'closures',
        title: 'Understanding Closures',
        slug: 'understanding-closures',
        content: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

In other words, a closure gives an inner function access to the outer function's scope even after the outer function has returned.`,
        codeSnippet: `function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
        language: 'javascript'
      },
      {
        id: 'async-await',
        title: 'Asynchronous JavaScript',
        slug: 'asynchronous-javascript',
        content: `Modern JS relies heavily on Promises and async/await syntax to handle networks, file events, or other latency-heavy actions cleanly.`,
        codeSnippet: `async function fetchUserData(userId) {
  try {
    const res = await fetch(\`https://api.devhub.com/users/\${userId}\`);
    if (!res.ok) throw new Error('Failed to fetch user');
    return await res.json();
  } catch (err) {
    console.error('API Error:', err.message);
  }
}`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'react',
    title: 'React & Next.js',
    icon: 'Atom',
    articles: [
      {
        id: 'hooks',
        title: 'State Management with Hooks',
        slug: 'state-with-hooks',
        content: `React Hooks allow functional components to hook into state, lifecycle events, and context configurations.

The most essential hooks are \`useState\` for local variable updates, and \`useEffect\` for side effects like fetching data or subscribing to events.`,
        codeSnippet: `import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increment: {count}
    </button>
  );
}`,
        language: 'javascript'
      },
      {
        id: 'server-components',
        title: 'Next.js Server Components',
        slug: 'nextjs-server-components',
        content: `By default, Next.js App Router uses Server Components. They render on the server, resulting in smaller client bundle sizes and faster Initial Page Loads. Use \`"use client"\` at the top of a file when hooks or interactivity are required.`,
        codeSnippet: `// Server Component (Default)
import { fetchTools } from '@/lib/db';

export default async function ToolsList() {
  const tools = await fetchTools();
  return (
    <div className="grid gap-4">
      {tools.map(tool => (
        <h3 key={tool.id}>{tool.name}</h3>
      ))}
    </div>
  );
}`,
        language: 'javascript'
      }
    ]
  }
];

export const developerTools: DevTool[] = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    logo: 'Code2',
    description: 'A free, lightweight, and highly extensible code editor designed for building and debugging modern web and cloud applications.',
    category: 'Code Editors & IDEs',
    pricing: 'Free',
    compatibility: ['Windows', 'macOS', 'Linux', 'Web'],
    tags: ['Editor', 'Extensions', 'Debugging', 'Git'],
    features: [
      'IntelliSense smart completions based on variable types, function definitions, and imported modules.',
      'Built-in Git commands let you review diffs, stage files, and make commits directly from the editor.',
      'Extensive library of extensions for languages, themes, linters, and debuggers.'
    ],
    bestFor: 'General purpose software development, front-end scripting, and lightweight extension customization.',
    website: 'https://code.visualstudio.com'
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: 'Github',
    description: 'The world\'s leading AI-powered developer platform for version control, code collaboration, issue tracking, and CI/CD pipelines.',
    category: 'Version Control',
    pricing: 'Freemium',
    compatibility: ['Cloud', 'Windows', 'macOS', 'Linux'],
    tags: ['Git', 'CI/CD', 'Actions', 'Collaboration'],
    features: [
      'Git repository hosting with powerful pull request workflows, review tools, and branching rules.',
      'GitHub Actions for automating testing, building, and deploying directly in the cloud.',
      'Advanced vulnerability alerts, secret scanning, and automated dependency patching.'
    ],
    bestFor: 'Team collaboration, hosting open-source repositories, and setting up automated CI/CD pipelines.',
    website: 'https://github.com'
  },
  {
    id: 'postman',
    name: 'Postman',
    logo: 'Send',
    description: 'An API platform that simplifies every step of the API lifecycle, from design, mocking, testing, up to monitoring and documentation.',
    category: 'API Development',
    pricing: 'Freemium',
    compatibility: ['Windows', 'macOS', 'Linux', 'Web'],
    tags: ['API', 'REST', 'GraphQL', 'Testing'],
    features: [
      'Comprehensive request constructor for REST, GraphQL, SOAP, and gRPC endpoints.',
      'Automated API testing suites with environment variables and dynamic script asserts.',
      'Shared team workspaces for real-time API collection syncs and documentation.'
    ],
    bestFor: 'API design, end-to-end integration testing, and team API documentation cataloging.',
    website: 'https://www.postman.com'
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'Container',
    description: 'An open-source containerization platform designed to package applications and their dependencies into portable, isolated containers.',
    category: 'DevOps',
    pricing: 'Freemium',
    compatibility: ['Windows', 'macOS', 'Linux'],
    tags: ['Containers', 'DevOps', 'Microservices', 'Kubernetes'],
    features: [
      'Packs code and environments into lightweight virtual containers that run identically on any platform.',
      'Docker Compose for defining and running multi-container applications easily.',
      'Docker Hub integration for sharing, caching, and downloading secure container images.'
    ],
    bestFor: 'Eliminating "works on my machine" issues, local environment standardization, and microservice isolation.',
    website: 'https://www.docker.com'
  },
  {
    id: 'mongodb',
    name: 'MongoDB Atlas',
    logo: 'Database',
    description: 'A fully-managed cloud database service designed for modern document-based applications. Built on a flexible document model.',
    category: 'Databases',
    pricing: 'Freemium',
    compatibility: ['Cloud', 'AWS', 'Azure', 'GCP'],
    tags: ['NoSQL', 'Document Database', 'Cloud', 'JSON'],
    features: [
      'Flexible JSON-like document structure allows for rapid adjustments to database schemas.',
      'Global multi-cloud database deployment with automatic scaling, indexing, and backups.',
      'Built-in search engine, analytics, serverless triggers, and data charts APIs.'
    ],
    bestFor: 'Rapidly changing application schemas, high-throughput web applications, and analytics workloads.',
    website: 'https://www.mongodb.com/atlas'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    logo: 'Cloud',
    description: 'A comprehensive cloud platform with over 200 integrated services designed to build, run, and manage enterprise applications.',
    category: 'Cloud Platforms',
    pricing: 'Paid',
    compatibility: ['Cloud'],
    tags: ['Cloud', 'Enterprise', 'AI', 'Kubernetes'],
    features: [
      'Global cloud infrastructure with hybrid hosting and seamless Microsoft environment setups.',
      'Azure Kubernetes Service (AKS) for scalable orchestration of containerized systems.',
      'Enterprise-grade compliance, security, and integrated active directory policies.'
    ],
    bestFor: 'Enterprise software deployments, hybrid cloud architecture, and Microsoft 365 cloud integrations.',
    website: 'https://azure.microsoft.com'
  }
];

export const microsoftProducts: MicrosoftProduct[] = [
  {
    id: 'word',
    name: 'Microsoft Word',
    icon: 'FileText',
    tagline: 'Write and collaborate with elegance.',
    description: 'The industry-standard word processor designed to create, polish, format, and share professional-grade documents anywhere.',
    color: '#2b579a',
    useCase: 'Creating documentation, contracts, resumes, articles, and corporate reports.',
    features: [
      'Smart grammar checking, rewrite suggestions, and spelling helpers.',
      'Real-time co-authoring and commenting for seamless team reviews.',
      'Rich library of templates, fonts, layouts, and PDF importing capacities.'
    ]
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    icon: 'FileSpreadsheet',
    tagline: 'Analyze, visualize, and decide.',
    description: 'The legendary spreadsheet software that turns complex data structures into clear grids, formulas, charts, and actionable insights.',
    color: '#217346',
    useCase: 'Financial forecasting, scientific analysis, project schedules, and simple database trackers.',
    features: [
      'Extensive catalog of math, logic, lookup, and statistical formula functions.',
      'PivotTables, PivotCharts, and power-queries for structured data processing.',
      'Copilot integration for automated summarization and formula recommendations.'
    ]
  },
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    icon: 'Presentation',
    tagline: 'Design impactful presentations.',
    description: 'A dynamic presentation program that empowers you to tell visual stories, present data charts, and design pitch slides with custom animations.',
    color: '#d24726',
    useCase: 'Investor pitches, project kickoffs, training slides, and visual product showcases.',
    features: [
      'Morph transition tool for fluid graphical morphing and sliding movements.',
      'AI Presenter Coach to help you polish your voice and delivery pacing.',
      'Integrated multimedia supports for video, audio, icons, and 3D mockups.'
    ]
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    icon: 'Mail',
    tagline: 'Manage mail, calendar, and schedule.',
    description: 'A unified business email client, calendar organizer, contact repository, and personal task manager designed to keep teams synchronized.',
    color: '#0078d4',
    useCase: 'Corporate communication, shared calendar booking, and project task coordination.',
    features: [
      'Focused inbox filter to split urgent emails from newsletters and spam.',
      'Unified calendars supporting quick scheduling and automated Microsoft Teams links.',
      'Intelligent attachments sharing directly integrated with OneDrive storage.'
    ]
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    icon: 'Users',
    tagline: 'Collab, chat, and connect.',
    description: 'A premium collaboration hub that combines video conferencing, instant messaging, channel-based chats, and application integrations.',
    color: '#6264a7',
    useCase: 'Daily standups, remote pair programming sessions, team announcements, and wiki sharing.',
    features: [
      'HD video calling with noise suppression, custom backgrounds, and live transcripts.',
      'Nested chat channels with file sharing, tabs, and integrated applications.',
      'Seamless multi-tenant guest invites for client-facing collaborations.'
    ]
  },
  {
    id: 'onedrive',
    name: 'Microsoft OneDrive',
    icon: 'HardDrive',
    tagline: 'Store and secure in the cloud.',
    description: 'Secure enterprise cloud storage that makes your documents, files, code backups, and designs accessible from any device.',
    color: '#0078d4',
    useCase: 'Document backup, cross-device file sharing, and hosting shared file structures.',
    features: [
      'On-demand file synchronization lets you browse cloud files without taking disk space.',
      'Version history recovery to restore files to previous states up to 30 days.',
      'Personal Vault security storage requiring multi-factor authentication checks.'
    ]
  }
];
