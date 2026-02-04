# Portfolio Vite React

This is a portfolio project built with React, Vite, and Tailwind CSS, featuring a dark theme and subtle animations. The portfolio showcases various skills, projects, and areas of knowledge.

## Project Structure

```react
portfolio-vite-react
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.cjs
├── postcss.config.cjs
├── .gitignore
├── README.md
└── src
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── styles
    │   └── animations.css
    ├── assets
    ├── components
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── DarkToggle.tsx
    │   ├── SkillCard.tsx
    │   ├── ProjectCard.tsx
    │   ├── ProjectList.tsx
    │   └── ContactForm.tsx
    ├── pages
    │   ├── Home.tsx
    │   ├── Projects.tsx
    │   └── About.tsx
    ├── hooks
    │   └── usePrefersDark.ts
    ├── data
    │   └── portfolio.ts
    ├── services
    │   └── analytics.ts
    ├── utils
    │   └── animations.ts
    └── types
        └── index.d.ts
```

## Features

- **Dark Theme**: The portfolio supports a dark theme that can be toggled by the user.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern design.
- **Animations**: Subtle animations enhance user experience and engagement.
- **Showcase of Skills**: Displays programming and development skills, databases, backend and frontend experience, mobile development knowledge, and other areas of expertise.
- **Project Showcase**: Lists projects worked on with descriptions and links.
- **Contact Form**: Allows users to send inquiries directly through the portfolio.

## Setup Instructions

1. Clone the repository:

   ```

   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```

   cd portfolio-vite-react
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Technologies Used

- React
- Vite
- Tailwind CSS
- TypeScript

## Contribution

Feel free to fork the repository and submit pull requests for any improvements or features you'd like to add.