# MongoDB Setup Guide

The backend requires MongoDB to be running. You have two options:

## Option 1: MongoDB Atlas (Cloud - Recommended for Quick Start)

MongoDB Atlas is a free cloud database service. This is the easiest way to get started.

### Steps:

1. **Create a free account:**
   - Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. **Create a cluster:**
   - Click "Build a Database"
   - Choose the FREE tier (M0)
   - Select a cloud provider and region (choose closest to you)
   - Click "Create"

3. **Create a database user:**
   - Go to "Database Access" in the left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Whitelist your IP:**
   - Go to "Network Access" in the left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development) or add your IP
   - Click "Confirm"

5. **Get your connection string:**
   - Go to "Database" in the left menu
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
   - Replace `<password>` with your database user password
   - Add database name at the end: `mongodb+srv://username:password@cluster.mongodb.net/myself`

6. **Add to your .env file:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myself
   ```

## Option 2: Local MongoDB Installation

### Windows:

1. **Download MongoDB:**
   - Go to [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Select Windows, MSI package
   - Download and run the installer

2. **Install MongoDB:**
   - Run the installer
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Click "Install"

3. **Verify installation:**
   - MongoDB should start automatically as a Windows service
   - You can verify by opening Services (Win+R, type `services.msc`)
   - Look for "MongoDB Server" service

4. **Test connection:**
   - The default connection string is: `mongodb://localhost:27017/myself`
   - This is already set as the default in `server.js`

### macOS:

1. **Install using Homebrew:**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

2. **Start MongoDB:**
   ```bash
   brew services start mongodb-community
   ```

### Linux:

1. **Install MongoDB:**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install -y mongodb
   
   # Or follow official guide: https://www.mongodb.com/docs/manual/installation/
   ```

2. **Start MongoDB:**
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

## Verify Connection

After setting up MongoDB, restart your backend server:

```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server is running on port 5000
```

If you still see connection errors, check:
- MongoDB service is running
- Connection string in `.env` is correct
- Firewall isn't blocking port 27017 (for local) or port 27017 (for Atlas)

## Troubleshooting

### Error: "connect ECONNREFUSED 127.0.0.1:27017"
- **Solution:** MongoDB is not running. Start the MongoDB service.

### Error: "Authentication failed"
- **Solution:** Check your username and password in the connection string.

### Error: "IP not whitelisted" (Atlas)
- **Solution:** Add your IP address in MongoDB Atlas Network Access.

### Error: "useNewUrlParser" or "useUnifiedTopology" warnings
- **Solution:** These are already fixed in the latest code. Make sure you have the updated `server.js`.
