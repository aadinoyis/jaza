import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#105C04] px-4 lg:px-24 py-12 text-[#BDBDBD] text-[.875rem]'>
      <div className='flex flex-col lg:flex-row justify-start lg:justify-center text-left gap-8 py-24'>
        <div className='grow'>
          <ul className='flex flex-col gap-y-4'>
            <li className='font-semibold text-[#ffffff]'>ADDRESS</li>
            <li className='flex gap-x-4'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  fill="#BDBDBD"
                  d="M7 1.167c-2.45 0-4.667 1.878-4.667 4.783 0 1.855 1.43 4.036 4.282 6.55a.593.593 0 00.776 0c2.847-2.514 4.276-4.695 4.276-6.55 0-2.905-2.217-4.784-4.667-4.784zM7 7a1.17 1.17 0 01-1.167-1.167A1.17 1.17 0 017 4.666a1.17 1.17 0 011.167 1.167A1.17 1.17 0 017 7z"
                ></path>
              </svg>
              <span>MB12 Hse 5, Ganiyu Dawudu Street, Lekki, Lagos.</span>
            </li>
            <li className='flex gap-x-4'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  fill="#BDBDBD"
                  d="M3.862 6.294a8.836 8.836 0 003.844 3.844l1.283-1.283a.58.58 0 01.595-.14c.654.216 1.36.332 2.083.332.32 0 .583.263.583.584v2.036c0 .32-.262.583-.583.583A9.916 9.916 0 011.75 2.333c0-.32.263-.583.583-.583h2.042c.32 0 .583.263.583.583 0 .73.117 1.43.333 2.083a.585.585 0 01-.146.595L3.862 6.294z"
                ></path>
              </svg>
              <span>+234 701-708-5158</span>
            </li>
            <li className='flex gap-x-4'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  fill="#BDBDBD"
                  d="M10.667.333H1.333C.692.333.173.858.173 1.5l-.006 7a1.17 1.17 0 001.166 1.167h9.334A1.17 1.17 0 0011.833 8.5v-7A1.17 1.17 0 0010.667.333zm0 2.334L6 5.584 1.333 2.667V1.5L6 4.417 10.667 1.5v1.167z"
                ></path>
              </svg>
              <span>myjaza.app@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className='grow flex flex-col lg:flex-row lg:justify-between gap-8'>
          <ul className='flex flex-col gap-y-4'>
            <li className='font-semibold text-[#ffffff]'>QUICK LINKS</li>
            <li><a href="/">Home</a></li>
            <li><a href="/#about-us">About Us</a></li>
            <li><a href="/#properties">Properties</a></li>
            <li><a href="/#how-it-works">How it works</a></li>
          </ul>

          <ul className='flex flex-col gap-y-4'>
            <li className='font-semibold text-[#ffffff]'>LEGAL LINKS</li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Conditions</a></li>
            <li><a href="/">Policy</a></li>
          </ul>

          <ul className='flex flex-col gap-y-4'>
            <li className='font-semibold text-[#ffffff]'>FOLLOW US ON</li>
            <li><a href="https://facebook.com/myjaza.app">Facebook</a></li>
            <li><a href="https://twitter.com/MyJazaApp">Twitter</a></li>
            <li><a href="https://instagram.com/myjaza.app">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className='mt-8'>Copyright @ 2024 Jazã & Sakeenah.</div>
    </footer>
  )
}

export default Footer