# 📰 Newsletter Subscription Renewal Flow

## Overview

A React-based application that simulates a Newsletter Subscription Renewal Flow. This interactive simulator allows testing of subscription flow scenarios with real-time event logging and a sleek, modern UI.

## 📂 Folder Structure

```
newsletter_subscription_flow/
├── backend/
│   ├── controllers/
│   │   └── FlowController.js       # Handles subscription renewal logic
│   ├── models/
│   │   └── Flow.js                 # Mongoose schema for subscription flows
│   ├── routes/
│   │   └── FlowRoutes.js           # API endpoints for managing flows
│   ├── server.js                   # Entry point for the backend server
│   └── .env                        # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       ├── background.webp     # Background image
│   │       └── react.svg           # Default React logo
│   ├── src/
│   │   ├── Components/
│   │   │   ├── FlowLog.jsx         # Displays real-time flow logs
│   │   │   ├── FlowSimulator.jsx   # Simulates subscription flow
│   │   ├── App.jsx                 # Root React component
│   │   ├── index.css               # Global CSS styles
│   │   ├── main.jsx                # Entry point for React app
│   └── vite.config.js              # Vite configuration
│
├── package.json                    # Project metadata and dependencies
├── README.md                       # Project documentation
└── .gitignore                      # Ignored files for version control
```

## ✨ Features

1. **Flow Simulator**
   - Interactive simulation of newsletter renewal process
   - Dynamic testing of flow scenarios and stages

2. **Flow Log Viewer**
   - Real-time event logging
   - Scrollable interface for comprehensive log review

3. **Dynamic Background**
   - Visually immersive custom background image
   - Responsive global styling

4. **Modern UI**
   - Clean, professional design
   - Hover effects and adaptive button states
   - Fully responsive across devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/newsletter-subscription-flow.git
   ```

2. Navigate to backend directory:
   ```bash
   cd newsletter_subscription_flow/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create `.env` file with:
   ```
   PORT=5000
   MONGO_URI=<your_mongo_db_connection_string>
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd newsletter_subscription_flow/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

## 🔗 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/flows` | GET | Fetch all subscription flows |
| `/api/flows` | POST | Create a new subscription flow |
| `/api/flows/:id` | DELETE | Delete a specific subscription flow |

## 🛠️ Technologies


- **Frontend**: React, Vite, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git/GitHub


![Screenshot 2024-11-19 010137](https://github.com/user-attachments/assets/72bf37a5-388e-4889-8b9d-52e7a1750b61)

![image](https://github.com/user-attachments/assets/b2fff9cc-1acf-4129-b33b-adbb787505e4)

