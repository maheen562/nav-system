# Employee Directory & Navigation System

A React-based employee directory application with navigation sidebar, filtering capabilities, and dashboard.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

- **Git** (optional, for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)

## Installation

1. **Clone the repository** (or download the project)
```bash
   git clone git@github.com:maheen562/nav-system.git
   cd nav-system
```

2. **Install dependencies**
```bash
   npm install
```

   This will install all required packages:
   - React 19.2.4
   - React Router DOM 7.13.0
   - TanStack React Table 8.21.3
   - Material-UI (MUI) 7.3.8
   - React Pro Sidebar 1.1.0

## Running the Application

### Development Mode

Start the development server:
```bash
npm start
```

- The application will open automatically in your browser at [http://localhost:3000](http://localhost:3000)
- The page will reload when you make changes
- You will see any lint errors in the console

### Production Build

Create an optimized production build:
```bash
npm build
```

- Builds the app for production to the `build` folder
- Correctly bundles React in production mode
- Optimizes the build for best performance
- The build is minified and filenames include hashes

## Running Tests

Launch the test runner in interactive watch mode:
```bash
npm test
```

## Project Structure
```
nav-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sidebar navigation
│   │   ├── EmployeeDirectory.jsx  # Employee table with filters
│   │   ├── Dashboard.jsx       # Dashboard component
│   │   ├── FilterFunction.jsx  # Search filter component
│   │   └── DebouncedInput.jsx  # Debounced input for search
│   ├── App.js                  # Main app component with routing
│   ├── App.css                 # App styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## Features

- **Employee Directory**: View and filter employee data
  - Search by name
  - Filter by department (Engineering, Marketing, Sales, HR)
  - Filter by status (Active, On Leave, Remote)
  - Real-time filtering with debounced search

- **Dashboard**: Landing page with overview

- **Responsive Sidebar Navigation**: Navigate between different sections

- **React Router**: Client-side routing for seamless navigation

## Technologies Used

- **React** (19.2.4) - Frontend framework
- **React Router DOM** (7.13.0) - Routing
- **TanStack React Table** (8.21.3) - Table management and filtering
- **Material-UI** (7.3.8) - UI components
- **React Pro Sidebar** (1.1.0) - Sidebar navigation

## Troubleshooting

### Port 3000 is already in use

If you see an error that port 3000 is already in use:
```bash
# Kill the process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module not found errors

Clear cache and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot reload issues

Stop the server and restart:
```bash
# Press Ctrl+C to stop
npm start
```

## Browser Support

### Development
- Last version of Chrome
- Last version of Firefox  
- Last version of Safari

## Learn More

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Router Documentation](https://reactrouter.com/)
- [TanStack Table Documentation](https://tanstack.com/table/latest)
- [Material-UI Documentation](https://mui.com/)

## License

This project is private and not licensed for public use.
