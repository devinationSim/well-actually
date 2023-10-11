import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

          <button type='button' onClick={() => window.open()} className='black_btn'>
            Github
          </button>
        </nav>

        <h1 className='head_text'>
          Throw facts in their face with <br className='max-md:hidden' />
          <span className='orange_gradient'>
            AI
          </span>
        </h1>
        <h2 className='desc'>
          Using Summize, an open-source article summarizer, let those people with short attention spans know that they are <span className='orange_gradient'>
            wrong
          </span> with <span className='orange_gradient'>
            concise evidence!
          </span>
        </h2>
    </header>
  )
}

export default Hero