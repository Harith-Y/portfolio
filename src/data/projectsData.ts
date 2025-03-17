export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
}

export const projects: Project[] = [
    {
        title: "Digital Circuit Simulator",
        description: "Simulation of Digital Circuit System, allowing interactions with ICs",
        tech: ["C++"],
        image: "https://render.fineartamerica.com/images/rendered/medium/poster/8/5.5/break/images-medium-5/computer-circuit-board-jim-corwin.jpg"
    },
    {
        title: "Todo App",
        description: "CRUD based To-Do App with real-time updates",
        tech: ["Vue", "Firebase"],
        image: "https://as1.ftcdn.net/jpg/02/85/76/58/1000_F_285765828_OYyIRqVQ5PMivqohb3NOxipRDvt2XVjl.jpg"
    },
    {
        title: "GradCAM App",
        description: "App which produces coarse localization map of the important regions in the image",
        tech: ["Python", "PyTorch"],
        image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/12/A-Guide-to-Grad-CAM-in-Deep-Learning.webp"
    }
];
