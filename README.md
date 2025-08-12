# 🏥 Medi-Consult

A comprehensive healthcare management platform that connects patients with doctors through seamless appointment booking and medical consultations.

## ✨ Features

### 👥 Multi-User System
- **Patients**: Book appointments, manage profiles, view medical reports
- **Doctors**: Manage appointments, update profiles, view dashboard analytics
- **Admins**: Oversee the entire system, add doctors, manage appointments

### 🗓️ Appointment Management
- Real-time appointment booking with available time slots
- Appointment cancellation and completion tracking
- Doctor availability management
- Appointment history and status tracking

### 💳 Multiple Payment Options
- **Razorpay** integration for online payments
- **Stripe** payment processing
- **SSLCommerz** payment gateway support
- Payment verification and receipt management

### 🤖 AI-Powered Medical Reports
- AI-generated medical reports using **Google Gemini**
- Interactive chat assistance for medical queries
- Report generation with QR code integration
- Comprehensive patient data analysis

### 📱 Modern User Experience
- Responsive design with **Tailwind CSS**
- Real-time notifications with toast messages
- Intuitive navigation and user-friendly interface
- QR code generation for easy report sharing

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Notification system
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization
- **bcrypt** - Password hashing

### AI & Integrations
- **Google Generative AI (Gemini)** - AI-powered medical assistance
- **Cloudinary** - Image and media management
- **Multer** - File upload handling

### Payment Gateways
- **Razorpay** - Indian payment gateway
- **Stripe** - International payment processing
- **SSLCommerz** - Bangladeshi payment solution

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
- **Node.js** (v16 or higher)
- **MongoDB** database
- **npm** or **yarn** package manager

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm run server
```

### Frontend Setup (Patient Portal)
```bash
# Navigate to frontend directory
cd MediConsult-frontend/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Admin Panel Setup
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create `.env` files in the backend directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# AI Integration
GEMINI_API_KEY=your_google_gemini_api_key

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

# SSL Commerce
SSLCZ_STORE_ID=your_ssl_store_id
SSLCZ_STORE_PASSWORD=your_ssl_store_password

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# URLs
FRONTEND_URL=http://localhost:5173
```

## 📋 Core Features Breakdown

### Patient Features
- User registration and authentication
- Browse and filter doctors by speciality
- Book appointments with real-time availability
- Multiple payment options for appointments
- View and manage appointment history
- Access AI-generated medical reports
- Update personal profile information

### Doctor Features
- Secure doctor login portal
- Comprehensive dashboard with analytics
- Manage appointment schedules
- Mark appointments as completed or cancelled
- Update profile and availability status
- View patient information and history

### Admin Features
- Complete system oversight
- Add and manage doctor profiles
- Monitor all appointments across the platform
- Generate system-wide reports and analytics
- Manage user accounts and permissions

## 🌟 Key Highlights

- **Seamless Booking**: Intuitive appointment scheduling with real-time slot availability
- **Multi-Payment Support**: Flexible payment options catering to different regions
- **AI Integration**: Smart medical assistance and report generation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Secure Authentication**: JWT-based authentication with password encryption
- **Real-time Updates**: Live notifications and status updates
- **Image Management**: Cloudinary integration for profile pictures and documents

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 🖥️ Desktop computers
- 📱 Mobile phones  
- 📊 Tablets
- 💻 Laptops

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected API routes with middleware
- Input validation and sanitization
- Secure file upload handling

## 🎨 UI/UX Features

- Clean and modern interface design
- Intuitive navigation structure
- Real-time loading states and feedback
- Toast notifications for user actions
- Smooth animations and transitions
- Accessible design principles

---

**Medi-Consult** - Connecting healthcare providers with patients through technology 🩺💻
