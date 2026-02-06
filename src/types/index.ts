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

export interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  avatar: string;
}
