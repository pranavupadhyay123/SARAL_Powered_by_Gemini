/**
 * Architecture Note:
 * - Real-time transport handled via Socket.IO
 * - Gemini inference executed client-side for hackathon demo reliability
 * - Production deployment would centralize Gemini inference server-side
 */

const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow connections from anywhere for hackathon demo
        methods: ["GET", "POST"]
    }
});

// 1. Serve Static Files (The HTML/CSS/JS)
// We assume your HTML files are in a folder named 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 2. Routes
// http://localhost:3000/ -> Opens Command Center (Admin)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// http://localhost:3000/citizen -> Opens User App
app.get('/citizen', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'User_Interface.html'));
});

// 3. Real-Time Event Handling (Socket.IO)
io.on('connection', (socket) => {
    console.log(`[CONNECTED] Client ID: ${socket.id}`);

    // List of events to relay
    const events = [
        'LOCATION_UPDATE',  // GPS Tracking
        'SOS',              // Panic Button
        'HAZARD_REPORT',    // AI Hazard Eye
        'MEDICAL_REPORT',   // AI Medic
        'VOLUNTEER_JOIN',   // Community
        'MISSING_PERSON',   // Lost & Found
        'FOUND_PERSON',     // Face Scanner Match
        'DISASTER_ALERT'    // Admin Broadcast
    ];

    // Listen for these events and broadcast them to everyone
    events.forEach(eventType => {
        socket.on(eventType, (data) => {
            console.log(`[EVENT: ${eventType}]`, data.userId || 'Admin');
            
            // Broadcast to all connected clients (Admin & Citizens)
            io.emit(eventType, data);
        });
    });

    socket.on('disconnect', () => {
        console.log(`[DISCONNECTED] Client ID: ${socket.id}`);
    });
});

// 4. Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`\n🚀 SARAL SERVER STARTED`);
    console.log(`-----------------------------------------------`);
    console.log(`👮 Command Center: http://localhost:${PORT}/`);
    console.log(`🙋 Citizen App:    http://localhost:${PORT}/citizen`);
    console.log(`-----------------------------------------------\n`);
});