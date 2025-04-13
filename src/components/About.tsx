import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that follows best practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with the latest technologies and best practices in web development.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Problem Solving",
      description: "Approaching challenges with a systematic mindset and finding innovative solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am a passionate Full-Stack Web Developer with over 2 years of experience in creating responsive and user-friendly web applications. My expertise spans across modern web technologies, and I'm committed to writing clean, maintainable code that follows best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 