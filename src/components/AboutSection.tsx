import { GraduationCap, Award, Users } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about' className='py-10 bg-white overflow-hidden'>
      <div className='section-container'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='section-title mx-auto'>About Our Institution</h2>
          <p className='section-subtitle mx-auto'>
            First Choice College of Health Science and Technology is dedicated
            to providing quality healthcare education and training students to
            become skilled healthcare professionals.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.1s' }}
          >
            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <GraduationCap className='h-8 w-8 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Quality Education
            </h3>
            <p className='text-gray-600'>
              We provide high-quality education and training in various
              healthcare disciplines, preparing students for successful careers
              in the healthcare industry.
            </p>
          </div>

          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.2s' }}
          >
            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <Award className='h-8 w-8 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Government Approved
            </h3>
            <p className='text-gray-600'>
              Our programs are fully approved and recognized by relevant
              government authorities, ensuring that your qualification meets
              industry standards.
            </p>
          </div>

          <div
            className='bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in'
            style={{ animationDelay: '0.3s' }}
          >
            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-college-blue/20 to-college-blue/5 flex items-center justify-center mb-6 shadow-inner'>
              <Users className='h-8 w-8 text-college-blue' />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-college-blue'>
              Expert Faculty
            </h3>
            <p className='text-gray-600'>
              Learn from experienced healthcare professionals and educators who
              bring real-world experience to the classroom.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-12 items-center'>
          <div
            className='flex-1 animate-fade-in-right'
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className='pl-4 text-2xl font-bold text-college-blue mb-4 relative'>
              Our Mission
              <span className='absolute left-0 top-0 bottom-0 w-1 bg-college-red/70 rounded-full'></span>
            </h3>
            <p className='text-gray-600 mb-6'>
              To train competent healthcare professionals equipped with
              knowledge, skills, and values necessary to meet the healthcare
              needs of individuals and communities through excellence in
              education.
            </p>

            <h3 className='pl-4 text-2xl font-bold text-college-blue mb-4 relative'>
              Our Vision
              <span className='absolute left-0 top-0 bottom-0 w-1 bg-college-red/70 rounded-full'></span>
            </h3>
            <p className='text-gray-600 mb-6'>
              To be the leading healthcare education institution known for
              producing skilled, compassionate, and ethical healthcare
              professionals who contribute positively to public health.
            </p>

            <div className='mt-8'>
              <p className='text-college-red font-medium text-lg italic animate-pulse'>
                "Quality Health Is Wealth!!!"
              </p>
            </div>
          </div>

          <div
            className='flex-1 overflow-hidden transform transition-all duration-500 hover:scale-105 animate-scale-in'
            style={{ animationDelay: '0.5s' }}
          >
            <img
              src='/logo.jpg'
              alt='College Facilities'
              className='w-full h-96 object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
