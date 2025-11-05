# MyDashboard

A modern, responsive React admin dashboard built for managing tasks, user data, and analytics.

## Features

- User authentication with login and registration forms.
- Multi-tabbed login (account and phone login options).
- Display of user data and task details using cards and tables.
- Integration with charts for data visualization (e.g., pie charts).
- Support for selecting residential addresses using cascader dropdowns.
- Fully responsive layout optimized for desktop and mobile.
- Styled with Ant Design components and Tailwind CSS for a clean, modern UI.

## Tech Stack

- **Frontend:** React, TypeScript  
- **UI Library:** [Ant Design](https://www.jsdelivr.com/package/npm/antd)  
- **Charts:** @ant-design/plots  
- **State Management:** React hooks, optionally Redux for global state  
- **Routing:** React Router  
- **Form Handling:** Ant Design Form and Pro Components  

## Project Structure

src/
├─ components/      # Reusable React components
├─ pages/           # Pages like Login, Dashboard, FormPage, etc.
├─ stores/          # State management (e.g., login store)
├─ App.tsx          # Main app entry
└─ index.tsx        # React DOM rendering

