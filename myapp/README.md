# 🍴 FoodHub - Restaurant Web Application

A simple full-stack restaurant web application built using React,
Node.js and Express.

This project is created for learning:

- React
- Node.js
- Express
- REST API
- Docker
- AWS ECR
- AWS ECS
- CloudWatch
- GitHub Actions
- CI/CD

---

## 🏗️ Architecture

```text
              User
                |
                v
        React Frontend
          Nginx :80
                |
                | API Request
                v
       Node.js / Express
             :5000
                |
                v
          Menu Data
        (JavaScript)
