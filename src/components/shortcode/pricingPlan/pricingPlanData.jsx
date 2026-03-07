/* ---------------- PRICING PLAN DATA ONE ---------------- */

const pricingPlanData = [
  {
    id: 1,
    name: "Basic",
    price: "$99",
    features: [
      "Access to all basic features and essential tools",
      "Reliable email support response within 24 hours",
      "Single user account with standard access",
      "Access to beginner-friendly tutorials and guides",
      "Basic analytics and reporting dashboard",
    ],
    link: "/javascript:;",
  },
  {
    id: 2,
    name: "Standard",
    price: "$199",
    features: [
      "Includes all features of the Basic plan",
      "Priority email support response within 12 hours",
      "Support for up to 5 users with shared access",
      "Advanced analytics dashboard with customizable reports",
      "Access to premium templates and tools",
    ],
    link: "/javascript:;",
  },
  {
    id: 3,
    name: "Premium",
    price: "$299",
    features: [
      "Includes all features of the Standard plan",
      "24/7 priority phone and email support",
      "Unlimited user accounts with full access",
      "Custom integrations and automation tools",
      "Dedicated account manager for personalized guidance",
    ],
    link: "/javascript:;",
  },
];

/* ---------------- PRICING PLAN DATA TWO ---------------- */

const pricingPlan2Data = [
  {
    id: 1,
    name: "Starter",
    type: "Individual",
    price: "$35",
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Email Support",
      "Community Access",
      "Limited Analytics",
      "Single User Access",
    ],
  },
  {
    id: 2,
    name: "Premium",
    type: "Business",
    price: "$84",
    features: [
      "25 Projects",
      "100 GB Storage",
      "Priority Email & Chat Support",
      "Advanced Analytics",
      "Team Collaboration (5 Members)",
      "Custom Domain Support",
    ],
  },
  {
    id: 3,
    name: "Ultimate",
    type: "Enterprise",
    price: "$95",
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "24/7 Phone & Dedicated Support",
      "Full Advanced Analytics Suite",
      "Unlimited Team Members",
      "Custom Integrations & API Access",
    ],
  },
];

/* ---------------- PRICING PLAN DATA THREE ---------------- */

const pricingPlan3Data = [
  {
    id: 1,
    title: "Basic",
    price: "$9",
    duration: "per editor / month",
    billing: "billed annually",
    buttonText: "Get Started",
    featured: false,
    features: [
      "5 videos / month",
      "Basic app integrations",
      "Standard prompt templates",
      "Basic analytics dashboard",
      "720p video export",
    ],
    link: ["Upgrade anytime"],
  },
  {
    id: 2,
    title: "Pro",
    price: "$29",
    duration: "per editor / month",
    billing: "billed annually",
    buttonText: "Start Free Trial",
    featured: true,
    features: [
      "30 videos / month",
      "Unlimited app integrations",
      "Smart AI prompt ideas",
      "Advanced analytics dashboard",
      "1080p Full HD export",
    ],
    link: ["Most Popular Plan"],
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$79",
    duration: "per editor / month",
    billing: "billed annually",
    buttonText: "Contact Sales",
    featured: false,
    features: [
      "Unlimited videos",
      "Custom API integrations",
      "Dedicated account manager",
      "Team collaboration (Unlimited members)",
      "4K video export",
    ],
    link: ["Need Custom Solution?"],
  },
];

/* ---------------- PRICING PLAN DATA FOUR ---------------- */

const pricingPlan4Data = [
  {
    id: 1,
    title: "Free",
    price: "Free",
    duration: "",
    billing: "",
    buttonText: "Choose Plan",
    featured: false,
    features: [
      "Up to 3 projects in the cloud",
      "Image export up to 1080p",
      "Basic editing tools",
      "Free templates and icons",
      "Access via web and mobile app",
    ],
    link: [],
  },
  {
    id: 2,
    title: "Standard",
    price: "$9.99",
    duration: "/month",
    billing: "",
    buttonText: "Choose Plan",
    featured: true,
    features: [
      "Up to 50 projects in the cloud",
      "Export up to 4K",
      "Advanced editing toolkit",
      "Team collaboration (up to 5 members)",
      "Access to premium template library",
    ],
    link: [],
  },
  {
    id: 3,
    title: "Pro",
    price: "$19.99",
    duration: "/month",
    billing: "",
    buttonText: "Choose Plan",
    featured: false,
    features: [
      "Unlimited projects",
      "Export up to 8K + animations",
      "AI-powered content generation tools",
      "Unlimited team members",
      "Brand customization (logos, fonts, color palettes)",
    ],
    link: [],
  },
];

/* ---------------- PRICING PLAN DATA FIVE ---------------- */

const pricingPlan5Data = [
  {
    id: 1,
    title: "Starter",
    price: "$19",
    duration: "/month",
    buttonText: "Start Free Trial",
    featured: false,
    features: ["Up to 5 projects", "Basic analytics", "Email support"],
    link: [],
  },
  {
    id: 2,
    title: "Professional",
    price: "$49",
    duration: "/month",
    buttonText: "Get Started",
    featured: true, // Most popular
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Save 15% with annual billing",
    ],
    link: [],
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    duration: "",
    buttonText: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "SSO & custom integrations",
    ],
    link: [],
  },
];

/* ---------------- PRICING PLAN DATA SIX ---------------- */

const pricingPlan6Data = [
  {
    id: 1,
    title: "Small Plan",
    price: "$39",
    duration: "per month",
    gradient: "blue",
    features: [
      "Free domain for 1 year",
      "Monthly Bandwidth 50GB",
      "SSD Storage 100GB",
      "SSL Certificate Included",
      "Basic Website SEO",
      "Email Support",
      "1 Website",
      "Daily Backups",
    ],
    buttonText: "Sign up",
  },
  {
    id: 2,
    title: "Medium Plan",
    price: "$69",
    duration: "per month",
    gradient: "orange",
    features: [
      "Free domain for 1 year",
      "Monthly Bandwidth 200GB",
      "SSD Storage 500GB",
      "SSL Certificate Included",
      "Advanced Website SEO",
      "Priority Email & Chat Support",
      "5 Websites",
      "Weekly Backups",
    ],
    buttonText: "Sign up",
  },
  {
    id: 3,
    title: "Large Plan",
    price: "$99",
    duration: "per month",
    gradient: "green",
    features: [
      "Free domain for 2 years",
      "Unlimited Bandwidth",
      "SSD Storage 1TB",
      "SSL Certificate & DDoS Protection",
      "Full SEO Optimization",
      "24/7 Phone & Chat Support",
      "Unlimited Websites",
      "Real-time Backups",
    ],
    buttonText: "Sign up",
  },
];

/* ---------------- PRICING PLAN DATA SEVEN ---------------- */

const pricingPlan7Data = [
  {
    id: 1,
    title: "Pro",
    price: "$599",
    duration: "/month",
    featured: true,
    features: [
      "Email Marketing",
      "Client Automation",
      "Advanced Testing",
      "Priority Support",
      "User Analytics",
      "Team Access",
    ],
  },
  {
    id: 2,
    title: "Plus",
    price: "$399",
    duration: "/month",
    featured: false,
    features: [
      "Email Builder",
      "Basic Automation",
      "Template Library",
      "Standard Support",
      "Campaign Reports",
      "Multi Users",
    ],
  },
  {
    id: 3,
    title: "Standard",
    price: "$199",
    duration: "/month",
    featured: false,
    features: [
      "Email Scheduling",
      "Client Testing",
      "Prebuilt Templates",
      "Email Reports",
      "User Insights",
      "Limited Access",
    ],
  },
];

/* ---------------- PRICING PLAN DATA EIGHT ---------------- */

const pricingPlan8Data = [
  {
    id: 1,
    title: "Basic Package",
    price: "Free",
    features: [
      "Location Listings: 5",
      "Duration: 3 months",
      "Online Booking: Yes",
      "Sponsored Listings: No",
      "Support: No",
    ],
    buttonText: "Submit free listing",
    active: true,
  },
  {
    id: 2,
    title: "Standard Package",
    price: "$45",
    features: [
      "Location Listings: 3",
      "Duration: 1 months",
      "Online Booking: Yes",
      "Sponsored Listings: No",
      "Support: No",
    ],
    buttonText: "Get Package",
  },
  {
    id: 3,
    title: "Premium Package",
    price: "$89",
    features: [
      "Location Listings: 8",
      "Duration: 6 months",
      "Online Booking: Yes",
      "Sponsored Listings: No",
      "Support: No",
    ],
    buttonText: "Get Package",
  },
];

/* ---------------- PRICING PLAN DATA NINE ---------------- */

const pricingPlan9Data = [
  {
    id: 1,
    name: "Basic",
    description: "Perfect for beginners who want to start designing quickly.",
    monthlyPrice: 18.99,
    yearlyPrice: 199.99,
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Templates",
      "Email Support",
      "Community Access",
    ],
    buttonText: "Start Free Trial",
  },
  {
    id: 2,
    name: "Premium",
    description:
      "Ideal for small teams needing advanced tools and collaboration.",
    monthlyPrice: 28.99,
    yearlyPrice: 299.99,
    features: [
      "20 Projects",
      "100 GB Storage",
      "Advanced Templates",
      "Priority Support",
      "Team Collaboration",
    ],
    buttonText: "Start Free Trial",
  },
  {
    id: 3,
    name: "Standard",
    description:
      "Designed for enterprises requiring full control and dedicated support.",
    monthlyPrice: 38.99,
    yearlyPrice: 399.99,
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "Custom Templates",
      "Dedicated Support",
      "Advanced Analytics",
    ],
    buttonText: "More Information",
  },
];

/* ---------------- PRICING PLAN DATA TEN ---------------- */

const pricingPlan10Data = [
  {
    id: 1,
    name: "Basic",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description:
      "This is a price plan card for all your designing needs here fun.",
    features: [
      {
        title: "5 Projects",
        desc: "Create up to 5 active projects with essential tools.",
      },
      {
        title: "10GB Storage",
        desc: "Store your files securely with limited storage.",
      },
      {
        title: "Basic Support",
        desc: "Email-based support during business hours.",
      },
      {
        title: "Email Notifications",
        desc: "Get notified about important updates via email.",
      },
    ],
    buttonText: "Start Free Trial",
    popular: false,
  },
  {
    id: 2,
    name: "Premium",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description:
      "This is a price plan card for all your designing needs here fun.",
    features: [
      {
        title: "20 Projects",
        desc: "Manage multiple projects with higher limits.",
      },
      {
        title: "500GB Storage",
        desc: "Extended storage for growing teams.",
      },
      {
        title: "Priority Support",
        desc: "Faster support with priority handling.",
      },
      {
        title: "Advanced Analytics",
        desc: "Detailed insights and performance tracking.",
      },
      {
        title: "API Access",
        desc: "Integrate with third-party tools easily.",
      },
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    id: 3,
    name: "Standard",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "Find features that suits you with complete flexibility.",
    features: [
      {
        title: "Unlimited Projects",
        desc: "Create and manage unlimited projects.",
      },
      {
        title: "2000GB Storage",
        desc: "Massive storage for enterprise needs.",
      },
      {
        title: "24/7 Support",
        desc: "Round-the-clock expert assistance.",
      },
      {
        title: "Custom Integrations",
        desc: "Tailored integrations for your workflow.",
      },
      {
        title: "Advanced Security",
        desc: "Enterprise-level data protection.",
      },
      {
        title: "Custom Training",
        desc: "Personalized onboarding and training.",
      },
    ],
    buttonText: "More Information",
    popular: false,
  },
];

export default pricingPlanData;
export {
  pricingPlan2Data,
  pricingPlan3Data,
  pricingPlan4Data,
  pricingPlan5Data,
  pricingPlan6Data,
  pricingPlan7Data,
  pricingPlan8Data,
  pricingPlan9Data,
  pricingPlan10Data,
};
