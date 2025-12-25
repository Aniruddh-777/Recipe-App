# 🍽️ Recipe App

A simple and interactive **Recipe Web Application** built using **HTML, CSS, and JavaScript**.  
This app fetches recipe data from a public API and displays recipes as cards with images, cuisine type, and cooking time. Users can also search recipes by name.

---

## 🚀 Features

- 📋 Display recipes as cards
- 🔍 Search recipes by name
- 🖼️ Recipe images with title and details
- ⏱️ Shows estimated cooking time
- 🎨 Clean and responsive UI
- 🌐 Data fetched dynamically using API

---

## 🛠️ Tech Stack

- **HTML5** – Structure of the application  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Application logic  
- **Axios** – For fetching API data  
- **TheMealDB API** – Recipe data source  
- **Google Material Icons** – Icons  

---

## 📁 Project Structure

recipe-app/
│
├── index.html # Main page
├── index.js # Main JavaScript logic
├── single-recipe.html # Single recipe page (future use)
├── single-recipe.js # Single recipe logic
│
├── getRecipeCard.js # Recipe card component
├── getCuisine.js # Cuisine filter component
│
├── style.css # Main styles
├── reset.css # CSS reset
├── utility.css # Utility classes
│
└── README.md # Project documentation

yaml
Copy code

---

## ▶️ How to Run the Project

### ✅ Recommended (Best Way)
1. Open the project in **VS Code**
2. Install **Live Server** extension
3. Right-click `index.html`
4. Select **Open with Live Server**

---

### ⚠️ Important Note
> Do **NOT** open `index.html` by double-clicking.  
> The project uses **ES Modules**, which require a local server.

---

## 🔗 API Used

- **TheMealDB API**
https://www.themealdb.com/api/json/v1/1/search.php?s=

yaml
Copy code

---

## 🧪 Known Limitations

- Cuisine filter is temporarily disabled
- Single recipe page UI is under development
- Cooking time is randomly generated (API limitation)

---

## 📌 Future Improvements

- ✅ Enable cuisine-based filtering
- 📄 Complete single recipe page UI
- ❤️ Add favorites feature
- 🌍 Deploy using GitHub Pages

---

## 👨‍💻 Author

**Aniruddh Nayak**  
- GitHub: https://github.com/your-username

---

## 📄 License

This project is for **learning and educational purposes**.