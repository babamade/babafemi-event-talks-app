# TechConf 2026 Wiki

Welcome to the internal documentation for the TechConf 2026 Event App. This Wiki provides deep-dive information for developers and organizers.

---

## 🏗️ Project Architecture

The application follows a simple **Client-Server** architecture designed for performance and ease of maintenance.

### Backend (Server-side)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Responsibilities**:
  - Serves static assets (`index.html`, `style.css`, `script.js`) from the `public/` directory.
  - Provides a RESTful API endpoint to deliver event data.
  - Handles environment-based port configuration.

### Frontend (Client-side)
- **Technologies**: Vanilla HTML5, CSS3, and JavaScript (ES6+).
- **Design Pattern**: Single Page Application (SPA) style rendering.
- **Key Features**: 
  - **Dynamic Rendering**: Data is fetched and converted into HTML components at runtime.
  - **Event Delegation**: Used for category tag interaction to ensure high performance.
  - **Responsive Layout**: Uses CSS Grid for the timeline and Flexbox for component alignment.

---

## 📊 Data Model

All event content is centralized in `data/talks.json`. This allows for non-technical users to update the schedule without modifying the code.

### Talk Object Schema
```json
{
  "id": 1,
  "title": "Talk Title",
  "speakers": ["Speaker Name"],
  "categories": ["Category 1", "Category 2"],
  "startTime": "HH:MM",
  "endTime": "HH:MM",
  "description": "Full talk abstract..."
}
```

---

## 📡 API Reference

### GET `/api/talks`
Returns the full array of talks sorted by time.

**Response Body:**
`Array<Talk>`

---

## 💡 UX & Interaction Guide

### Real-time Filtering
The search algorithm performs a case-insensitive check across both `categories` and `speakers`. The view is updated on every keystroke (`input` event), eliminating the need for a "Submit" button.

### Interactive Elements
- **Category Tags**: Clicking any tag automatically populates the search bar and filters the view.
- **Transitions**: The app automatically injects "10 Minute Transition" markers between talks.
- **Lunch Break**: A special `lunch-card` is rendered specifically after the 3rd talk (13:20).

---

## 🛠️ Development & Customization

### Adding a New Talk
1. Open `data/talks.json`.
2. Add a new object following the schema.
3. Update the `startTime` and `endTime` following the 10-minute transition rule.
4. Refresh the page.

### Modifying the Theme
The application's colors are controlled by CSS variables in `public/style.css` under the `:root` selector. Changing these values will update the theme globally.
