# Digital Transformation & Compliance Tracking Platform

A modern React application for tracking digital transformation initiatives and compliance management, built as a technical assessment.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tahwul-assesment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── ActivityFeed.tsx
│   │   ├── AuditReadiness.tsx
│   │   ├── ProgressByPerspective.tsx
│   │   ├── ProgressChart.tsx
│   │   └── Timeline.tsx
│   ├── details/            # Details page components
│   │   ├── EvidenceSummary.tsx
│   │   └── LeadersSection.tsx
│   └── shared/             # Reusable components
│       ├── Card.tsx
│       ├── Navigation.tsx
│       └── StatCard.tsx
├── data/
│   └── mockData.ts         # Mock data for the application
├── pages/
│   ├── Dashboard.tsx       # Main dashboard screen
│   ├── DetailsPage.tsx     # Strategic planning details page
│   └── TrackingPage.tsx    # Task tracking screen
├── App.tsx                  # Main app component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles with Tailwind
```

## 🎨 Features

### 1. Dashboard Screen
- **Summary Statistics Cards**: Display key metrics with trend indicators
- **Project Timeline**: Visual timeline showing project phases and status
- **Progress by Perspective**: Progress bars for different organizational perspectives
- **Progress Chart**: Line chart showing progress over time (using Recharts)
- **Recent Activities Feed**: Activity log with user actions and timestamps
- **Audit Readiness Widget**: Overall readiness score and checklist status

### 2. Details Page (Strategic Planning)
- **Header Section**: Title, category badge, and progress indicator
- **Evidence Summary Cards**: Four cards showing total, in-progress, under-review, and completed evidence
- **Tab Navigation**: Switch between Overview and Evidence tabs
- **Structured Content Sections**:
  - Objective
  - Requirements (with checkmarks)
  - Scope
  - Timeline with phase status
- **Leaders Section**: Project leaders with roles and contact information

### 3. Tracking Screen
- **Summary Statistics**: Total, completed, in-progress, and blocked tasks
- **Task Table**: Comprehensive table with:
  - Task title and status indicators
  - Assignee information with avatars
  - Due dates
  - Priority levels
  - Tags
- **Progress Summary Panel**: Overall completion metrics
- **Quick Actions Panel**: Common actions for task management

## 🛠️ Technology Stack

- **React 19** - UI library with functional components and hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Recharts** - Chart library for data visualization
- **Lucide React** - Modern icon library

## 🏗️ Architecture & Design Decisions

### Component Structure
- **Separation of Concerns**: Components are organized by feature (dashboard, details, shared)
- **Reusability**: Shared components (Card, StatCard, Navigation) are used across pages
- **Composition**: Complex pages are built from smaller, focused components

### State Management
- **Local State**: Using React hooks (useState) for component-level state
- **Mock Data**: All data is static/mocked in `mockData.ts` (no backend required)

### Styling Approach
- **Tailwind CSS**: Utility-first approach for rapid development and consistency
- **Responsive Design**: Mobile-first responsive breakpoints using Tailwind's grid system
- **Design System**: Consistent color palette, spacing, and typography

### Code Quality
- **TypeScript**: Full type safety for better maintainability
- **Functional Components**: Modern React patterns with hooks
- **Clean Code**: Descriptive variable names, proper component composition

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (multi-column layouts with sidebars)

## 🎯 Assumptions Made

1. **No Backend Required**: All data is mocked/static as per requirements
2. **Design Interpretation**: Since I couldn't access the Figma link directly, I created a professional, modern UI based on the requirements description
3. **Navigation**: Added a top navigation bar for better UX (not explicitly required but improves usability)
4. **Color Scheme**: Used a professional blue/gray color scheme typical for enterprise dashboards
5. **Chart Library**: Used Recharts as it's lightweight and React-friendly
6. **Icons**: Used Lucide React for consistent, modern icons

## 🚀 What I Would Improve with More Time

1. **Accessibility**:
   - Add ARIA labels and roles
   - Keyboard navigation improvements
   - Screen reader optimizations
   - Focus management

2. **Performance**:
   - Implement React.memo for expensive components
   - Code splitting with React.lazy
   - Virtual scrolling for large lists
   - Image optimization

3. **Features**:
   - Search and filtering functionality
   - Date range pickers for timeline
   - Export functionality (PDF, CSV)
   - Real-time updates (WebSocket integration)
   - User authentication and authorization
   - Dark mode support

4. **Testing**:
   - Unit tests with Vitest
   - Component tests with React Testing Library
   - E2E tests with Playwright or Cypress
   - Visual regression testing

5. **Code Quality**:
   - ESLint configuration refinement
   - Prettier for code formatting
   - Husky for pre-commit hooks
   - More comprehensive TypeScript types

6. **UI/UX Enhancements**:
   - Loading states and skeletons
   - Error boundaries and error handling
   - Toast notifications for actions
   - Drag-and-drop for task management
   - More interactive charts with drill-down

7. **Backend Integration**:
   - API service layer
   - Data fetching with React Query
   - Optimistic updates
   - Error handling and retry logic

## 📝 Notes

- The application uses mock data stored in `src/data/mockData.ts`
- All routes are functional and can be navigated via the top navigation bar
- The design follows modern UI/UX best practices with clean layouts and intuitive navigation
- Components are typed with TypeScript for better developer experience

## 📄 License

This project was created as a technical assessment.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
