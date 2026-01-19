# PennyWise Lite 💸

**PennyWise Lite** is a premium, streamlined expense tracking application built with Next.js 15 and Firebase. It is designed to help you manage your finances with elegance and simplicity.

## Features ✨

### � Expense Tracking
- **Smart Management**: Add, edit, and delete expenses with ease.
- **Categorization**: Organize your spending into custom categories.
- **Real-time Sync**: Instant updates across devices using Cloud Firestore.

### 📊 Financial Insights
- **Interactive Dashboard**: View your monthly income vs. expenditure at a glance.
- **Visual Analytics**: Analyze spending patterns with beautiful charts.
- **Transaction History**: Keep track of every penny with a detailed transaction log.

### 🎨 Premium Experience
- **Modern UI**: Built with Shadcn UI and a custom "Indigo" theme.
- **Dark Mode**: Fully supported dark mode for comfortable viewing.
- **Responsive Design**: Works perfectly on desktop and mobile.

## Tech Stack 🛠️

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, Lucide Icons
- **Backend**: Firebase (Auth, Firestore)
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod

## Getting Started ⚡

### Prerequisites
- Node.js 18+ installed
- A Firebase project created

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/pennywise-lite.git
    cd pennywise-lite
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Firebase**
    - Rename `.env.example` to `.env.local`.
    - Add your Firebase credentials:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    # ...other variables
    ```

4.  **Run the application**
    ```bash
    npm run dev
    ```

## License 📄

This project is licensed under the MIT License.