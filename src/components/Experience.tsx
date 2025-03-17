import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience & Education</h2>
        
        <VerticalTimeline lineColor="">
          <VerticalTimelineElement
            className="vertical-timeline-element--education [&_.vertical-timeline-element-date]:text-gray-900 dark:[&_.vertical-timeline-element-date]:text-gray-100"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2023 - Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">Student, B.Tech in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">IIITDM Kancheepuram</h4>
            <p>
            Developed and maintained few full-stack applications using React, Node.js and GitHub.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education [&_.vertical-timeline-element-date]:text-gray-900 dark:[&_.vertical-timeline-element-date]:text-gray-100"
            date="2021 - 2023"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-gray-900">MPC Student</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-600">FIITJEE Madhapur, Hyderabad</h4>
            <p className="text-gray-600">
              Worked on Python, specifically GUI based Libraries to make some Mathematical Applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
