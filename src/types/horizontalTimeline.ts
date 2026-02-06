export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  status: 'completed' | 'upcoming';
}

export interface HorizontalTimelineProps {
  milestones: TimelineMilestone[];
  year?: number;
}
