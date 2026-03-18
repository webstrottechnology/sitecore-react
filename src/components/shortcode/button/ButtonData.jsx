// Button data array
export const buttonData = [
  { id: 1, text: "Button Extra Large", sizeClass: "xl-btn", link: "#" },
  { id: 2, text: "Button Large", sizeClass: "lg-btn", link: "#" },
  { id: 3, text: "Button Medium", sizeClass: "md-btn", link: "#" },
  { id: 4, text: "Button Small", sizeClass: "sm-btn", link: "#" },
  { id: 5, text: "Very Small", sizeClass: "xs-btn", link: "#" },
];

export const gradientButtonData = [
  { id: 1, text: 'Gradient Button', className: 'gradient1 btn5', link: '#' },
  { id: 2, text: 'Gradient Button', className: 'gradient2 btn5', link: '#' },
  { id: 3, text: 'Gradient Button', className: 'gradient3 btn5', link: '#' },
  { id: 4, text: 'Gradient Button', className: 'gradient4 btn5', link: '#' },
  { id: 5, text: 'Gradient Button', className: 'gradient5 btn5', link: '#' },
  { id: 6, text: 'Gradient Button', className: 'event-btn', link: '#' },
];

// Data array for text links
export const textLinksData = [
  {
    id: 1,
    text: 'Only Gradient',
    className: 'text-gradient',
    link: '#',
    hasLine: true, // indicates the gradient-line span should be added
  },
  {
    id: 2,
    text: 'with underline',
    className: 'text-undeline', // keep as per HTML
    link: '#',
    hasLine: false,
  },
  {
    id: 3,
    text: 'thin underline',
    className: 'text-thin-underline',
    link: '#',
    hasLine: false,
  },
];

// Button data array – you can map over this to render multiple buttons
export const buttonData2 = [
  { id: 1, text: "Let's Talk", link: "/contact-us", variant: "filled" },
  { id: 2, text: "Learn More", link: "/about", variant: "outline" },
  { id: 3, text: "Get Started", link: "/signup", variant: "filled" },
  { id: 4, text: "View Details", link: "/services", variant: "outline" },
];
