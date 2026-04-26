# TechConf 2026 | Technical Event Schedule App

A modern, responsive single-page web application designed for a 1-day technical conference. This app features a dynamic 6-talk schedule, real-time category filtering, and a sleek "Dark Tech" aesthetic.

## 🚀 Features

- **Dynamic Timeline**: A 6-talk track with automated 10-minute transitions and a scheduled lunch break.
- **Real-time Search**: Instant filtering of talks by category keywords (e.g., AI, Backend, Rust).
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing using CSS Grid and Flexbox.
- **Data-Driven**: Schedule content is decoupled from logic, stored in a structured `talks.json` file for easy updates.
- **Clean Architecture**: Separation of concerns between the Node.js/Express backend and the Vanilla JS/CSS frontend.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Data Storage**: JSON

## 📂 Project Structure

```text
.
├── data/
│   └── talks.json      # The "database" containing talk details
├── public/
│   ├── index.html      # Main entry point
│   ├── style.css       # Custom Dark Tech styling
│   └── script.js       # Frontend logic & filtering
├── server.js           # Node.js/Express server
├── package.json        # Project dependencies and scripts
└── .gitignore          # Git exclusion rules
```

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/babamade/babafemi-event-talks-app.git
   cd babafemi-event-talks-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

1. **Start the server:**
   ```bash
   node server.js
   ```

2. **View the app:**
   Open your browser and navigate to `http://localhost:3000`.

## 🧪 Usage & Testing

- **Searching**: Type into the search bar at the top. The schedule will filter automatically based on the `categories` associated with each talk.
- **Responsiveness**: Resize your browser window to see the layout adapt for mobile devices.
- **Updating Data**: To change the schedule, simply edit the objects in `data/talks.json`. The changes will reflect immediately upon page refresh.

## 📝 License

This project is licensed under the ISC License.
