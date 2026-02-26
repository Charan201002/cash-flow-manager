# 💰 Cash Flow Manager

🚀 A Full-Stack Personal Finance Management Application built using **Spring Boot**, **JWT Authentication**, and **React (Vite + TailwindCSS)**.

> Designed to help users track income, expenses, categories, and financial analytics securely with modern UI and robust backend architecture.

---

## 🌐 Live Demo
Coming Soon...

---

## 📸 Screenshots

### 🔐 Authentication
- Secure JWT-based Login & Signup
- Role-based access control

### 📊 Dashboard
- Total Balance Overview
- Income & Expense Summary
- Interactive Charts
- Recent Transactions

### 💳 Transactions
- Add / Edit / Delete Income
- Add / Edit / Delete Expenses
- Category Management
- Emoji Picker for Categories

---

## 🏗 Architecture Overview
Frontend (React + Tailwind)
↓
Axios API Calls
↓
Spring Boot REST Controllers
↓
Service Layer (Business Logic)
↓
Repository Layer (JPA)
↓
MySQL Database


### 🔐 Security Flow
User Login → JWT Generated → Stored in Frontend →
Sent in Authorization Header →
JwtRequestFilter Validates →
Secure API Access Granted

---

## 🛠 Tech Stack

### 🔹 Backend
- Java 21
- Spring Boot 3
- Spring Security
- JWT Authentication
- JPA / Hibernate
- MySQL
- Maven

### 🔹 Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Context API
- Recharts

### 🔹 Other Integrations
- Cloudinary (Profile Image Upload)
- Email Service Integration
- Excel Export Support

---

## ✨ Features

### 👤 Authentication
- Secure Registration & Login
- Password Encryption (BCrypt)
- JWT Token Validation
- Protected Routes

### 💰 Finance Management
- Add Income
- Add Expenses
- Category Management
- Delete Confirmation Modals

### 📊 Analytics Dashboard
- Total Balance Calculation
- Monthly Financial Overview
- Interactive Pie & Line Charts
- Recent Transactions Section

### 📁 Profile Management
- Upload Profile Image
- Email Notifications

---

## 📂 Project Structure
cash-flow-manager/
│
├── backend/
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── entity/
│ ├── dto/
│ ├── security/
│ └── config/
│
└── frontend/
├── components/
├── pages/
├── context/
├── hooks/
└── util/


---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run

Configure your database inside:
application.properties

Frontend Setup
cd frontend
npm install
npm run dev

App runs at:
http://localhost:5173
