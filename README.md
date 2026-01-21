# 📝 Online Exam & Quiz Application

An Angular-based Online Exam application that enables users to assess their knowledge across multiple topics through interactive quizzes. The application features a scalable and well-structured authentication system and provides instant feedback on user performance.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration with advanced form validation
- Secure login and logout
- Forgot password flow (email verification & password reset)
- Change password
- Edit user profile
- Delete account
- Retrieve logged-in user information

---

### 🧠 Online Exam System
- Multiple quiz topics
- Instant evaluation and performance feedback
- Clean, responsive, and user-friendly UI

---

## 🏗️ Architecture & Design Patterns

This project follows **Clean Architecture principles** to ensure scalability, maintainability, and readability:

- **AuthService**
  - Handles all authentication-related API interactions
- **Adaptor Pattern**
  - Converts backend API responses into frontend-friendly data models
- **Separation of Concerns**
  - Clear separation between UI components, services, and business logic
- **Reusable UI Components**
  - Shared buttons, headers, and error-handling components
