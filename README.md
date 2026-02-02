# 🏥 Medi-Consult

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green)](https://mongodb.com)

> **A comprehensive healthcare management platform that connects patients with doctors through seamless appointment booking, AI-powered medical consultations, and integrated payment solutions.**

Medi-Consult bridges the gap between healthcare providers and patients by offering an intuitive, secure, and feature-rich platform for medical consultations, appointment management, and AI-assisted healthcare services.

## 🌟 Live Demo

- **Patient Portal**: [View Demo](https://medi-consult-frontend.vercel.app)
- **Admin Panel**: [View Demo](https://medi-consult-admin.vercel.app)
- **API Documentation**: [Explore API](https://medi-consult-backend.vercel.app/api-docs)

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Core Features](#-core-features-breakdown)
- [Security](#-security-features)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## ✨ Key Features

### � Core Functionality
- **Smart Appointment Booking**: Real-time availability checking with instant confirmation
- **Multi-Role Dashboard**: Customized interfaces for patients, doctors, and administrators
- **AI-Powered Healthcare**: Google Gemini integration for medical report generation and consultation assistance
- **Comprehensive Payment Integration**: Support for Razorpay, Stripe, and SSLCommerz payment gateways
- **Real-Time Communication**: Interactive chat system with AI assistance for medical queries

### � Multi-Role System
- **👨‍⚕️ Doctors**: Comprehensive dashboard, appointment management, patient history access
- **👤 Patients**: Easy booking, profile management, medical report access, payment tracking
- **🔧 Administrators**: System oversight, doctor onboarding, analytics, and user management

### 🗓️ Advanced Appointment System
- **Smart Scheduling**: AI-assisted slot recommendations based on doctor availability
- **Real-Time Updates**: Instant notifications for booking confirmations and changes
- **Flexible Management**: Easy rescheduling, cancellation, and completion tracking
- **Multi-Timezone Support**: Global accessibility with timezone-aware scheduling
- **Reminder System**: Automated email and SMS reminders for upcoming appointments

### � Comprehensive Payment Solutions
- **🏦 Multiple Gateways**: Razorpay (India), Stripe (Global), SSLCommerz (Bangladesh)
- **🔒 Secure Transactions**: PCI DSS compliant payment processing
- **💳 Flexible Options**: Credit/Debit cards, UPI, Net Banking, Digital Wallets
- **📄 Receipt Management**: Automated invoice generation and email delivery
- **🔄 Refund Processing**: Seamless refund handling for cancelled appointments

### 🤖 AI-Powered Healthcare Intelligence
- **📋 Smart Report Generation**: AI-generated medical reports using Google Gemini
- **💬 Interactive Chat Bot**: 24/7 AI assistance for medical queries and guidance
- **🔍 Symptom Analysis**: Preliminary symptom checking and health insights
- **📊 Health Analytics**: Pattern recognition in patient data for better care
- **📱 QR Code Integration**: Quick access to reports via QR code scanning

### 🎨 Modern User Experience
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Optimized performance with lazy loading and caching strategies
- **🎯 Intuitive Design**: User-centered design with accessibility best practices
- **🔔 Real-Time Notifications**: Instant updates with customizable notification preferences
- **🌙 Theme Support**: Light and dark mode options for user comfort
- **🌐 Multi-Language**: Internationalization support for global accessibility

## 🛠️ Technology Stack

### 🎨 Frontend Technologies
- **⚛️ React.js 18.2+** - Modern UI library with hooks and context
- **⚡ Vite** - Next-generation build tool with HMR
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **🛣️ React Router DOM** - Declarative routing for single-page applications
- **📡 Axios** - Promise-based HTTP client with interceptors
- **🔔 React Toastify** - Elegant notification system
- **🎯 Lucide React** - Beautiful and customizable icon library
- **📊 Chart.js** - Interactive charts and data visualization

### ⚙️ Backend Technologies
- **🟢 Node.js** - JavaScript runtime environment
- **🚀 Express.js** - Fast and minimalist web framework
- **🍃 MongoDB** - NoSQL database for flexible data storage
- **🏗️ Mongoose** - Elegant MongoDB object modeling
- **🔐 JWT** - Secure authentication and authorization
- **🔒 bcrypt** - Industry-standard password hashing
- **📝 Express Validator** - Middleware for data validation
- **⚡ Redis** - In-memory caching for improved performance

### 🤖 AI & External Services
- **🧠 Google Generative AI (Gemini)** - Advanced AI for medical report generation
- **☁️ Cloudinary** - Comprehensive media management and optimization
- **📁 Multer** - Secure file upload handling with validation
- **📧 Nodemailer** - Email service for notifications and reports
- **📱 Twilio** - SMS notifications and communication

### 💳 Payment Gateway Integration
- **💰 Razorpay** - Leading Indian payment gateway with UPI support
- **🌍 Stripe** - Global payment processing with advanced features
- **🇧🇩 SSLCommerz** - Comprehensive payment solution for Bangladesh market
- **🔄 Webhook Handling** - Real-time payment status updates and processing

### 🚀 DevOps & Deployment
- **☁️ Vercel** - Edge-optimized hosting for frontend applications
- **🐳 Docker** - Containerization for consistent deployment
- **📊 MongoDB Atlas** - Cloud database with automatic scaling
- **🔍 ESLint & Prettier** - Code quality and formatting tools
- **🧪 Jest** - Comprehensive testing framework

## 📁 Project Structure

```
Medi-Consult/
├── admin/                    # Admin panel frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Admin and doctor pages
│   │   ├── context/         # State management
│   │   └── assets/          # Images and icons
│   └── package.json
├── backend/                  # Server-side application
│   ├── controllers/         # Business logic
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Authentication & validation
│   └── config/             # Database and service configs
├── MediConsult-frontend/    # Patient frontend
│   └── frontend/
│       ├── src/
│       │   ├── components/  # UI components
│       │   ├── pages/      # Patient pages
│       │   ├── context/    # State management
│       │   └── assets/     # Images and resources
│       └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0+)
- **MongoDB** (v4.4 or higher) - [Installation Guide](https://docs.mongodb.com/manual/installation/)
- **Git** - [Download](https://git-scm.com/downloads)

### 🔧 Installation Steps

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/wallbreaker01/Medi-Consult.git
cd Medi-Consult
```

#### 2️⃣ Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file (see Environment Variables section)
cp .env.example .env

# Start development server
npm run dev

# Or start production server
npm start
```

#### 3️⃣ Frontend Setup (Patient Portal)
```bash
# Navigate to frontend directory
cd MediConsult-frontend/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

#### 4️⃣ Admin Panel Setup
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

#### 5️⃣ Start All Services
```bash
# From root directory, start all services concurrently
npm run dev:all
```

## 🔧 Environment Configuration

Create a `.env` file in the **backend** directory with the following configuration:

```env
# Server Configuration
NODE_ENV=development
PORT=4000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/medi-consult
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medi-consult

# Authentication & Security
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
JWT_EXPIRE=30d
BCRYPT_SALT_ROUNDS=12

# AI Integration
GEMINI_API_KEY=your_google_gemini_api_key

# Payment Gateway Configuration
# Razorpay (India)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Stripe (Global)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# SSLCommerz (Bangladesh)
SSLCZ_STORE_ID=your_ssl_store_id
SSLCZ_STORE_PASSWORD=your_ssl_store_password
SSLCZ_IS_LIVE=false

# Media Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Application URLs
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
BACKEND_URL=http://localhost:4000

# CORS Configuration
CORS_ORIGIN=http://localhost:5173,http://localhost:5174

# Redis Configuration (Optional - for caching)
REDIS_URL=redis://localhost:6379
```

> **⚠️ Security Notice**: Never commit your `.env` file to version control. Add it to your `.gitignore` file.

## 📚 API Documentation

### Base URL
```
Development: http://localhost:4000/api
Production: https://your-backend-url.vercel.app/api
```

### Authentication Endpoints
```http
POST /api/auth/register          # User registration
POST /api/auth/login            # User login
POST /api/auth/logout           # User logout
POST /api/auth/forgot-password  # Password reset request
POST /api/auth/reset-password   # Password reset confirmation
```

### User Management
```http
GET    /api/users/profile       # Get user profile
PUT    /api/users/profile       # Update user profile
GET    /api/users/appointments  # Get user appointments
DELETE /api/users/account       # Delete user account
```

### Appointment Management
```http
GET    /api/appointments        # Get all appointments (admin)
POST   /api/appointments        # Create new appointment
GET    /api/appointments/:id    # Get specific appointment
PUT    /api/appointments/:id    # Update appointment
DELETE /api/appointments/:id    # Cancel appointment
```

### Doctor Management
```http
GET    /api/doctors             # Get all doctors
GET    /api/doctors/:id         # Get doctor details
POST   /api/doctors             # Add new doctor (admin)
PUT    /api/doctors/:id         # Update doctor (admin/doctor)
DELETE /api/doctors/:id         # Remove doctor (admin)
```

### Payment Processing
```http
POST   /api/payments/razorpay   # Process Razorpay payment
POST   /api/payments/stripe     # Process Stripe payment
POST   /api/payments/sslcommerz # Process SSLCommerz payment
GET    /api/payments/verify/:id # Verify payment status
```

### AI Services
```http
POST   /api/ai/chat             # AI chat assistance
POST   /api/ai/generate-report  # Generate medical report
GET    /api/ai/reports/:id      # Get generated report
```

For detailed API documentation with request/response examples, visit our [Postman Collection](https://documenter.getpostman.com/view/your-collection-id).

## 🎯 Core Features Breakdown

### 👤 Patient Experience
- **🔐 Secure Registration**: Email verification and secure profile creation
- **🔍 Doctor Discovery**: Advanced search and filtering by speciality, location, and ratings
- **📅 Smart Booking**: Real-time availability with intelligent slot suggestions
- **💳 Flexible Payments**: Multiple payment options with secure transaction processing
- **📋 Health Records**: Comprehensive appointment history and medical report access
- **💬 AI Assistance**: 24/7 chat support for health queries and guidance
- **🔔 Notifications**: Automated reminders and updates via email/SMS

### 👨‍⚕️ Doctor Dashboard
- **📊 Analytics Dashboard**: Comprehensive insights into patient appointments and revenue
- **🗓️ Schedule Management**: Flexible availability settings and appointment oversight
- **👥 Patient Management**: Access to patient history and appointment details
- **📋 Report Generation**: AI-assisted medical report creation with templates
- **💼 Profile Management**: Complete control over professional information and credentials
- **📈 Performance Metrics**: Track consultation effectiveness and patient satisfaction

### 🔧 Administrative Control
- **👥 User Management**: Complete oversight of patient and doctor accounts
- **📊 System Analytics**: Real-time dashboard with key performance indicators
- **💰 Financial Overview**: Revenue tracking, payment analytics, and commission management
- **🏥 Doctor Onboarding**: Streamlined process for adding and verifying healthcare providers
- **🔍 Audit Logs**: Comprehensive tracking of all system activities and changes
- **⚙️ System Configuration**: Manage application settings, payment gateways, and integrations

## 🔒 Security & Compliance

### 🛡️ Authentication & Authorization
- **JWT Token Management**: Secure, stateless authentication with refresh token rotation
- **Role-Based Access Control**: Granular permissions for patients, doctors, and administrators
- **Password Security**: bcrypt hashing with configurable salt rounds
- **Session Management**: Automatic logout and session timeout handling
- **Multi-Factor Authentication**: Optional 2FA support for enhanced security

### 🔐 Data Protection
- **Encryption**: End-to-end encryption for sensitive medical data
- **HIPAA Compliance**: Healthcare data protection standards implementation
- **Data Validation**: Comprehensive input sanitization and validation
- **Secure File Uploads**: File type validation and malware scanning
- **Audit Trail**: Complete logging of data access and modifications

### 🌐 Infrastructure Security
- **HTTPS Enforcement**: SSL/TLS encryption for all communications
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Rate Limiting**: API protection against abuse and DDoS attacks
- **Environment Isolation**: Secure separation of development and production environments

## 🧪 Testing Strategy

### Unit Testing
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### Integration Testing
```bash
# Backend API tests
cd backend && npm run test:integration

# Frontend component tests
cd frontend && npm run test:e2e
```

### Testing Tools
- **Jest** - Unit testing framework
- **Supertest** - HTTP testing for APIs
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing
- **MongoDB Memory Server** - In-memory database for testing

## 🚀 Deployment Guide

### Production Deployment

#### Backend Deployment (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy backend
cd backend
vercel --prod
```

#### Frontend Deployment (Vercel)
```bash
# Deploy patient portal
cd MediConsult-frontend/frontend
vercel --prod

# Deploy admin panel
cd admin
vercel --prod
```

### Environment Setup
1. **Database**: Set up MongoDB Atlas cluster
2. **Environment Variables**: Configure production environment variables
3. **Domain Configuration**: Set up custom domains and SSL certificates
4. **CDN Setup**: Configure Cloudinary for global asset delivery
5. **Monitoring**: Set up error tracking and performance monitoring

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build -d

# Scale services
docker-compose up --scale backend=3 --scale frontend=2
```

## 🤝 Contributing

We welcome contributions from the community! Please follow our contribution guidelines:

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow **ESLint** configuration for code style
- Write **comprehensive tests** for new features
- Update **documentation** for API changes
- Follow **conventional commits** for commit messages

### Reporting Issues
- Use the [issue template](https://github.com/wallbreaker01/Medi-Consult/issues/new)
- Provide detailed reproduction steps
- Include environment information
- Add relevant screenshots or logs

## 📋 Roadmap

### 🔮 Upcoming Features
- **🎥 Video Consultations**: Real-time video calls between doctors and patients
- **📊 Advanced Analytics**: ML-powered insights for healthcare trends
- **🌍 Telemedicine**: Cross-border consultation capabilities
- **📱 Mobile App**: Native iOS and Android applications
- **🏥 Hospital Integration**: EHR system connectivity
- **💊 Prescription Management**: Digital prescription and pharmacy integration

### 🎯 Future Enhancements
- **Voice Assistant**: AI-powered voice interactions
- **Blockchain Integration**: Secure and immutable medical records
- **IoT Integration**: Wearable device data integration
- **Multi-Language Support**: Expanded localization
- **Insurance Integration**: Direct insurance claim processing

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Medi-Consult

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 💬 Support & Community

### 📞 Get Help
- **📖 Documentation**: [Comprehensive Guide](https://medi-consult-docs.vercel.app)
- **💬 Discord Community**: [Join our Discord](https://discord.gg/medi-consult)
- **🐛 Report Issues**: [GitHub Issues](https://github.com/wallbreaker01/Medi-Consult/issues)
- **📧 Email Support**: support@medi-consult.com

### 🌟 Show Your Support
Give a ⭐️ if this project helped you! Your support means a lot to us.

### 📊 Project Stats
[![GitHub stars](https://img.shields.io/github/stars/wallbreaker01/Medi-Consult.svg?style=social&label=Star)](https://github.com/wallbreaker01/Medi-Consult)
[![GitHub forks](https://img.shields.io/github/forks/wallbreaker01/Medi-Consult.svg?style=social&label=Fork)](https://github.com/wallbreaker01/Medi-Consult/fork)
[![GitHub issues](https://img.shields.io/github/issues/wallbreaker01/Medi-Consult.svg)](https://github.com/wallbreaker01/Medi-Consult/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/wallbreaker01/Medi-Consult.svg)](https://github.com/wallbreaker01/Medi-Consult/pulls)

---

<div align="center">
  <p>
    <strong>🏥 Medi-Consult</strong><br>
    <em>Revolutionizing Healthcare Through Technology</em>
  </p>
  <p>
    Made with ❤️ by the <a href="https://github.com/wallbreaker01">Medi-Consult Team</a>
  </p>
  
  <p>
    <a href="https://medi-consult.vercel.app">🌐 Live Demo</a> •
    <a href="https://github.com/wallbreaker01/Medi-Consult/wiki">📚 Documentation</a> •
    <a href="https://github.com/wallbreaker01/Medi-Consult/releases">🚀 Releases</a> •
    <a href="#-support--community">💬 Support</a>
  </p>
  
  <br>
  
  <p>
    <sub>Built with modern technologies for the future of healthcare 🩺✨</sub>
  </p>
</div>
