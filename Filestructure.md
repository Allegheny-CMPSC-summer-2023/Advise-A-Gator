## Directory Structure

```
src/
│
├── components/ - UI components used throughout the application
│ ├── Cards.js - Represents the course cards displayed in the dashboard
│ ├── Layout.js - Main layout component wrapping the application
│ ├── Navbar.js - Navigation bar component for site-wide navigation
│ └── Roadmap/ - Components and data related to the visual roadmap
│ ├── boxesData/ - Data for the boxes in the roadmap
│ ├── components/ - Individual components for the roadmap
│ ├── contentData/ - Data for the content in the roadmap
│ ├── modal/ - Components for the modal functionality in the roadmap
│ └── ... - Other roadmap related components and data
│
├── curriculumData/ - Data and scripts related to the curriculum
│ ├── config_schema.json - Schema configuration for the curriculum data
│ ├── current_data.json - Single source of truth for all courses
│ ├── csMajor.js, dsMajor.js, infMajor.js, seMajor.js - Major specific data
│ └── script.js - Script related to curriculum data processing
│
├── pages/ - Main pages of the application
│ ├── dashboard/ - Components related to the dashboard view
│ │ ├── BoardCS.js - Dashboard for Computer Science major
│ │ ├── BoardDS.js - Dashboard for Data Science major
│ │ ├── BoardINF.js - Dashboard for Informatics major
│ │ ├── BoardSE.js - Dashboard for Software Engineering major
│ │ ├── logic.js - Logic for the dashboard functionality
│ │ └── style.css - Styles specific to the dashboard
│ ├── CsMajor.js, DsMajor.js, InfMajor.js, Software.js - Major specific pages
│ └── Home.js - Home page component
│
├── styles/ - Global styles for the application
│ ├── index.css - Base styles
│ └── styles.css - Additional global styles
│
├── App.js - Main application component
├── MyRouter.js - Router setup for the application
└── index.js - Entry point for the application
```

### Goodluck Allegheny Gator Developers! - Tugi
