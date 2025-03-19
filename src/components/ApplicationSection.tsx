import { Check } from 'lucide-react'

const ApplicationSection = () => {
  const applicationSteps = [
    {
      step: '01',
      title: 'Purchase Application Form',
      description:
        'Visit the school premises or liaison office to obtain the application form for ₦10,000 only.',
    },
    {
      step: '02',
      title: 'Complete the Form',
      description:
        'Fill out all required information and attach necessary documents as specified in the application form.',
    },
    {
      step: '03',
      title: 'Submit Application',
      description:
        'Return the completed form to the school premises or liaison office within the specified deadline.',
    },
    {
      step: '04',
      title: 'Admission Processing',
      description:
        'Your application will be processed and you will be notified of your admission status.',
    },
  ]

  return (
    <section id='apply' className='py-10 bg-white overflow-hidden'>
      <div className='section-container'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='section-title mx-auto'>Application Process</h2>
          <p className='section-subtitle mx-auto'>
            2025/2026 Admission is now open. Follow these simple steps to apply
            for your desired program.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {applicationSteps.map((step, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in'
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl font-bold bg-gradient-to-r from-college-blue to-college-dark-blue bg-clip-text text-transparent'>
                  {step.step}
                </span>
                <div className='h-px flex-grow bg-gradient-to-r from-college-blue/80 to-college-blue/20'></div>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-college-blue'>
                {step.title}
              </h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>

        <div
          className='bg-gradient-to-br from-college-blue/5 to-college-light-blue/10 border border-college-blue/10 rounded-lg p-8 md:p-10 shadow-md animate-scale-in'
          style={{ animationDelay: '0.4s' }}
        >
          <div className='flex flex-col md:flex-row gap-12'>
            <div
              className='flex-1 animate-fade-in'
              style={{ animationDelay: '0.5s' }}
            >
              <h3 className='text-2xl font-bold text-college-blue mb-6'>
                Application Details
              </h3>

              <div className='space-y-6'>
                <div className='transform transition-all duration-300 hover:translate-x-1'>
                  <h4 className='text-lg font-semibold text-gray-800 mb-2'>
                    Application Form
                  </h4>
                  <p className='text-gray-600'>
                    The application form costs{' '}
                    <span className='font-bold text-college-red'>₦10,000</span>{' '}
                    only and can be obtained from:
                  </p>
                  <ul className='mt-2 space-y-2'>
                    <li className='flex items-start gap-2 group'>
                      <Check
                        size={18}
                        className='text-college-blue shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110'
                      />
                      <span className='text-gray-700'>
                        School Premises at No. 30 Anthony Olatujoye Crescent Off
                        Old Karu Road, Farinruwa Mararaba, Karu LGA Nasarawa
                        State
                      </span>
                    </li>
                    <li className='flex items-start gap-2 group'>
                      <Check
                        size={18}
                        className='text-college-blue shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110'
                      />
                      <span className='text-gray-700'>
                        Liaison Office at No. 31 Old Karu Road, Opposite Adonai
                        Hospital, Mararaba, Karu LGA Nasarawa State
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='transform transition-all duration-300 hover:translate-x-1'>
                  <h4 className='text-lg font-semibold text-gray-800 mb-2'>
                    Academic Year
                  </h4>
                  <p className='text-gray-600'>
                    The application is for the 2025/2026 academic session.
                  </p>
                </div>

                <div className='transform transition-all duration-300 hover:translate-x-1'>
                  <h4 className='text-lg font-semibold text-gray-800 mb-2'>
                    Government Approval
                  </h4>
                  <p className='text-gray-600'>
                    All programs are government approved with registration
                    number: RC: 7661554
                  </p>
                </div>
              </div>
            </div>

            <div
              className='flex-1 flex flex-col justify-center animate-fade-in'
              style={{ animationDelay: '0.6s' }}
            >
              <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1'>
                <h4 className='text-xl font-bold text-college-blue mb-6'>
                  Ready to Apply?
                </h4>
                <p className='text-gray-600 mb-6'>
                  Start your journey towards a rewarding career in healthcare.
                  Visit our school premises or liaison office to purchase the
                  application form.
                </p>
                <a
                  href='#contact'
                  className='btn-primary w-full flex items-center justify-center group'
                >
                  Contact Us For More Info
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-2 transform transition-transform duration-300 group-hover:translate-x-1'
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationSection
