# Full Stack Blog Application

A responsive full-stack blog application that allows users to register, log in, and create blog posts through a simple and user-friendly interface. The project demonstrates frontend development, REST API integration, and backend development using Node.js and Express.js.

## 📌 Project Overview

The **Full Stack Blog Application** is developed as part of an intermediate backend development module. It connects a frontend built with HTML, CSS, and JavaScript to a backend REST API developed using Node.js and Express.js.

The application demonstrates how frontend applications communicate with backend APIs to perform user authentication and blog-related operations.

## ✨ Features

- User Registration
- User Login
- Create Blog Posts
- Add Blog Title and Category
- Add Blog Content
- REST API Integration
- Frontend–Backend Communication
- Responsive User Interface
- Separate Frontend and Backend Structure

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST APIs

### Development Tools

- Visual Studio Code
- Git
- GitHub
- PowerShell

## 📂 Project Structure

```text
Blog Application/
│
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── create-blog.html
├── blog-details.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   │
│   └── routes/
│       ├── auth.js
│       └── blog.js
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm
- Visual Studio Code
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/nandini-datascience/full-stack-blog-application.git
```

### 2. Navigate to the Project

```bash
cd full-stack-blog-application
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Start the Backend Server

```bash
node server.js
```

The backend server will run at:

```text
http://localhost:5000
```

### 5. Run the Frontend

Open the project in Visual Studio Code and run the frontend using **Live Server**.

## 🔗 API Endpoints

### User Registration

```text
POST /api/register
```

### User Login

```text
POST /api/login
```

### Create Blog

```text
POST /api/blogs
```

### Example Blog Request

```json
{
  "title": "My First Blog",
  "content": "This is my first blog post."
}
```

## 🧪 API Testing

The backend APIs can be tested using:

- PowerShell
- Browser Developer Tools
- Postman

Example:

```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/blogs" -Method POST -ContentType "application/json" -Body '{"title":"My First Blog","content":"This is my first blog post."}'
```

## 📚 Module 2 – Intermediate Backend Development

This project covers the key objectives of Module 2:

- Node.js fundamentals
- Express.js server setup
- REST API development
- User registration API
- User login API
- Blog creation API
- Frontend and backend integration
- API testing
- Git and GitHub version control

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Developing REST APIs using Express.js
- Connecting frontend pages with backend APIs
- Handling HTTP POST requests
- Working with JSON data
- Organizing backend routes
- Testing APIs using PowerShell
- Managing projects using Git and GitHub

## 🔮 Future Improvements

The application can be extended with:

- Database integration
- User authentication and authorization
- Password encryption
- View all blogs
- Edit and delete blogs
- Search and filter functionality
- User profiles
- Blog comments
- Image upload functionality

## 👩‍💻 Author

**Nandini B**

BE – Data Science

---

⭐ _This project was developed as part of my Full Stack Web Development internship to gain practical experience in frontend and backend development._
