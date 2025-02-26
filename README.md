# 🌌 Star Wars Profile Search

🚀 **Discover Star Wars Characters!**  
This React-based web app allows users to **search for Star Wars characters** using a search bar or take a **fun quiz** to determine which Star Wars character they resemble the most.

---

## ✨ Features

### 🔍 **Search for a Character**
- Enter a character’s name to retrieve their details (**height, mass, birth year, species, films, and starships**).
- Uses a **custom-built Express.js Gateway API** to fetch data from **SWAPI**.

### 🎭 **Star Wars Personality Quiz**
- Answer a few fun Star Wars-related questions to find out **which character best matches you**!
- Fetches the character’s details and displays them.

### 🚀 **Gateway API (Backend)**
- Acts as a middleware between the front-end and the **SWAPI API**.
- Fetches additional details like **species names** that are otherwise only provided as URLs in SWAPI.

### 💻 **Modern React Features**
- Uses **React Hooks (`useState`)** for state management.
- Implements **dynamic event handling** (e.g., button color change when selected in the quiz).

---

## 📸 Demo

🚀 _Coming soon!_

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, React Icons  
- **Backend:** Node.js, Express.js  
- **Testing:** Jest, Supertest  
- **API Used:** [SWAPI (Star Wars API)](https://swapi.dev/)  
- **Styling:** CSS
- **Dev:** Git and GitHub

---

## 📂 Project Structure

```plaintext
starwarsprofile/
│── public/                # Static assets
│── src/
│   ├── components/        # React Components
│   │   ├── Searchbar.js   # Character search input
│   │   ├── SearchResults.js  # Displays character details
│   │   ├── Characterquiz.js  # Star Wars personality quiz
│   ├── styles/            # CSS files
│   ├── App.js             # Main React app
│   ├── index.js           # React root
│── backend/
│   ├── server.js          # Express Gateway API
│   ├── server.test.js     # Jest tests for backend API
│── package.json           # Dependencies & scripts
│── README.md              # Documentation
```
## 🚀 Installation & Setup
1️⃣ Clone the Repository
```
git clone https://github.com/laurenneoliver/starwarsprofile.git

cd starwarsprofile
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Run the Backend API
```
npm run dev  # Starts Express.js API on http://localhost:3000
```
4️⃣ Run the React Frontend
```
npm start  # Starts React App on http://localhost:3000
```
✅ Running Tests
```
npm run test # run front and back end testing
```
```
npm run test:frontend # Runs Jest test for frontend rendering
```
```
npm run test:backend  # Runs Jest tests for backend API
```
🎨 Screenshots
🚀 Coming soon!

🔮 Future Enhancements
🎥 Fetch & display character images (e.g., using an external Star Wars API).
🧪 More testing 
