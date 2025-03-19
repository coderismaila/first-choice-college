import { CheckCircle } from 'lucide-react'

const CourseCard = ({
  title,
  icon,
  description,
  highlights,
}: {
  title: string
  icon: string
  description: string
  highlights: string[]
}) => {
  return (
    <div className='course-card h-full bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2'>
      <div className='h-3 bg-gradient-to-r from-college-blue to-college-light-blue'></div>
      <div className='p-8 flex flex-col h-full'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='h-16 w-16 min-w-16 rounded-full bg-gradient-to-br from-college-blue/20 to-college-light-blue/50 flex items-center justify-center shadow-inner'>
            <span className='text-college-blue text-3xl animate-pulse'>
              {icon}
            </span>
          </div>
          <h3 className='text-xl font-bold text-college-blue'>{title}</h3>
        </div>

        <p className='text-gray-600 mb-6'>{description}</p>

        <ul className='space-y-3 mt-auto'>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className='flex items-start gap-2 transform transition-all duration-300 hover:translate-x-1'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle
                size={18}
                className='text-college-blue shrink-0 mt-1'
              />
              <span className='text-gray-700'>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const CoursesSection = () => {
  const courses = [
    {
      title: 'Community Health Extension Worker (CHEW)',
      icon: '👨‍⚕️',
      description:
        'Learn to provide basic health services to communities and educate on preventive healthcare.',
      highlights: [
        'Community health assessment',
        'Primary healthcare delivery',
        'Health education and promotion',
        'Practical community outreach experience',
      ],
    },
    {
      title: 'Environmental Health Technician (EHT)',
      icon: '🌱',
      description:
        'Focus on environmental factors affecting public health and implementation of control measures.',
      highlights: [
        'Environmental health inspection',
        'Food safety and hygiene',
        'Water quality management',
        'Waste management and sanitation',
      ],
    },
    {
      title: 'Medical Laboratory Technician (MLT)',
      icon: '🔬',
      description:
        'Develop skills to perform laboratory tests crucial for disease diagnosis and treatment monitoring.',
      highlights: [
        'Clinical laboratory procedures',
        'Sample collection and processing',
        'Laboratory equipment operation',
        'Result interpretation and reporting',
      ],
    },
    {
      title: 'Pharmacy Technician (PHARM TECH)',
      icon: '💊',
      description:
        'Gain knowledge in pharmaceutical operations, medication dispensing, and inventory management.',
      highlights: [
        'Medication dispensing',
        'Pharmaceutical calculations',
        'Inventory management',
        'Prescription processing',
      ],
    },
    {
      title: 'Public Health Technician',
      icon: '🏥',
      description:
        'Learn to implement and monitor public health programs to improve community well-being.',
      highlights: [
        'Public health surveillance',
        'Disease prevention strategies',
        'Health program implementation',
        'Community health education',
      ],
    },
  ]

  return (
    <section id='courses' className='py-10 bg-gray-50 overflow-hidden'>
      <div className='section-container'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='section-title mx-auto'>Courses Available</h2>
          <p className='section-subtitle mx-auto'>
            Explore our government-approved healthcare programs designed to
            prepare you for a successful career in the healthcare industry.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.map((course, index) => (
            <div
              key={index}
              className='animate-fade-in h-full'
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: `fade-in 0.8s ease-out ${
                  index * 0.15
                }s backwards, float 5s ease-in-out ${index * 0.2}s infinite`,
              }}
            >
              <CourseCard
                title={course.title}
                icon={course.icon}
                description={course.description}
                highlights={course.highlights}
              />
            </div>
          ))}
        </div>

        <div
          className='mt-16 text-center animate-fade-in'
          style={{ animationDelay: '0.5s' }}
        >
          <p className='text-gray-600 mb-8'>
            All programs are government approved and designed to meet industry
            standards.
          </p>
          <a
            href='#apply'
            className='btn-primary inline-flex items-center gap-2 group hover:scale-105 transition-transform duration-300'
          >
            Apply For Admission
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='transform transition-transform duration-300 group-hover:translate-x-1'
            >
              <path
                d='M5 12H19M19 12L12 5M19 12L12 19'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
