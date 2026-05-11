# Sitecore React Frontend (Vite)

![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![React](https://img.shields.io/badge/react-18-blue)
![Vite](https://img.shields.io/badge/vite-latest-purple)
![Bootstrap](https://img.shields.io/badge/bootstrap-5.3-blueviolet)
![Status](https://img.shields.io/badge/status-Production--Ready-success)
![License](https://img.shields.io/badge/license-Internal-lightgrey)

This project is a modern React application built using Vite and designed for Sitecore (Headless / API-based integration). It follows a scalable, modular architecture suitable for enterprise-level projects.

## Tech Stack

React 18, Vite, React Router DOM, Bootstrap 5, SCSS, React Icons, Axios, React Helmet, Sitecore CMS Integration.

## Project Structure

src/
├── assets/  
├── components/  
├── layout/  
├── pages/  
├── routes/  
├── services/  
├── styles/  
├── App.jsx  
└── main.jsx  

## Installation

Clone the repository, then run:

npm install  
npm run dev  

Application will run at:  
http://localhost:5173  

## Production Build

npm run build  

Build files will be generated inside the dist/ folder.  

To preview production build:

npm run preview  

## Sitecore Integration

This project supports integration with Sitecore Headless, Sitecore JSS, REST APIs, GraphQL, and Layout Service. All API logic should be placed inside the services folder.

## Routing

Application routing is handled using React Router DOM. Route configuration is located inside the routes folder.

## Styling

Bootstrap 5 is used for responsive layout and SCSS is used for custom styling. Global styles are maintained inside the styles folder.

## SEO Support

React Helmet is implemented for dynamic meta tags and page-level SEO configuration.

## Screenshots

Screenshots can be added inside a screenshots folder in the project root.

Example structure:

screenshots/
- home.png
- inner.png
- responsive.png

## Available Scripts

npm run dev  
npm run build  
npm run preview  
npm run lint  

## Environment Variables

Create a .env file in the root directory and add required variables:

VITE_API_BASE_URL=your_api_url  
VITE_SITECORE_ENDPOINT=your_sitecore_endpoint  

## Development Guidelines

Keep reusable components inside components folder.  
Keep page-level components inside pages folder.  
Keep API logic inside services folder.  
Maintain clean and scalable project structure.

## License

This project is intended for development and template usage.

## Author

Created by Webstrot :  Built using React and Vite for Sitecore integration. 