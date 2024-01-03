import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="well-actually-logo" className='w-28 object-contain' />

          
        </nav>

        <h1 className='head_text'>
          Throw facts in their face with <br className='max-md:hidden' />
          <span>
            AI
          </span>
        </h1>
        <h2 className='desc'>
          Using Summize, an open-source article summarizer, let those people with short attention spans know that they are <span >
            wrong
          </span> with <span>
            concise evidence!
          </span>
        </h2>
    </header>
  )
}

export default Hero