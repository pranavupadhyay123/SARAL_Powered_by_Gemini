# SARAL 🚨🌍  
## Smart AI-driven Response & Action Layer

SARAL is a next-generation, **AI-powered disaster response platform** designed to bridge the communication gap between citizens in distress and centralized command authorities.  
It uses **Google Gemini** as a real-time **incident intelligence engine**, enabling rapid classification, prioritization, and response guidance during emergencies.

---

## 📖 Table of Contents

- System Architecture  
- Key Features  
  - 👮 Command Center (Admin)  
  - 🙋 Citizen App (User)  
- Tech Stack  
- Prerequisites  
- Installation & Setup  
- Configuration  
- Recent Updates & Fixes  
- Project Structure  
- License  

---

## 🏗 System Architecture

SARAL follows a **real-time client–server architecture** with a secure AI proxy layer.

### 1. Real-Time Communication Layer
- Powered by **Socket.IO**
- Enables bidirectional, event-driven communication
- Citizen reports (SOS, hazards, medical alerts) are instantly broadcast to the Command Center  
- No database polling — events propagate live

### 2. Intelligence Layer (Gemini Proxy)
- Frontend captures text, images, or audio
- Data is sent to the backend via `/api/gemini`
- Backend securely injects the Gemini API key
- **Gemini analyzes the incident and returns structured intelligence**:
  - Incident type
  - Severity (Critical / Moderate / Minor)
  - Confidence score
  - Reasoning and recommended actions

### 3. Mapping & Visualization Layer
- **Leaflet.js** for interactive geospatial visualization
- Google Hybrid Satellite Tiles (HTTPS)
- Live incident markers and active unit tracking

---

## 🌟 Key Features

### 👮 Command Center (Admin)

The centralized dashboard for authorities and responders.

- **Live Incident Feed**  
  Real-time incoming reports (SOS, hazards, medical, missing persons)

- **Gemini Intelligence Engine**  
  - Multimodal analysis (text, image, audio)
  - Severity classification
  - Confidence scoring
  - Actionable response recommendations

- **Geospatial Tracking**  
  - Live map of incidents and users
  - Visual priority awareness

- **Resource Management**  
  - Ambulances, fire units, drone squads

- **Broadcast Alert System**  
  - Flood, earthquake, and fire alerts sent to all users

---

### 🙋 Citizen App (User)

A lightweight, mobile-friendly Progressive Web App (PWA) interface.

- **✨ AI Hazard Eye**  
  Capture an image of a situation (e.g., damaged building).  
  Gemini analyzes and auto-identifies hazard type and severity.

- **🆘 One-Touch SOS**  
  Instantly sends:
  - Live location
  - User ID
  - Environmental audio snapshot

- **🤖 AI Survival Guide**  
  Gemini-powered safety assistant  
  Examples:
  - “How to stop bleeding?”
  - “Earthquake safety steps”

- **🌐 Multi-Language Support**  
  English, Hindi, Spanish, Korean, Japanese, Chinese

- **📦 Offline Preparedness Tools**  
  Go-bag checklist and emergency readiness guides

- **🤝 Community Module**  
  Request help or register as a volunteer

- **🔍 Missing Person Finder**  
  Upload and broadcast missing person details

---

## 🛠 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **Socket.IO**

### AI
- **Google Gemini (Multimodal: Text, Image, Audio)**  
  Used as a **decision-making and incident intelligence engine**, not a chatbot

### Frontend
- HTML5
- JavaScript (ES6+)
- Tailwind CSS (CDN)

### Mapping & Vision
- Leaflet.js
- Google Hybrid Satellite Tiles
- Face-API.js (client-side vision support)

---

## 📋 Prerequisites

Ensure the following are installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Modern web browser (Chrome recommended)

---

## 🚀 Installation & Setup

### 1. Clone or Extract the Project
```bash
git clone <repository-url>
cd saral-backend
