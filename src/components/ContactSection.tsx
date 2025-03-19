import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id='contact' className='py-10 bg-white overflow-hidden'>
      <div className='section-container'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='section-title mx-auto'>Contact Us</h2>
          <p className='section-subtitle mx-auto'>
            Have questions about our programs or the application process? Get in
            touch with us.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.1s' }}
          >
            <div className='h-14 w-14 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <MapPin className='h-7 w-7 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Our Location
            </h3>

            <div className='space-y-4'>
              <div className='group'>
                <h4 className='font-medium text-gray-800 mb-1 group-hover:text-college-blue transition-colors'>
                  Main Campus:
                </h4>
                <p className='text-gray-600 group-hover:text-gray-800 transition-colors'>
                  No. 30 Anthony Olatujoye Crescent Off Old Karu Road, Farinruwa
                  Mararaba, Karu LGA Nasarawa State
                </p>
              </div>

              <div className='group'>
                <h4 className='font-medium text-gray-800 mb-1 group-hover:text-college-blue transition-colors'>
                  Liaison Office:
                </h4>
                <p className='text-gray-600 group-hover:text-gray-800 transition-colors'>
                  No. 31 Old Karu Road, Opposite Adonai Hospital, Mararaba, Karu
                  LGA Nasarawa State
                </p>
              </div>
            </div>
          </div>

          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.2s' }}
          >
            <div className='h-14 w-14 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <Phone className='h-7 w-7 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Phone Numbers
            </h3>

            <div className='space-y-4'>
              <div className='group'>
                <h4 className='font-medium text-gray-800 mb-1 group-hover:text-college-blue transition-colors'>
                  Call Us:
                </h4>
                <p className='text-gray-600 group-hover:text-gray-800 transition-colors'>
                  09048933334, 09161500566
                </p>
              </div>

              <div className='group'>
                <h4 className='font-medium text-gray-800 mb-1 group-hover:text-college-blue transition-colors'>
                  WhatsApp (Text Only):
                </h4>
                <p className='text-gray-600 group-hover:text-gray-800 transition-colors'>
                  08131245454
                </p>
              </div>
            </div>
          </div>

          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.3s' }}
          >
            <div className='h-14 w-14 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <Mail className='h-7 w-7 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Email
            </h3>

            <div className='space-y-4'>
              <div className='group'>
                <h4 className='font-medium text-gray-800 mb-1 group-hover:text-college-blue transition-colors'>
                  General Inquiries:
                </h4>
                <p className='text-gray-600 group-hover:text-gray-800 transition-colors'>
                  firstchiocecollege@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='mt-16 p-8 rounded-lg bg-gradient-to-br from-college-blue/10 to-college-blue/5 border border-college-blue/10 shadow-md transform transition-all duration-500 hover:shadow-lg animate-scale-in'
          style={{ animationDelay: '0.4s' }}
        >
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-college-blue mb-2'>
              Get In Touch
            </h3>
            <p className='text-gray-600'>
              Visit our campus or liaison office to learn more about our
              programs and admission process.
            </p>
          </div>

          <div className='flex justify-center'>
            <a
              href='mailto:firstchiocecollege@gmail.com'
              className='flex items-center btn-primary group hover:scale-105 transition-all duration-300'
            >
              Send Us an Email
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
    </section>
  )
}

export default ContactSection
