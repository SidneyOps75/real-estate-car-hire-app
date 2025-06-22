# 🏠🚗 PropertyCar Hub - Real Estate & Car Hire Platform

A comprehensive web application that combines real estate property management and car rental services in a single platform. Users can browse properties, rent cars, and manage their bookings through an intuitive dashboard.

## 🌟 Features

### Current Implementation
- **Landing Page**: Modern, responsive landing page with hero section and feature highlights
- **User Authentication**: Secure login/registration system with JWT tokens
- **Property Management**: Browse and manage real estate properties
- **Car Rental System**: Fleet management and booking system
- **Dashboard**: Unified dashboard for managing properties and car rentals
- **Responsive Design**: Mobile-first design using Tailwind CSS v4

### Planned Features
- **Advanced Search & Filtering**: Filter properties by location, price, type, and amenities
- **Booking Management**: Complete booking lifecycle management
- **Payment Integration**: Secure payment processing for rentals and leases
- **User Profiles**: Comprehensive user profile management
- **Reviews & Ratings**: User feedback system for properties and vehicles
- **Admin Panel**: Administrative interface for managing listings and users
- **Notifications**: Real-time notifications for bookings and updates
- **Mobile App**: React Native mobile application

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Build Tool**: Vite v5

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **CORS**: Enabled for cross-origin requests

### Database Schema
- **Users**: Authentication and profile management
- **Properties**: Real estate listings with location and pricing
- **Cars**: Vehicle fleet with availability status
- **Leases**: Property rental agreements
- **Bookings**: Car rental reservations

## 📁 Project Structure

```
real-estate-car-hire-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── pages/           # Page components
│   │   │   ├── Landing.jsx  # Landing page
│   │   │   ├── Login.jsx    # Authentication page
│   │   │   └── dashboard.jsx # User dashboard
│   │   ├── App.jsx          # Main app component
���   │   ├── main.jsx         # App entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── postcss.config.js    # PostCSS configuration
├── backend/                 # Express.js backend API
│   ├── routes/              # API route handlers
│   ├── controllers/         # Business logic controllers
│   ├── models/              # Database models
│   ├── server.js            # Server entry point
│   └── package.json         # Backend dependencies
├── schema.sql               # Database schema
├── .env                     # Environment variables
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-car-hire-app
   ```

2. **Database Setup**
   ```bash
   # Create PostgreSQL database
   createdb real_estate_car_hire
   
   # Run the schema
   psql -d real_estate_car_hire -f schema.sql
   ```

3. **Environment Configuration**
   ```bash
   # Copy and configure environment variables
   cp .env.example .env
   # Edit .env with your database credentials and JWT secret
   ```

4. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev  # Development mode with nodemon
   # or
   npm start    # Production mode
   ```

5. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev  # Development server
   ```

### Development Servers
- **Frontend**: http://localhost:3000 (or next available port)
- **Backend API**: http://localhost:5000

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **Tailwind CSS v4**: Utility-first CSS framework with latest features
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API requests

### Backend Technologies
- **Express.js**: Web application framework
- **PostgreSQL**: Relational database
- **JWT**: Stateless authentication
- **bcrypt**: Password hashing
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📊 Database Schema

### Core Tables
- **users**: User authentication and profiles
- **properties**: Real estate property listings
- **cars**: Vehicle fleet management
- **leases**: Property rental agreements
- **bookings**: Car rental reservations

### Relationships
- Users can have multiple leases and bookings
- Properties and cars maintain availability status
- Comprehensive audit trail with timestamps

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Properties
- `GET /api/properties` - List all properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create new property (admin)
- `PUT /api/properties/:id` - Update property (admin)

### Cars
- `GET /api/cars` - List all cars
- `GET /api/cars/:id` - Get car details
- `POST /api/cars` - Add new car (admin)
- `PUT /api/cars/:id` - Update car (admin)

### Leases & Bookings
- `GET /api/leases` - User's property leases
- `POST /api/leases` - Create new lease
- `GET /api/bookings` - User's car bookings
- `POST /api/bookings` - Create new booking

## 🎨 UI/UX Design

### Design System
- **Color Palette**: Indigo and blue gradient theme
- **Typography**: System fonts with responsive scaling
- **Components**: Reusable, accessible components
- **Layout**: CSS Grid and Flexbox for responsive layouts

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚧 Development Roadmap

### Phase 1: Core Platform (Current)
- [x] Basic authentication system
- [x] Property and car listing display
- [x] Responsive landing page
- [x] User dashboard
- [ ] Complete CRUD operations for all entities

### Phase 2: Enhanced Features
- [ ] Advanced search and filtering
- [ ] Booking management system
- [ ] User profile management
- [ ] Image upload and gallery
- [ ] Email notifications

### Phase 3: Business Features
- [ ] Payment integration (Stripe/PayPal)
- [ ] Reviews and ratings system
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Multi-language support

### Phase 4: Advanced Platform
- [ ] Mobile application (React Native)
- [ ] Real-time chat system
- [ ] Advanced analytics
- [ ] API rate limiting
- [ ] Caching layer (Redis)

## 🧪 Testing Strategy

### Planned Testing Approach
- **Unit Tests**: Jest for component and utility testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Cypress for user journey testing
- **Performance Tests**: Lighthouse CI integration

## 🚀 Deployment

### Recommended Deployment Stack
- **Frontend**: Vercel or Netlify
- **Backend**: Railway, Heroku, or DigitalOcean
- **Database**: PostgreSQL on Railway or AWS RDS
- **CDN**: Cloudflare for static assets

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# JWT
JWT_SECRET=your-super-secret-jwt-key

# Server
PORT=5000
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Use TypeScript for new components (migration planned)
- Maintain responsive design principles
- Write meaningful commit messages
- Add tests for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the API documentation at `/api/docs` (when implemented)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vite team for the lightning-fast build tool
- PostgreSQL community for the robust database

---

**Built with ❤️ for modern property and vehicle rental management**