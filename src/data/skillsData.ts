export interface Skill {
    category: string;
    items: string[];
}

export const skills: Skill[] = [
    { 
        category: "Languages", 
        items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "MATLAB"] 
    },
    { 
        category: "Frontend", 
        items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Bootstrap", "Material-UI"] 
    },
    { 
        category: "Backend", 
        items: ["Node.js", "Express"] 
    },
    { 
        category: "Database",
        items: ["MySQL", "MongoDB", "Firebase"] 
    },
    { 
        category: "Tools", 
        items: ["Git", "AWS", "Linux", "Docker", "Railway", "Vercel"] 
    }
];
