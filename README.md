# 🚀 Star Wars Character Profile App

This is a **full-stack application** that allows users to **search for Star Wars characters** and view detailed profiles, including:
- **Basic information** (height, mass, birth year, etc.)
- **Films they appeared in**
- **Starships they have flown**

The project consists of:
1. **Backend** - An Express.js **Gateway API** that proxies requests to [SWAPI](https://swapi.dev/).
2. **Frontend** - A React-based **single-page application** for searching and displaying character profiles.

---

## 📌 Features
### 🌍 **Backend (Gateway API)**
- 🔄 **Proxy API for SWAPI** – Frontend interacts with a local Express API instead of SWAPI directly.
- 🚀 **Handles errors** – Provides meaningful error responses.
- 🌐 **CORS enabled** – Allows frontend to interact seamlessly.
- 🔍 **Search functionality** – Queries **SWAPI** dynamically.

### 🖥️ **Frontend (React App)**
- 🔍 **Search bar** – Find characters by name.
- 📄 **Character profile page** – Displays key details.
- 🎬 **Films & Starships section** – Fetches and lists related resources.
- 🛠️ **Modular & scalable** – Built with React functional components.

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/star-wars-character-profile.git
cd star-wars-character-profile
