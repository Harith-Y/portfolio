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
        title: "Digital Circuit Simulator",
        description: "Simulation of Digital Circuit System, allowing interactions with ICs. Users can design and test digital circuits in real-time with an intuitive interface.",
        tech: ["C++", "Qt", "Digital Logic", "Circuit Design"],
        image: "https://render.fineartamerica.com/images/rendered/medium/poster/8/5.5/break/images-medium-5/computer-circuit-board-jim-corwin.jpg",
        github: "https://github.com/Harith-Y/DigitalCircuitSimulator",
        role: "Lead Developer",
        challenges: "Implemented complex circuit logic and real-time simulation capabilities while ensuring accurate propagation delays and signal handling.",
        impact: "Helped engineering students better understand digital circuit design with a 90% positive feedback rate."
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
    }
];
