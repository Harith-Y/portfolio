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
        items: ["Node.js", "Express", "FastAPI", "Spring Boot", "Redis"] 
    },
    { 
        category: "Database",
        items: ["MySQL", "MongoDB", "Firebase", "Supabase", "PostgreSQL", "Neon DB", "Snowflake Cortex"] 
    },
    { 
        category: "AI/ML", 
        items: ["TensorFlow", "Mistral API", "Pinecone", "IBM Granite", "Watsonx.ai", "LangChain", "Groq API", "Prompt Engineering"] 
    },
    { 
        category: "Cybersecurity", 
        items: ["Penetration Testing", "Nmap", "Burp Suite"] 
    },
    { 
        category: "Testing & Analytics", 
        items: ["A/B Testing", "Predictive Analytics", "Real-time Analytics"] 
    },
    { 
        category: "Tools", 
        items: ["Git", "AWS", "Linux", "Docker", "Railway", "Render", "Vercel", "MCP (Model Context Protocol)"] 
    }
];
