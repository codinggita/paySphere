<p align="center">
  <img src="https://img.shields.io/badge/PaySphere-Payroll%20in%20Seconds-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjIwIiBmaWxsPSIjNjM2NmYxIi8+PHRleHQgeD0iNTAiIHk9IjY4IiBmb250LXNpemU9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC13ZWlnaHQ9ImJvbGQiPlA8L3RleHQ+PC9zdmc+" alt="PaySphere" />
</p>

<h1 align="center">PaySphere 💰</h1>

<p align="center">
  <strong>Payroll in seconds, not hours.</strong><br/>
  A lightweight payroll management system built for small businesses in India.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47a248?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=flat-square&logo=tailwindcss" alt="Tailwind" />
</p>

---

## ✨ What is PaySphere?

PaySphere follows a **"Digital Ledger"** design philosophy — minimal UI, clear structure, fast interactions, zero unnecessary complexity. Inspired by the simplicity of **Notion** and the polish of **Stripe**.

> **Built for small teams** — not enterprise HR departments. Add your employees, log updates through a chat-style interface, and run payroll in one click.

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 👥 **Employee Dashboard** | Card-based grid view with name, role, salary & status at a glance |
| 💬 **Chat-style Updates** | Add leaves, overtime, bonuses & deductions through a messaging-like interface |
| ⚡ **One-click Payroll** | Calculate salaries for all active employees instantly |
| 📄 **PDF Payslips** | Download professional payslips with full salary breakdowns |
| 🔐 **Authentication** | JWT-based signup/login with protected routes |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet & mobile |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js · Tailwind CSS |
| **Backend** | Node.js · Express.js |
| **Database** | MongoDB |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### 1. Clone & Install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment

Create `backend/.env` with your MongoDB URI:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 3. Run the App

```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

### 4. Open Your Browser

Navigate to **http://localhost:5173**

### 🔑 Demo Login

| Field | Value |
|-------|-------|
| Email | `dev@paysphere.com` |
| Password | `password123` |

---

## 📁 Project Structure

```
paysphere/
│
├── frontend/                     # React frontend (Vite)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route pages
│   ├── index.html
│   └── vite.config.js
│
├── backend/                     # Express backend
│
└── README.md
```

---

## 🧮 Payroll Logic

```
Net Salary = Base Salary
             - (Leave Days × Daily Salary)
             + (Overtime Hours × Hourly Rate × 1.5)
             + Bonuses
             - Deductions
```

| Constant | Value |
|----------|-------|
| Working days/month | 26 |
| Hours/day | 8 |
| Overtime multiplier | 1.5× |

---

## 🎨 UI/UX Philosophy

Figma Prototype : [Figma](https://www.figma.com/proto/v7oAom74sFxLaaf0JO8UvI/Untitled?node-id=501-1971&viewport=16164%2C15242%2C0.12&t=n1yfHauC6Rlr6HhY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=501%3A1971&page-id=11%3A29)

---

<p align="center">
  <strong>PaySphere</strong> — Payroll in seconds, not hours. ⚡
</p>
