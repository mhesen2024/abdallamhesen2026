import dashboard from '../../assets/project1/dashboard.png';
import classroom from '../../assets/project1/class.png';
import bus_map from '../../assets/project1/bus_map.png';
import bus from '../../assets/project1/bus_supervioser.png';
import student_detailes from '../../assets/project1/student_detailes.png';

import Es_lightMode from '../../assets/project2/Es-light-mode.png';
import Es_darkMode from '../../assets/project2/Es-Dark-mode.png';
import Es_1 from '../../assets/project2/Es-1.png';
import Es_2 from '../../assets/project2/Es-2.png';
import Es_3 from '../../assets/project2/Es-3.png';

import Tr_1 from '../../assets/project3/Tr-1.png';
import Tr_2 from '../../assets/project3/Tr-2.png';
import Tr_3 from '../../assets/project3/Tr-3.png';
import Tr_4 from '../../assets/project3/Tr-4.png';
import Tr_5 from '../../assets/project3/Tr-5.png';

import Login_Tr_1 from '../../assets/training1/Login-Tr-1.png';
import Landing_Tr_1 from '../../assets/training2/Landing-Tr1.png';


export const projects = [
{
  icon:dashboard,
  type: "project",
  title: "Smart Attendance & Safety System",
  description: "A full-featured school management platform connecting to a Django REST API, with role-based dashboards for admins, teachers, parents, and bus supervisors to manage student attendance, schedules, live bus tracking, and safety reporting. Bilingual (Arabic/English) with automatic JWT refresh.",
  tags: ["React 19", "Vite", "React Router", "React Query",  "Tailwind CSS", "Axios", "Leaflet", "i18next"],
  images: [dashboard , classroom, bus_map, student_detailes , bus],
  liveUrl: "#",
  repoUrl: "#",
},
{
  icon: Es_1,
  type: "project",
  title: "Shopsy – E-Commerce Storefront",
description: "A modern, responsive e-commerce landing page for an electronics shop, featuring a hero carousel, category and product showcases, customer reviews, partner brands, and a blog section. Includes light/dark mode theming, scroll-reveal animations, and a fully mobile-friendly layout.",
tags: ["React 18", "Vite", "Tailwind CSS", "React Slick", "AOS", "React Icons"],
images: [Es_1, Es_2, Es_3,Es_lightMode, Es_darkMode],
liveUrl: "https://eshop-mh.netlify.app/",
repoUrl: "https://github.com/mhesen2024/Eshop", 
},
{
  icon: Tr_1,
  type: "project",
  title: "Travel & Booking – Hotel Reservation Platform",
  description: "A full-featured travel and hotel booking web app where users can browse destinations by country and city, explore residences and trips, search and filter hotels, view room details, and complete bookings through a multi-step checkout with payment options. Includes user authentication (sign up / sign in), profile management, a contact form powered by EmailJS, admin forms for adding countries, cities, rooms, and residences, plus pagination, sorting, and toast notifications across a responsive layout.",
  tags: ["React 18", "Vite", "Tailwind CSS", "React Router", "Axios", "Formik & Yup", "Swiper", "React Icons", "MUI Icons"],
  images: [Tr_1, Tr_2, Tr_3, Tr_4, Tr_5],
  liveUrl: "#",
  repoUrl: "https://github.com/mhesen2024/Traveler-and-Booking-",
},

{
  icon: Login_Tr_1,
  type: "training",
  title: "Sign In – Glassmorphism Login Page",
  description: "A responsive, modern sign-in page featuring a glassmorphism login card layered over a looping fullscreen video background. Includes email and password fields with icons, a 'Remember me' checkbox, 'Forgot password?' and 'Create account' links, plus accessibility-focused markup (semantic landmarks, screen-reader-only labels, and ARIA attributes).",
  tags: ["HTML5", "CSS3", "Glassmorphism", "Flexbox", "Responsive Design", "Font Awesome", "Accessibility"],
  images: [Login_Tr_1],
  liveUrl: "https://loginanmistyle.netlify.app/",
  repoUrl: "https://github.com/mhesen2024/Html_Css_Project/tree/main/project%20(login)",
} ,
{
  icon:  Landing_Tr_1,
  type: "training",
  title: "Creative Agency – Responsive Landing Page",
  description: "A single-page responsive agency website template built with pure HTML and CSS as a front-end training exercise. Includes a fixed navbar with dropdown menu, a hero section with call-to-action buttons, about/features cards, a portfolio gallery with hover overlays, a services 'what we offer' grid, a 'why choose us' section, an animated stats counter, a pricing table, client testimonials, a team section with social links, a recent-news blog, a contact section with form and info cards, and a footer — all styled with custom CSS, Google Fonts, and Font Awesome icons.",
  tags: ["HTML5", "CSS3", "Font Awesome", "Google Fonts", "Responsive Design", "Flexbox"],
  images: [Landing_Tr_1],
  liveUrl: "https://simplelandingpag.netlify.app/",
  repoUrl: "https://github.com/mhesen2024/Html_Css_Project/tree/main/project%202",
}
]
