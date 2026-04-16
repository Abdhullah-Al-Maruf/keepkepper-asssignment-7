# 👥 KeenKeeper — Keep Your Friendships Alive

A smart and simple friendship tracking app that helps you stay connected with your friends by reminding you when to reach out and tracking your interactions over time.

---

## 🚀 Live Project

🔗 **Live Site: "  i will update it later "

---

## 📌 Project Description

**KeenKeeper** is a responsive web application built with React that allows users to manage friendships effectively. It keeps track of when you last contacted your friends and helps maintain strong relationships through reminders and interaction logs.

You can view your friends, check their status, log interactions (call, text, video), and analyze your communication patterns.

---

## 🛠️ Technologies Used

* ⚛️ **React.js** — UI development
* 🔀 **React Router DOM** — Page navigation
* 🎨 **Tailwind CSS** — Styling
* 🌼 **DaisyUI** — Prebuilt UI components
* 📊 **Recharts** — Data visualization
* 🔔 **React Toastify** — Notifications

---

## ✨ Key Features

### 👥 Friend Management System

* Display friends from a JSON file
* Responsive card layout (4-column on large screens)
* Each card includes:

  * Profile image
  * Name
  * Days since last contact
  * Tags
  * Status indicator (color-based)

---

### 👤 Friend Details Page

* Two-column layout:

  * Left: Profile info, bio, email, tags, status
  * Right:

    * 📊 Stats (days, goal, next due date)
    * 🎯 Relationship goal section
    * ⚡ Quick check-in actions

* Action buttons:

  * ⏰ Snooze
  * 📦 Archive
  * 🗑️ Delete *(UI only)*

---

### ⚡ Interaction Logging (Core Feature)

* Buttons:

  * 📞 Call
  * 💬 Text
  * 🎥 Video

* On click:

  * Adds timeline entry automatically
  * Shows toast notification

---

### 📜 Timeline Page

* Displays all interaction history

* Each entry shows:

  * 📅 Date
  * 🔣 Interaction type
  * 📝 Title (e.g., "Call with Ahsan")

* 🔍 Filter by:

  * Call / Text / Video

---

### 📊 Friendship Analytics (Challenge Feature)

* Pie chart visualization of:

  * Call vs Text vs Video interactions
* Built using **Recharts**

---

## 🎯 UI Sections

* 🔝 Navbar with active link highlighting
* 🎯 Banner with CTA button
* 📋 Friends Grid Section
* 📜 Timeline Page
* 📊 Stats Page
* 🦶 Footer
* ❌ Custom 404 Page

---

## 📁 Data Handling

* Friend data stored in `friends.json`
* Includes realistic fields like:

  * name, email, bio
  * status (overdue / almost due / on-track)
  * goal & next contact date

---

## 📱 Responsive Design

Fully responsive across:

* Mobile 📱
* Tablet 📲
* Desktop 💻

---

## ⚙️ Extra Functionalities

* 🔄 Loading spinner while fetching data
* 🔔 Toast notifications on actions
* 🔁 No crash on page reload (proper routing setup)

---

## 🏆 Challenge Features Implemented

* ✅ Friendship Analytics Page
* ✅ Timeline Filtering

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Abdhullah-Al-Maruf/keepkepper-asssignment-7

# Go to project folder
cd keenkeeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---


## 💡 Future Improvements

* Search friends 🔍
* Sort timeline (newest/oldest)
* Add authentication 🔐
* Backend integration 🌐

---

## 🧑‍💻 Author

**md maruf**
Diploma in Computer Science & Technology (CST)

---
