import type {
  StatCard,
  TimelineItem,
  Perspective,
  Activity,
  EvidenceCard,
  Leader,
  Document,
  TableHeader,
  TrackingItem,
  CategoryDetail,
  Comment,
} from '../types';

export const dashboardStats: StatCard[] = [
  {
    title: 'Total Projects',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: 'folder',
  },
  {
    title: 'Active Tasks',
    value: '156',
    change: '+8%',
    trend: 'up',
    icon: 'check-circle',
  },
  {
    title: 'Completed',
    value: '89%',
    change: '+5%',
    trend: 'up',
    icon: 'trending-up',
  },
  {
    title: 'Pending Reviews',
    value: '12',
    change: '-3%',
    trend: 'down',
    icon: 'clock',
  },
];

export const summaryCards = [
  { value: '78.65%', label: 'Overall Progress', icon: 'cards1.svg' },
  { value: '95', label: 'Total Criteria', icon: 'cards2.svg' },
  { value: '52', label: 'Completed Criteria', icon: 'cards3.svg' },
  { value: '386', label: 'Evidence Documents', icon: 'cards4.svg' },
  { value: '302', label: 'Evidence (Completed)', icon: 'cards5.svg' },
  { value: '258', label: 'Uploaded To DGA', icon: 'cards6.svg' },
];

export const timelineMilestones = [
  { id: '1', date: 'Mar 17', title: 'Kickoff Workshop', status: 'completed' as const },
  { id: '2', date: 'March 18', title: 'Data Collection', status: 'completed' as const },
  { id: '3', date: 'May 8', title: 'Initial Phase', status: 'upcoming' as const },
  { id: '4', date: 'May 9-July 12', title: 'Verification', status: 'upcoming' as const },
  { id: '5', date: 'July 13', title: 'Completion Reviews', status: 'upcoming' as const },
  { id: '6', date: 'August 21', title: 'Cycle Conclusion', status: 'upcoming' as const },
];

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Project Kickoff',
    date: '2024-01-15',
    status: 'completed',
    description: 'Initial project planning and team alignment',
  },
  {
    id: '2',
    title: 'Requirements Gathering',
    date: '2024-01-22',
    status: 'completed',
    description: 'Stakeholder interviews and requirement documentation',
  },
  {
    id: '3',
    title: 'Design Phase',
    date: '2024-02-01',
    status: 'in-progress',
    description: 'UI/UX design and prototyping',
  },
  {
    id: '4',
    title: 'Development Sprint 1',
    date: '2024-02-15',
    status: 'upcoming',
    description: 'Core feature development',
  },
  {
    id: '5',
    title: 'Testing & QA',
    date: '2024-03-01',
    status: 'upcoming',
    description: 'Quality assurance and bug fixes',
  },
];

export const perspectives: Perspective[] = [
  { id: '1', name: 'Strategic Planning', progress: 85, color: 'bg-blue-500' },
  { id: '2', name: 'Operational Excellence', progress: 72, color: 'bg-green-500' },
  { id: '3', name: 'Risk Management', progress: 68, color: 'bg-yellow-500' },
  { id: '4', name: 'Compliance', progress: 91, color: 'bg-purple-500' },
  { id: '5', name: 'Technology', progress: 45, color: 'bg-red-500' },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'update',
    title: 'Updated Strategic Planning requirements',
    timestamp: '2 hours ago',
    user: 'Sarah Johnson',
  },
  {
    id: '2',
    type: 'review',
    title: 'Submitted evidence for review',
    timestamp: '5 hours ago',
    user: 'Michael Chen',
  },
  {
    id: '3',
    type: 'complete',
    title: 'Completed Risk Assessment phase',
    timestamp: '1 day ago',
    user: 'Emily Davis',
  },
  {
    id: '4',
    type: 'create',
    title: 'Created new compliance checklist',
    timestamp: '2 days ago',
    user: 'David Wilson',
  },
];

export const evidenceCards: EvidenceCard[] = [
  { type: 'total', count: 142, label: 'Total Evidence' },
  { type: 'in-progress', count: 38, label: 'In Progress' },
  { type: 'under-review', count: 24, label: 'Under Review' },
  { type: 'completed', count: 80, label: 'Completed' },
];

export const leaders: Leader[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Project Lead',
    avatar: 'SJ',
    email: 'sarah.johnson@company.com',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Technical Lead',
    avatar: 'MC',
    email: 'michael.chen@company.com',
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Quality Assurance',
    avatar: 'ED',
    email: 'emily.davis@company.com',
  },
];

export const trackingItems: TrackingItem[] = [
  {
    id: '1',
    title: 'Complete security audit documentation',
    status: 'in-progress',
    assignee: 'Sarah Johnson',
    dueDate: '2024-02-10',
    priority: 'high',
    tags: ['Security', 'Documentation'],
  },
  {
    id: '2',
    title: 'Review compliance checklist',
    status: 'pending',
    assignee: 'Michael Chen',
    dueDate: '2024-02-12',
    priority: 'medium',
    tags: ['Compliance', 'Review'],
  },
  {
    id: '3',
    title: 'Update risk assessment report',
    status: 'completed',
    assignee: 'Emily Davis',
    dueDate: '2024-02-08',
    priority: 'high',
    tags: ['Risk', 'Report'],
  },
  {
    id: '4',
    title: 'Prepare stakeholder presentation',
    status: 'in-progress',
    assignee: 'David Wilson',
    dueDate: '2024-02-15',
    priority: 'medium',
    tags: ['Presentation', 'Stakeholder'],
  },
  {
    id: '5',
    title: 'Finalize technical specifications',
    status: 'blocked',
    assignee: 'Sarah Johnson',
    dueDate: '2024-02-14',
    priority: 'high',
    tags: ['Technical', 'Specifications'],
  },
];

export const chartData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 72 },
  { name: 'Mar', value: 68 },
  { name: 'Apr', value: 80 },
  { name: 'May', value: 85 },
  { name: 'Jun', value: 78 },
];

export const progressCategories = [
  {
    id: '1',
    name: 'Strategy And Planning',
    progress: 97.78,
    subCategories: [
      {
        id: '1-1',
        name: 'Digital Transformation',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
        ],
      },
      {
        id: '1-2',
        name: 'Digital Governance',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
      {
        id: '1-3',
        name: 'Enterprise Architecture',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'completed' as const },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Organization And Culture',
    progress: 70.83,
    subCategories: [
      {
        id: '2-1',
        name: 'Digital Culture And Environment',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
      {
        id: '2-2',
        name: 'Leadership Development',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'completed' as const },
        ],
      },
      {
        id: '2-3',
        name: 'Skills & Capacity Building',
        items: [
          { number: 1, status: 'in-progress' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Operations And Execution',
    progress: 80.0,
    subCategories: [
      {
        id: '3-1',
        name: 'Business Processes',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
          { number: 4, status: 'completed' as const },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Business Continuity',
    progress: 90.59,
    subCategories: [
      {
        id: '4-1',
        name: 'Risk Management',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'completed' as const },
          { number: 5, status: 'completed' as const },
        ],
      },
      {
        id: '4-2',
        name: 'Business Continuity',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'not-started' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'completed' as const },
          { number: 5, status: 'completed' as const },
          { number: 6, status: 'completed' as const },
          { number: 7, status: 'completed' as const },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Information Technology',
    progress: 75.0,
    subCategories: [
      {
        id: '5-1',
        name: 'Support Systems',
        items: [
          { number: 1, status: 'partially-uploaded' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'partially-uploaded' as const },
          { number: 5, status: 'completed' as const },
        ],
      },
      {
        id: '5-2',
        name: 'IT Infrastructure',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'fully-uploaded' as const },
          { number: 5, status: 'fully-uploaded' as const },
          { number: 6, status: 'fully-uploaded' as const },
          { number: 7, status: 'completed' as const },
        ],
      },
      {
        id: '5-3',
        name: 'Cloud Infrastructure',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'fully-uploaded' as const },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Comprehensive Governance',
    progress: 64.44,
    subCategories: [
      {
        id: '6-1',
        name: 'Governance Platforms',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'not-started' as const },
          { number: 5, status: 'completed' as const },
          { number: 6, status: 'completed' as const },
          { number: 7, status: 'completed' as const },
          { number: 8, status: 'completed' as const },
          { number: 9, status: 'completed' as const },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Channels And Services',
    progress: 100.0,
    subCategories: [
      {
        id: '7-1',
        name: 'Service Quality',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
        ],
      },
      {
        id: '7-2',
        name: 'Digital Channels',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'completed' as const },
        ],
      },
    ],
  },
  {
    id: '8',
    name: 'Beneficiary Centralization',
    progress: 60.0,
    subCategories: [
      {
        id: '8-1',
        name: 'User Engagement',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
          { number: 4, status: 'in-progress' as const },
        ],
      },
      {
        id: '8-2',
        name: 'User Relationship',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
      {
        id: '8-3',
        name: 'User Experience',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'completed' as const },
          { number: 3, status: 'completed' as const },
          { number: 4, status: 'in-progress' as const },
          { number: 5, status: 'in-progress' as const },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Government Data',
    progress: 87.5,
    subCategories: [
      {
        id: '9-1',
        name: 'Data Governance',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
      {
        id: '9-2',
        name: 'Data Usage & Availability',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
      {
        id: '9-3',
        name: 'Open Data',
        items: [
          { number: 1, status: 'completed' as const },
          { number: 2, status: 'in-progress' as const },
          { number: 3, status: 'in-progress' as const },
        ],
      },
    ],
  },
  {
    id: '10',
    name: 'Research And Innovation',
    progress: 17.65,
    subCategories: [
      {
        id: '10-1',
        name: 'Innovation',
        items: [
          { number: 1, status: 'delayed' as const },
          { number: 2, status: 'delayed' as const },
          { number: 3, status: 'delayed' as const },
          { number: 4, status: 'delayed' as const },
        ],
      },
      {
        id: '10-2',
        name: 'Creative Solutions',
        items: [
          { number: 1, status: 'in-progress' as const },
          { number: 2, status: 'in-progress' as const },
        ],
      },
    ],
  },
];

export const topLeaders = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    role: 'Strategy Perspective',
    avatar: 'AA',
    score: 96,
  },
  {
    id: '2',
    name: 'WAQAS SHAUKAT',
    role: 'Beneficiary Perspective',
    avatar: 'WS',
    score: 94,
  },
  {
    id: '3',
    name: 'Mohammad Al-Mansour',
    role: 'IT Perspective',
    avatar: 'MM',
    score: 92,
  },
];

export const recentActivitiesList = [
  {
    id: '1',
    action: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    user: 'Ahmed Khaled',
    timestamp: '5 Mins Ago',
  },
  {
    id: '2',
    action: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    user: 'Mona Hamed',
    timestamp: '20 Mins Ago',
  },
  {
    id: '3',
    action: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    user: 'Admin',
    timestamp: '1 Hour Ago',
  },
];

export const monthlyPerformanceData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Apr', value: 55 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 65 },
  { month: 'Jul', value: 70 },
  { month: 'Aug', value: 68 },
  { month: 'Sep', value: 72 },
  { month: 'Oct', value: 75 },
  { month: 'Nov', value: 78 },
  { month: 'Dec', value: 80 },
];

export const categoryDetails: Record<string, CategoryDetail> = {
  '1': {
    id: '1',
    name: 'Strategy And Planning',
    categoryTag: 'Strategy & Planning',
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    progress: 97.78,
    evidence: {
      total: 4,
      underReview: 3,
      inProgress: 2,
      completed: 1,
    },
    overview: {
      objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
      implementationRequirements: 'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following: A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy. B. Strategic Initiatives, Programs, And Performance Indicators. C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives. D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
      evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
      relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
      scope: 'All Government Entities.',
    },
    leaders: [
      {
        id: '1',
        name: 'Ahmed Al-Ali',
        role: 'Strategy Perspective',
        avatar: 'AA',
        email: 'ahmed.ali@company.com',
      },
      {
        id: '2',
        name: 'Sara Ibrahim',
        role: 'Planning Lead',
        avatar: 'SI',
        email: 'sara.ibrahim@company.com',
      },
    ],
  },
  '2': {
    id: '2',
    name: 'Organization And Culture',
    categoryTag: 'Organization & Culture',
    description: 'Build A Digital-First Organizational Culture That Supports Innovation And Continuous Improvement',
    progress: 70.83,
    evidence: {
      total: 5,
      underReview: 2,
      inProgress: 2,
      completed: 1,
    },
    overview: {
      objective: 'Establish A Digital Culture That Promotes Innovation, Collaboration, And Continuous Learning Across The Organization.',
      implementationRequirements: 'Implement Organizational Culture Transformation Initiatives, Including: A. Digital Leadership Development Programs. B. Employee Training And Capacity Building. C. Change Management Strategies. D. Performance Measurement And Feedback Systems.',
      evidenceDocuments: 'Submit Documentation Of Culture Transformation Activities, Training Records, And Performance Metrics.',
      relatedRegulations: 'Human Resources Development Fund Regulations.',
      scope: 'All Organizational Units And Employees.',
    },
    leaders: [
      {
        id: '1',
        name: 'Mona Hamed',
        role: 'Culture Lead',
        avatar: 'MH',
        email: 'mona.hamed@company.com',
      },
      {
        id: '2',
        name: 'Rami AlSharif',
        role: 'Training Manager',
        avatar: 'RA',
        email: 'rami.alsharif@company.com',
      },
    ],
  },
  '3': {
    id: '3',
    name: 'Operations And Execution',
    categoryTag: 'Operations & Execution',
    description: 'Optimize Business Processes And Operational Efficiency Through Digital Solutions',
    progress: 80.0,
    evidence: {
      total: 6,
      underReview: 2,
      inProgress: 3,
      completed: 1,
    },
    overview: {
      objective: 'Streamline Business Operations Through Digital Process Automation And Optimization.',
      implementationRequirements: 'Redesign And Digitize Core Business Processes, Including: A. Process Mapping And Analysis. B. Automation Implementation. C. Performance Monitoring Systems. D. Continuous Improvement Mechanisms.',
      evidenceDocuments: 'Submit Process Documentation, Automation Reports, And Performance Dashboards.',
      relatedRegulations: 'Government Operations Efficiency Standards.',
      scope: 'All Core Business Processes.',
    },
    leaders: [
      {
        id: '1',
        name: 'Khalid Al-Mansouri',
        role: 'Operations Manager',
        avatar: 'KM',
        email: 'khalid.mansouri@company.com',
      },
      {
        id: '2',
        name: 'Fatima Al-Zahra',
        role: 'Process Analyst',
        avatar: 'FZ',
        email: 'fatima.zahra@company.com',
      },
    ],
  },
  '4': {
    id: '4',
    name: 'Business Continuity',
    categoryTag: 'Business Continuity',
    description: 'Ensure Organizational Resilience Through Comprehensive Risk Management And Continuity Planning',
    progress: 90.59,
    evidence: {
      total: 7,
      underReview: 1,
      inProgress: 1,
      completed: 5,
    },
    overview: {
      objective: 'Maintain Business Continuity And Organizational Resilience Through Effective Risk Management.',
      implementationRequirements: 'Develop And Implement Business Continuity Plans, Including: A. Risk Assessment And Mitigation Strategies. B. Disaster Recovery Procedures. C. Backup And Redundancy Systems. D. Regular Testing And Updates.',
      evidenceDocuments: 'Submit Business Continuity Plans, Risk Assessments, And Test Results.',
      relatedRegulations: 'Business Continuity Management Standards.',
      scope: 'All Critical Business Functions.',
    },
    leaders: [
      {
        id: '1',
        name: 'Omar Al-Rashid',
        role: 'Risk Manager',
        avatar: 'OR',
        email: 'omar.rashid@company.com',
      },
      {
        id: '2',
        name: 'Layla Al-Mutairi',
        role: 'Continuity Specialist',
        avatar: 'LM',
        email: 'layla.mutairi@company.com',
      },
    ],
  },
  '5': {
    id: '5',
    name: 'Information Technology',
    categoryTag: 'Information Technology',
    description: 'Build Robust IT Infrastructure And Support Systems For Digital Operations',
    progress: 75.0,
    evidence: {
      total: 8,
      underReview: 3,
      inProgress: 2,
      completed: 3,
    },
    overview: {
      objective: 'Establish A Modern, Secure, And Scalable IT Infrastructure To Support Digital Transformation.',
      implementationRequirements: 'Deploy IT Infrastructure And Support Systems, Including: A. Network Infrastructure Setup. B. Server And Storage Systems. C. Security And Compliance Measures. D. Cloud Infrastructure Integration.',
      evidenceDocuments: 'Submit Infrastructure Documentation, Security Certifications, And System Architecture Diagrams.',
      relatedRegulations: 'IT Infrastructure Standards And Cybersecurity Regulations.',
      scope: 'All IT Systems And Infrastructure.',
    },
    leaders: [
      {
        id: '1',
        name: 'Yusuf Al-Harbi',
        role: 'IT Director',
        avatar: 'YH',
        email: 'yusuf.harbi@company.com',
      },
      {
        id: '2',
        name: 'Noura Al-Shehri',
        role: 'Infrastructure Lead',
        avatar: 'NS',
        email: 'noura.shehri@company.com',
      },
    ],
  },
  '6': {
    id: '6',
    name: 'Comprehensive Governance',
    categoryTag: 'Comprehensive Governance',
    description: 'Implement Comprehensive Governance Frameworks For Digital Operations',
    progress: 64.44,
    evidence: {
      total: 9,
      underReview: 4,
      inProgress: 2,
      completed: 3,
    },
    overview: {
      objective: 'Establish Comprehensive Governance Frameworks To Ensure Effective Digital Operations Management.',
      implementationRequirements: 'Develop Governance Platforms And Frameworks, Including: A. Governance Structure And Policies. B. Compliance Monitoring Systems. C. Performance Management Tools. D. Stakeholder Engagement Mechanisms.',
      evidenceDocuments: 'Submit Governance Documentation, Policy Frameworks, And Compliance Reports.',
      relatedRegulations: 'Digital Governance Standards And Regulations.',
      scope: 'All Governance Functions And Platforms.',
    },
    leaders: [
      {
        id: '1',
        name: 'Hassan Al-Qahtani',
        role: 'Governance Director',
        avatar: 'HQ',
        email: 'hassan.qahtani@company.com',
      },
      {
        id: '2',
        name: 'Amira Al-Dosari',
        role: 'Compliance Manager',
        avatar: 'AD',
        email: 'amira.dosari@company.com',
      },
    ],
  },
  '7': {
    id: '7',
    name: 'Channels And Services',
    categoryTag: 'Channels & Services',
    description: 'Deliver High-Quality Digital Services Through Multiple Channels',
    progress: 100.0,
    evidence: {
      total: 6,
      underReview: 0,
      inProgress: 0,
      completed: 6,
    },
    overview: {
      objective: 'Provide High-Quality Digital Services Through Multiple Channels To Meet Citizen And Business Needs.',
      implementationRequirements: 'Develop And Deploy Digital Service Channels, Including: A. Service Quality Standards. B. Multi-Channel Service Delivery. C. User Experience Optimization. D. Service Performance Monitoring.',
      evidenceDocuments: 'Submit Service Documentation, Quality Reports, And User Satisfaction Metrics.',
      relatedRegulations: 'Digital Service Delivery Standards.',
      scope: 'All Public-Facing Services And Channels.',
    },
    leaders: [
      {
        id: '1',
        name: 'Zainab Al-Fahad',
        role: 'Service Director',
        avatar: 'ZF',
        email: 'zainab.fahad@company.com',
      },
      {
        id: '2',
        name: 'Majed Al-Sulaimani',
        role: 'Channel Manager',
        avatar: 'MS',
        email: 'majed.sulaimani@company.com',
      },
    ],
  },
  '8': {
    id: '8',
    name: 'Beneficiary Centralization',
    categoryTag: 'Beneficiary Centralization',
    description: 'Centralize Beneficiary Management And Engagement For Better Service Delivery',
    progress: 60.0,
    evidence: {
      total: 5,
      underReview: 2,
      inProgress: 3,
      completed: 0,
    },
    overview: {
      objective: 'Centralize Beneficiary Management To Improve Service Delivery And User Experience.',
      implementationRequirements: 'Implement Beneficiary Centralization Systems, Including: A. User Engagement Platforms. B. Relationship Management Systems. C. Experience Optimization Tools. D. Feedback And Analytics Systems.',
      evidenceDocuments: 'Submit Beneficiary Management Documentation, Engagement Reports, And Experience Metrics.',
      relatedRegulations: 'Customer Relationship Management Standards.',
      scope: 'All Beneficiary Interactions And Services.',
    },
    leaders: [
      {
        id: '1',
        name: 'Reem Al-Mutawa',
        role: 'Engagement Manager',
        avatar: 'RM',
        email: 'reem.mutawa@company.com',
      },
      {
        id: '2',
        name: 'Faisal Al-Otaibi',
        role: 'UX Lead',
        avatar: 'FO',
        email: 'faisal.otaibi@company.com',
      },
    ],
  },
  '9': {
    id: '9',
    name: 'Government Data',
    categoryTag: 'Government Data',
    description: 'Manage Government Data Effectively Through Governance, Usage, And Open Data Initiatives',
    progress: 87.5,
    evidence: {
      total: 7,
      underReview: 2,
      inProgress: 2,
      completed: 3,
    },
    overview: {
      objective: 'Establish Effective Data Governance And Management To Support Data-Driven Decision Making.',
      implementationRequirements: 'Implement Data Management Systems, Including: A. Data Governance Frameworks. B. Data Usage And Availability Platforms. C. Open Data Initiatives. D. Data Quality And Security Measures.',
      evidenceDocuments: 'Submit Data Governance Documentation, Usage Reports, And Open Data Catalogs.',
      relatedRegulations: 'Data Governance And Open Data Regulations.',
      scope: 'All Government Data Assets.',
    },
    leaders: [
      {
        id: '1',
        name: 'Salma Al-Ghamdi',
        role: 'Data Director',
        avatar: 'SG',
        email: 'salma.ghamdi@company.com',
      },
      {
        id: '2',
        name: 'Tariq Al-Shammari',
        role: 'Data Analyst',
        avatar: 'TS',
        email: 'tariq.shammari@company.com',
      },
    ],
  },
  '10': {
    id: '10',
    name: 'Research And Innovation',
    categoryTag: 'Research & Innovation',
    description: 'Foster Innovation And Creative Solutions Through Research And Development',
    progress: 17.65,
    evidence: {
      total: 4,
      underReview: 1,
      inProgress: 2,
      completed: 1,
    },
    overview: {
      objective: 'Promote Innovation And Research To Drive Creative Solutions For Digital Transformation Challenges.',
      implementationRequirements: 'Establish Innovation Programs And Research Initiatives, Including: A. Innovation Labs And Centers. B. Research And Development Projects. C. Creative Solution Development. D. Innovation Measurement And Evaluation.',
      evidenceDocuments: 'Submit Innovation Documentation, Research Reports, And Solution Case Studies.',
      relatedRegulations: 'Innovation And Research Development Standards.',
      scope: 'All Innovation And Research Activities.',
    },
    leaders: [
      {
        id: '1',
        name: 'Dina Al-Mazrouei',
        role: 'Innovation Lead',
        avatar: 'DM',
        email: 'dina.mazrouei@company.com',
      },
      {
        id: '2',
        name: 'Waleed Al-Harbi',
        role: 'Research Manager',
        avatar: 'WH',
        email: 'waleed.harbi@company.com',
      },
    ],
  },
};

export const evidenceDocuments: Document[] = [
  {
    number: '5.4.1.1',
    name: 'Digital_Transformation_Plan.Pdf',
    lead: 'Ahmed Khaled',
    preparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Approved',
  },
  {
    number: '5.4.1.2',
    name: 'KPI_Framework.Xlsx',
    lead: 'Mona Hamed',
    preparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
  {
    number: '5.4.1.3',
    name: 'Roadmap_Version1.Docx',
    lead: 'Rami AlSharif',
    preparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
];

export const evidenceTableHeaders: TableHeader[] = [
  { key: 'number', label: 'Document Number' },
  { key: 'name', label: 'Document Name' },
  { key: 'lead', label: 'Document Lead' },
  { key: 'preparer', label: 'Document Preparer' },
  { key: 'date', label: 'Date' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'status', label: 'Status' },
];

export const comments: Comment[] = [
  {
    id: '1',
    name: 'Sara Ibrahim',
    text: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05',
    avatar: 'E',
  },
  {
    id: '2',
    name: 'Mona Hamed',
    text: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05',
    avatar: 'M',
  },
];
