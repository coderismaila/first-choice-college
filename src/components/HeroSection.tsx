import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section
      id='home'
      className='relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden'
    >
      {/* Background image with overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('/lovable-uploads/7f0fe8ad-2509-44cd-a377-be620b47922b.png')",
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-r from-college-blue/90 to-college-dark-blue/90' />

      {/* Hero content */}
      <div className='relative z-10 text-center px-6 max-w-5xl mx-auto'>
        <div className='animate-fade-in'>
          <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight shimmer-effect'>
            2025/26 <span className='text-college-light-blue'>Admission</span>{' '}
            <br />
            is Now Open
          </h1>

          <h2 className='font-bold text-2xl md:text-3xl text-white mb-8'>
            FIRST CHOICE COLLEGE OF HEALTH SCIENCE AND TECHNOLOGY
          </h2>

          <p className='text-white text-lg md:text-xl max-w-3xl mx-auto mb-10'>
            Start your journey towards a rewarding career in healthcare.
            Government approved programs with hands-on training and experienced
            instructors.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#apply'
              className='btn-primary flex items-center justify-center gap-2 group cursor-glow'
            >
              Apply Now
              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </a>
            <a href='#courses' className='btn-secondary cursor-glow'>
              Explore Courses
            </a>
          </div>

          <div className='mt-12 inline-block animate-pulse'>
            <span className='text-white text-sm font-medium px-3 py-1 bg-college-red/80 rounded-full'>
              Govt. Approved
            </span>
          </div>
        </div>
      </div>

      <div className='absolute bottom-5 left-0 right-0 mx-auto w-max animate-bounce'>
        <a
          href='#about'
          className='text-white flex flex-col items-center hover:text-white/80 transition-colors'
        >
          <span className='text-sm mb-2 font-medium'>Scroll Down</span>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 5V19M12 19L19 12M12 19L5 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
