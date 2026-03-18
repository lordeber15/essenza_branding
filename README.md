# Essenza Branding - Landing Page

Welcome to the **Essenza Branding** landing page repository. This project is a modern, responsive, and aesthetically pleasing web application designed to showcase the services, portfolio, and identity of Essenza Branding.

## 🎨 Brand Guidelines

**Essenza Branding** utilizes a sophisticated and modern color palette, primarily focusing on variations of Navy Blue and Turquoise to convey trust, creativity, and professionalism.

### Typography
- **Primary Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat) (Weights: 300, 400, 500, 600, 700, 800)

### Color Palette

| Color Name | CSS Variable | HSL Value | Description |
| :--- | :--- | :--- | :--- |
| **Turquoise** | `--essenza-turquoise` | `174, 43%, 45%` | Primary accent color |
| **Navy** | `--essenza-navy` | `212, 74%, 17%` | Primary dark background color |
| **Deep Navy** | `--essenza-navy-deep` | `210, 60%, 12%` | Darker variant for gradients and depth |
| **Light** | `--essenza-light` | `200, 20%, 97%` | Primary light background color |

---

## 🚀 Technologies Used

This project is built with a modern frontend stack:

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 🛠️ Project Setup & Installation

To run this project locally, ensure you have Node.js and npm installed on your machine.

### 1. Clone the repository
```bash
git clone <YOUR_GIT_URL>
cd essenza_branding
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The application will be available at `http://localhost:8080` (or the port assigned by Vite).

---

## 🌐 Features & Architecture

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices.
- **Modern Animations**: Smooth scroll animations and element transitions powered by Framer Motion and custom CSS keyframes.
- **Dynamic Contact Form**: Integrated contact form with validation (Zod) and automated webhook submission via n8n.
- **Theme Support**: Prepared for dark mode extension via Tailwind's `class` strategy.

---

## 📝 Editing the Application

- **Components**: UI blocks and sections are located in `src/components/`.
- **Styles**: Global styles and Tailwind configuration are in `src/index.css` and `tailwind.config.ts`.
- **Assets**: Images and vector graphics are stored in `src/assets/`.
