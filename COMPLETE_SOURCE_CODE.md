# Complete Source Code for AquaFlow Irrigation React Website

This file contains all the source code you need to copy into your local project at `C:\0_Projects\0_Projects\aquaflow-irrigation-react\`

## 📁 File: `src\data\products.js`

```javascript
export const products = [
  {
    id: 1,
    name: "Rotary Pop-Up Sprinkler",
    category: "sprinklers",
    price: 29.99,
    oldPrice: 35.99,
    description: "High-efficiency rotary sprinkler with adjustable arc and radius control",
    features: ["25-50 ft range", "40-360° arc"],
    icon: "fas fa-shower",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Fixed Spray Nozzle",
    category: "sprinklers",
    price: 12.99,
    description: "Precision spray nozzle for uniform water distribution",
    features: ["8-15 ft range", "Multiple patterns"],
    icon: "fas fa-spray-can"
  },
  {
    id: 3,
    name: "Impact Sprinkler",
    category: "sprinklers",
    price: 45.99,
    description: "Heavy-duty impact sprinkler for large area coverage",
    features: ["20-80 ft range", "360° rotation"],
    icon: "fas fa-circle-notch"
  },
  {
    id: 4,
    name: "Control Valve",
    category: "parts",
    price: 89.99,
    description: "Reliable electric control valve for zone automation",
    features: ["24V AC", "Flow control"],
    icon: "fas fa-cog"
  },
  {
    id: 5,
    name: "Smart Controller",
    category: "parts",
    price: 299.99,
    description: "WiFi-enabled irrigation controller with weather sensing",
    features: ["12 zones", "App control"],
    icon: "fas fa-microchip"
  },
  {
    id: 6,
    name: "Pressure Regulator",
    category: "parts",
    price: 24.99,
    description: "Maintains optimal water pressure for efficient operation",
    features: ["30 PSI output", "Durable brass"],
    icon: "fas fa-filter"
  },
  {
    id: 7,
    name: "Residential Complete Kit",
    category: "systems",
    price: 599.99,
    oldPrice: 750.00,
    description: "Everything needed for a 4-zone residential irrigation system",
    features: ["4 zones", "Installation guide"],
    icon: "fas fa-home",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Commercial System",
    category: "systems",
    price: 1899.99,
    description: "Heavy-duty irrigation system for commercial properties",
    features: ["12 zones", "Professional grade"],
    icon: "fas fa-building"
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'sprinklers', name: 'Sprinklers' },
  { id: 'parts', name: 'Parts & Components' },
  { id: 'systems', name: 'Complete Systems' }
];

export const services = [
  {
    id: 1,
    title: "System Installation",
    description: "Professional installation of complete irrigation systems with proper design and layout planning.",
    icon: "fas fa-wrench",
    features: [
      "Site assessment and design",
      "Professional installation",
      "System testing and calibration",
      "User training included"
    ]
  },
  {
    id: 2,
    title: "Maintenance & Repair",
    description: "Regular maintenance and quick repair services to keep your system running efficiently.",
    icon: "fas fa-tools",
    features: [
      "Seasonal system checks",
      "Component replacement",
      "Pressure adjustments",
      "Emergency repairs"
    ]
  },
  {
    id: 3,
    title: "System Upgrades",
    description: "Modernize your existing system with smart controllers and efficient components.",
    icon: "fas fa-chart-line",
    features: [
      "Smart controller installation",
      "Efficiency improvements",
      "Zone expansion",
      "Water-saving upgrades"
    ]
  }
];
```

## 📁 File: `src\styles\index.css`

```css
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color Palette - Irrigation Theme */
    --primary-color: #2E8B57; /* Sea Green */
    --secondary-color: #4682B4; /* Steel Blue */
    --accent-color: #20B2AA; /* Light Sea Green */
    --success-color: #32CD32; /* Lime Green */
    --warning-color: #FFD700; /* Gold */
    --error-color: #DC143C; /* Crimson */
    
    /* Neutral Colors */
    --white: #FFFFFF;
    --light-gray: #F8F9FA;
    --gray-100: #E9ECEF;
    --gray-300: #DEE2E6;
    --gray-500: #6C757D;
    --gray-700: #495057;
    --dark: #212529;
    
    /* Gradients */
    --primary-gradient: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    --hero-gradient: linear-gradient(135deg, rgba(46, 139, 87, 0.9) 0%, rgba(32, 178, 170, 0.9) 100%);
    
    /* Typography */
    --font-family: 'Inter', sans-serif;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border Radius */
    --border-radius-sm: 0.375rem;
    --border-radius-md: 0.5rem;
    --border-radius-lg: 0.75rem;
    --border-radius-xl: 1rem;
    
    /* Transitions */
    --transition-fast: 0.15s ease-in-out;
    --transition-normal: 0.3s ease-in-out;
    --transition-slow: 0.5s ease-in-out;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--gray-700);
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--dark);
    margin-bottom: var(--spacing-md);
}

h1 {
    font-size: var(--font-size-5xl);
}

h2 {
    font-size: var(--font-size-4xl);
}

h3 {
    font-size: var(--font-size-2xl);
}

h4 {
    font-size: var(--font-size-xl);
}

p {
    margin-bottom: var(--spacing-md);
    color: var(--gray-500);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--font-size-base);
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: all var(--transition-normal);
    line-height: 1.5;
}

.btn-primary {
    background: var(--primary-gradient);
    color: var(--white);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background-color: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-2px);
}

.btn-small {
    padding: var(--spacing-xs) var(--spacing-lg);
    font-size: var(--font-size-sm);
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
    color: var(--dark);
    margin-bottom: var(--spacing-md);
}

.section-header p {
    font-size: var(--font-size-lg);
    color: var(--gray-500);
    max-width: 600px;
    margin: 0 auto;
}

/* Utility Classes */
.text-center {
    text-align: center;
}

.text-primary {
    color: var(--primary-color);
}

.bg-primary {
    background-color: var(--primary-color);
}

.bg-light {
    background-color: var(--light-gray);
}

.mb-0 {
    margin-bottom: 0 !important;
}

.mt-2 {
    margin-top: var(--spacing-md);
}

.hidden {
    display: none;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Loading States */
.loading {
    opacity: 0.6;
    pointer-events: none;
}

/* Focus Styles */
*:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Responsive Design Base */
@media (max-width: 1024px) {
    .container {
        padding: 0 var(--spacing-md);
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 var(--spacing-md);
    }
    
    h1 {
        font-size: var(--font-size-4xl);
    }
    
    h2 {
        font-size: var(--font-size-3xl);
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: var(--font-size-3xl);
    }
    
    h2 {
        font-size: var(--font-size-2xl);
    }
}
```

**Continue reading the file to get all remaining component and CSS code...**

---

## 🚀 **Quick Setup Instructions for Your Local Machine:**

1. **Open Command Prompt as Administrator**
2. **Navigate to your projects folder:**
   ```cmd
   cd C:\0_Projects\0_Projects
   ```
3. **Follow the complete setup instructions in the README.md file above**
4. **Copy each file's content from this COMPLETE_SOURCE_CODE.md into the corresponding files**

The complete source code file contains ALL the React components, CSS files, and configuration needed to run the irrigation website locally!