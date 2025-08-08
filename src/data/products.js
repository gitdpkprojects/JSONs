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