# PixTv Max Backend - Setup and Configuration

## Prerequisites
- Node.js 16.x or later
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn package manager

## Installation

### 1. Install Dependencies
```bash
cd pix_tv_max_backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=3000
YOUR_BACKEND_URL=http://localhost:3000

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,https://your-frontend-domain.com

# Payment Integration (ZenoPay)
ZENOPAY_API_KEY=your-zenopay-api-key
ZENOPAY_SECRET=your-zenopay-secret

# Additional API Keys
# Add other API keys as needed
```

### 3. Database Setup
The application will automatically:
- Connect to MongoDB using the provided URI
- Create necessary collections
- Create a default admin user on first run:
  - Username: `admin`
  - Email: `admin@pixtvmax.tv`
  - Password: `admin123`

**Important**: Change the default admin password immediately after first login!

## Running the Server

### Development Mode
```bash
npm run dev
# or
nodemon server.js
```

### Production Mode
```bash
npm start
# or
node server.js
```

The server will start on the port specified in your `.env` file (default: 3000).

## API Endpoints

### Health Check
- `GET /api/health` - Server status check

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Content Management
- `GET /api/channels` - Get all channels
- `GET /api/banners` - Get banner content
- `GET /api/content` - Get content by type
- `POST /api/content` - Create new content (admin)

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/subscription` - Get subscription status

### Payment (if configured)
- `POST /api/payment/initiate` - Initiate payment
- `POST /api/payment/zenopay-webhook` - Payment webhook

## Database Schema

### Users Collection
- Device ID, email, premium access status, subscription details

### Channels Collection
- Channel information, streaming URLs, categories

### Content Collection
- Movies, series, sports content with metadata

### Banners Collection
- Promotional banners with images and links

### Admins Collection
- Admin users with roles and permissions

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Helmet.js security headers
- Input validation with Joi

## File Upload Support
The server supports file uploads for:
- Banner images
- Content thumbnails
- User avatars

Uploaded files are stored in the `uploads/` directory and served statically.

## Monitoring and Logging
- Health check endpoint for monitoring
- Console logging for server events
- Error handling middleware

## Deployment

### Environment Variables for Production
Ensure all environment variables are properly set:
- Use strong, unique JWT secret
- Configure production MongoDB URI
- Set correct CORS origins
- Use HTTPS in production

### Process Management
Consider using PM2 for production deployment:
```bash
npm install -g pm2
pm2 start server.js --name "pix-tv-max-backend"
```

## Troubleshooting

### Common Issues
1. **MongoDB Connection**: Verify URI and network access
2. **CORS Errors**: Check ALLOWED_ORIGINS configuration
3. **JWT Errors**: Verify JWT_SECRET is set
4. **File Upload Issues**: Check uploads directory permissions

### Logs
Check console output for detailed error messages and server events.

## API Documentation
For detailed API documentation, consider setting up Swagger/OpenAPI documentation or refer to the route definitions in `server.js`.

## Support
For technical issues, check:
1. Environment variable configuration
2. Database connectivity
3. Network and firewall settings
4. Node.js and npm versions

