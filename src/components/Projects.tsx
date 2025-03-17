export default function Projects() {
  const projects = [
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

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}