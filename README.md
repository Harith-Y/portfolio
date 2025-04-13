# Portfolio Website

![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.2.2-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-blue.svg)

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases professional work, skills, and experience with a clean, interactive user interface.

## 🚀 Features

- Modern, responsive design with TailwindCSS
- Smooth animations using Framer Motion
- Interactive timeline for experience/education
- Contact form with EmailJS integration
- Intersection Observer for scroll animations
- Type-safe development with TypeScript
- Optimized build process with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Email Service:** EmailJS
- **Timeline Component:** React Vertical Timeline
- **Scroll Animations:** React Intersection Observer

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harith-Y/portfolio
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_USER_ID=your_user_id
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Usage

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── data/        # Data files
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── .env.local       # Environment variables
├── vite.config.ts   # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json    # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project, **Portfolio**, was created by **Harith Yerragolam**.
<br><br>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:
<br>
<ul style="list-style-type:none;">
  <li>The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.</li>
</ul>
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.


## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
