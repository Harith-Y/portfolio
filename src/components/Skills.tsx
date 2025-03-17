import { skills } from '../data/skillsData';

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
