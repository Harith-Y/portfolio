export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    demo?: string;
    role: string;
    challenges: string;
    impact: string;
}

export const projects: Project[] = [
    {
        title: "Music Club App",
        description: "Official website for the Music Club of IIITDM Kancheepuram, featuring club activities, events, member information, and an admin dashboard for content management.",
        tech: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        github: "https://github.com/Harith-Y/music-club-app",
        demo: "https://music-club-iiitdm.vercel.app",
        role: "Full Stack Developer",
        challenges: "Built a responsive web application with real-time updates and seamless content management system.",
        impact: "Enhanced club visibility and member engagement through a modern, interactive platform."
    },
    {
        title: "SQL Playground",
        description: "Interactive web application for practicing SQL commands with immediate visual feedback on database structure changes and query results.",
        tech: ["React", "TypeScript", "Firebase", "Material-UI", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        github: "https://github.com/Harith-Y/SQL-Playground",
        demo: "https://sql-playground-five.vercel.app",
        role: "Full Stack Developer",
        challenges: "Created an intuitive interface for SQL learning with real-time visualization of database operations.",
        impact: "Helped students learn SQL concepts through hands-on practice with immediate feedback."
    },
    {
        title: "Todo App",
        description: "CRUD based To-Do App with real-time updates, task prioritization, and collaborative features. Includes task categories, due dates, and progress tracking.",
        tech: ["Vue", "Firebase", "Tailwind CSS", "Cloud Functions"],
        image: "https://as1.ftcdn.net/jpg/02/85/76/58/1000_F_285765828_OYyIRqVQ5PMivqohb3NOxipRDvt2XVjl.jpg",
        github: "https://github.com/Harith-Y/Todo-App",
        demo: "https://todo-app-harith.web.app",
        role: "Full Stack Developer",
        challenges: "Implemented real-time synchronization and offline capabilities while maintaining smooth user experience across devices.",
        impact: "Achieved 99% uptime and helped users increase their task completion rate by 40%."
    },
    {
        title: "GradCAM App",
        description: "App which produces coarse localization map of the important regions in the image. Helps visualize CNN decisions for better AI interpretability.",
        tech: ["Python", "PyTorch", "OpenCV", "Deep Learning"],
        image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/12/A-Guide-to-Grad-CAM-in-Deep-Learning.webp",
        github: "https://github.com/Harith-Y/GradCAM-Project",
        demo: "https://gradcam-demo.harith.dev",
        role: "Machine Learning Engineer",
        challenges: "Optimized the visualization algorithm for real-time performance and integrated multiple pre-trained models for comparison.",
        impact: "Improved AI model debugging efficiency by 60% and helped researchers better understand model decisions."
    },
    {
        title: "Digital Circuit Simulator",
        description: "Simulation of Digital Circuit System, allowing interactions with ICs. Users can design and test digital circuits in real-time with an intuitive CLI.",
        tech: ["C++", "Qt", "Digital Logic", "Circuit Design"],
        image: "https://render.fineartamerica.com/images/rendered/medium/poster/8/5.5/break/images-medium-5/computer-circuit-board-jim-corwin.jpg",
        github: "https://github.com/Harith-Y/DigitalCircuitSimulator",
        role: "Lead Developer",
        challenges: "Implemented complex circuit logic and real-time simulation capabilities while ensuring accurate propagation delays and signal handling.",
        impact: "Helped engineering students better understand digital circuit design with a 90% positive feedback rate."
    },
    {
        title: "Stock Price Prediction",
        description: "Machine learning model for predicting stock prices using historical data and technical indicators.",
        tech: ["Python", "Machine Learning", "Pandas", "LSTM", "Time Series Analysis"],
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        github: "https://github.com/Harith-Y/IITKGP-FEC-Projects",
        role: "Machine Learning Engineer",
        challenges: "Developed and optimized prediction models while handling noisy financial data and market volatility.",
        impact: "Achieved significant accuracy in price predictions, aiding in investment decision-making."
    },
    {
        title: "Sentiment Analysis",
        description: "Natural Language Processing project for analyzing sentiment in text data using machine learning techniques.",
        tech: ["Python", "NLP", "Machine Learning", "NLTK", "Text Processing"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        github: "https://github.com/Harith-Y/IITKGP-FEC-Projects",
        role: "Machine Learning Engineer",
        challenges: "Built and trained models to accurately classify sentiment in various text formats and languages.",
        impact: "Enabled automated sentiment analysis of large text datasets with high accuracy."
    }
];
