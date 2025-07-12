import { Trophy, Award, Users } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Achievements & Awards</h2>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    RAISE YOUR HACK 2025 Hackathon - Multi-Challenge Awards
                  </h3>
                  <div className="flex space-x-1">
                    <span className="text-2xl">🥈</span>
                    <span className="text-2xl">🥉</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Issued by Lablab.ai · Jul 2025
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>2nd Place 🥈</strong> - Best solution for Blackbox Track Challenge
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>3rd Place 🥉</strong> - Best Use of Snowflake - Partner Challenge
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Thanks to my teammate: <strong className="text-gray-900 dark:text-white">Aditya Guntur</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 