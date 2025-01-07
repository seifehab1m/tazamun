# tazamun

## Overview

This project is a full-stack application that includes a **login system**, a **dashboard** with interactive charts, and a **data table** with search, filter, pagination, and sorting functionalities. It leverages **Next.js** for server-side rendering, **Chart.js** for data visualization, **Context API** for state management, and **Tailwind CSS** for responsive design.

---

## Features

### Login System

- Users can log in using email `seif@gmail.com` and password `123456`.
- The login is handled through server-side actions and an API route to verify credentials.
- **Context API** is used for state management, storing the logged-in email and making it accessible across the entire application.

### Dashboard

- After login, users are redirected to a **Dashboard** where data is visualized using **Chart.js**.
- The dashboard fetches data server-side and displays it in **Line**, **Bar**, and **Doughnut** charts.

### Data Table

- A **data table** that fetches data server-side.
- Features include **search**, **filter**, **sort**, and **pagination** to manage large datasets efficiently.
- **Lazy loading** is implemented for the table components to optimize performance.

### Responsive Design

- The entire application is responsive, making use of **Tailwind CSS** for a clean and consistent layout across devices.

---

## Technologies Used

- **Next.js**: Server-side rendering and API routes.
- **React**: For building the user interface.
- **Chart.js**: For visualizing the data with interactive charts.
- **Context API**: For managing state across the application (e.g., storing user login data).
- **Tailwind CSS**: For responsive design and styling.
- **Lazy Loading**: For optimizing the loading of components like the data table.

---

## Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:
   https://github.com/seifehab1m/tazamun.git

2. Navigate to the project directory:
   cd tazamun

3. Install the required dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the application:
   The application will open in your default browser at **http://localhost:3000**

   ### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can check if they are installed by running the following commands in your terminal:

```bash
node -v
npm -v
```
