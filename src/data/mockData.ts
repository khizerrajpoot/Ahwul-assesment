// Mock data for the application

export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
}

export interface Perspective {
  id: string;
  name: string;
  progress: number;
  color: string;
}

export interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  user: string;
}

export interface EvidenceCard {
  type: 'total' | 'in-progress' | 'under-review' | 'completed';
  count: number;
  label: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}

export interface Document {
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: 'Approved' | 'Pending Review';
}

export interface TableHeader {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TrackingItem {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  assignee: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

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

// Summary cards matching the design
export const summaryCards = [
  { value: '78.65%', label: 'Overall Progress', icon: 'cards1.svg' },
  { value: '95', label: 'Total Criteria', icon: 'cards2.svg' },
  { value: '52', label: 'Completed Criteria', icon: 'cards3.svg' },
  { value: '386', label: 'Evidence Documents', icon: 'cards4.svg' },
  { value: '302', label: 'Evidence (Completed)', icon: 'cards5.svg' },
  { value: '258', label: 'Uploaded To DGA', icon: 'cards6.svg' },
];

// Horizontal timeline milestones
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

// Progress Status Categories
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

// Top Performing Leaders
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

// Recent Activities (matching design)
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

// Monthly Performance Data
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

// Category Details Data
export interface CategoryDetail {
  id: string;
  name: string;
  categoryTag: string;
  description: string;
  progress: number;
  evidence: {
    total: number;
    underReview: number;
    inProgress: number;
    completed: number;
  };
  overview: {
    objective: string;
    implementationRequirements: string;
    evidenceDocuments: string;
    relatedRegulations: string;
    scope: string;
  };
  leaders: Leader[];
}

export const categoryDetails: Record<string, CategoryDetail> = {
  '1': {
    id: '1',
    name: 'Digital Transformation Strategic Planning',
    categoryTag: 'Strategy & Planning',
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    progress: 100,
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

export interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  avatar: string;
}

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
