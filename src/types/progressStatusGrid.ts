export interface StatusItem {
    number: number;
    status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
}

export interface SubCategory {
    id: string;
    name: string;
    items: StatusItem[];
}

export interface Category {
    id: string;
    name: string;
    progress: number;
    subCategories: SubCategory[];
}

export interface ProgressStatusGridProps {
    categories: Category[];
}
