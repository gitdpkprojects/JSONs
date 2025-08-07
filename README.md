# AquaFlow Irrigation - React Website

Professional irrigation sprinkler website built with React.js for selling irrigation sprinklers and parts.

## 🌟 Features

- **Modern React Application** with component-based architecture
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Product Showcase** with filtering functionality
- **Interactive Forms** for quotes and contact
- **Professional Services** section
- **Smooth Animations** with Framer Motion
- **Multi-page Navigation** with React Router

## 🛠️ Local Setup Instructions

### Prerequisites

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Code Editor** (VS Code recommended)

### Step 1: Create Project Directory

Open **Command Prompt** or **PowerShell** as Administrator and run:

```bash
# Navigate to your projects directory
cd C:\0_Projects\0_Projects

# Create the project directory
mkdir aquaflow-irrigation-react
cd aquaflow-irrigation-react
```

### Step 2: Initialize React Project

```bash
# Create React app
npx create-react-app . --force

# Install additional dependencies
npm install react-router-dom framer-motion @fortawesome/fontawesome-free react-intersection-observer
```

### Step 3: Project Structure

Create the following directory structure in your project:

```
C:\0_Projects\0_Projects\aquaflow-irrigation-react\
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

### Step 4: Create Directories

```bash
# Create necessary directories
mkdir src\components
mkdir src\pages
mkdir src\styles
mkdir src\data
mkdir src\hooks
mkdir src\utils
```

### Step 5: Replace/Create Files

Replace the generated files with the following content:

#### 📄 `package.json`
```json
{
  "name": "aquaflow-irrigation-react",
  "version": "1.0.0",
  "description": "Professional irrigation sprinkler website built with React",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "dev": "react-scripts start"
  },
  "keywords": [
    "irrigation",
    "sprinklers",
    "react",
    "ecommerce",
    "landscaping"
  ],
  "author": "AquaFlow Irrigation",
  "license": "MIT",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "react-router-dom": "^6.8.1",
    "@fortawesome/fontawesome-free": "^6.4.0",
    "react-intersection-observer": "^9.4.3",
    "framer-motion": "^10.12.4"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

#### 📄 `public\index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AquaFlow Irrigation - Professional Sprinkler Systems & Parts</title>
    <meta name="description" content="Premium irrigation sprinklers, parts, and systems for residential and commercial properties. Expert installation and maintenance services.">
    <meta name="theme-color" content="#2E8B57">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💧</text></svg>">
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
</html>
```

#### 📄 `src\index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

#### 📄 `src\App.js`
```javascript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### Step 6: Install Dependencies

```bash
# Install all dependencies
npm install
```

### Step 7: Start Development Server

```bash
# Start the development server
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

## 📁 Complete File Contents

### Components Directory (`src\components\`)

Create the following component files. I'll provide the complete code for each:

1. **Header.js** - Navigation header with mobile menu
2. **Footer.js** - Footer with company info and links
3. **HeroSection.js** - Hero section with animations
4. **ProductsSection.js** - Product showcase with filtering
5. **ProductCard.js** - Individual product cards
6. **ServicesSection.js** - Services display
7. **AboutSection.js** - Company information
8. **ContactSection.js** - Contact form

### Pages Directory (`src\pages\`)

1. **HomePage.js** - Main landing page
2. **ProductsPage.js** - Products page
3. **ServicesPage.js** - Services page
4. **AboutPage.js** - About page
5. **ContactPage.js** - Contact page

### Styles Directory (`src\styles\`)

1. **index.css** - Global styles and CSS variables
2. **App.css** - App component styles
3. **Header.css** - Header component styles
4. **Footer.css** - Footer component styles
5. **HeroSection.css** - Hero section styles
6. **ProductsSection.css** - Products section styles
7. **ProductCard.css** - Product card styles

### Data Directory (`src\data\`)

1. **products.js** - Products and services data

## 🚀 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🌐 Website Features

### 🏠 Homepage
- Professional hero section with irrigation theme
- Product showcase with filtering
- Services overview
- About company section
- Contact form

### 🛒 Products
- Sprinkler heads (Rotary, Fixed Spray, Impact)
- Parts & Components (Valves, Controllers, Regulators)
- Complete Systems (Residential & Commercial)
- Interactive filtering by category
- Add to cart functionality

### 🔧 Services
- System Installation
- Maintenance & Repair
- System Upgrades

### 📞 Contact
- Professional contact form
- Business information
- Quote request system

## 🎨 Design Features

- **Color Scheme**: Professional green/blue irrigation theme
- **Typography**: Modern Inter font family
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions with Framer Motion
- **Icons**: Font Awesome for professional icons

## 🛠️ Technology Stack

- **React 18.2.0** - Frontend framework
- **React Router 6.8.1** - Navigation and routing
- **Framer Motion 10.12.4** - Animations and transitions
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Font Awesome 6.0.0** - Icon library
- **Create React App** - Build tooling and development server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy Options
- **Netlify** - Drag and drop the build folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use `gh-pages` package
- **Traditional Hosting** - Upload build folder contents

## 📝 Customization

### Adding New Products
Edit `src\data\products.js` and add new product objects.

### Changing Colors
Modify CSS variables in `src\styles\index.css`:
```css
:root {
  --primary-color: #2E8B57; /* Sea Green */
  --secondary-color: #4682B4; /* Steel Blue */
  --accent-color: #20B2AA; /* Light Sea Green */
}
```

### Adding New Pages
1. Create component in `src\pages\`
2. Add route in `src\App.js`
3. Add navigation link in `src\components\Header.js`

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill process using port 3000
   npx kill-port 3000
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   npm install
   ```

3. **Build errors**
   ```bash
   # Delete node_modules and reinstall
   rmdir /s node_modules
   del package-lock.json
   npm install
   ```

## 📞 Support

For technical support or questions about this irrigation website:

- **Email**: info@aquaflowirrigation.com
- **Phone**: (555) 123-FLOW
- **Website**: http://localhost:3000 (when running locally)

## 📄 License

MIT License - feel free to use this project for your irrigation business!

---

**🚿 AquaFlow Irrigation - Professional irrigation solutions for beautiful, healthy landscapes.**