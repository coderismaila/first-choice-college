const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-college-blue text-white'>
      <div className='max-w-7xl mx-auto px-6 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden'>
                <img
                  src='/logo.jpg'
                  alt='College Logo'
                  className='w-20 h-20 object-contain'
                />
              </div>
              <span className='font-bold text-xl'>First Choice College</span>
            </div>

            <p className='text-blue-100 mb-6'>
              A leading institution in healthcare education, committed to
              training skilled and compassionate healthcare professionals.
            </p>

            <p className='text-blue-200 italic'>
              "Quality Health Is Wealth!!!"
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 border-b border-blue-400/30 pb-2'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#courses'
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href='#apply'
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 border-b border-blue-400/30 pb-2'>
              Contact Info
            </h3>
            <ul className='space-y-4'>
              <li className='flex gap-2 items-center'>
                <div className='h-6 w-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                </div>
                <span className='text-blue-100'>
                  No. 30 Anthony Olatujoye Crescent, Karu LGA Nasarawa State
                </span>
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z'
                  />
                </svg>

                <span className='text-blue-100'>09048933334, 09161500566</span>
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  className='size-6 text-blue-200'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                  <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
                <span className='text-blue-100'>
                  firstchiocecollege@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-blue-400/30 mt-10 pt-8 text-center'>
          <p className='text-blue-200'>
            &copy; {currentYear} First Choice College of Health Science and
            Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
