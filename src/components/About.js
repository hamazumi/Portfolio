import { Link } from "react-scroll"


function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Ken Hamamoto
            <br className="hidden lg:inline-block" />
            Full-Stack Software Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a software engineer interested in leveraging technology to improve people’s lives. I bring a diverse background of troubleshooting experience and would like to continue building upon it with new tech languages.  
          Born and raised in Oahu, I believe in bringing a little Aloha in people’s day and would love to be able to use tech to do that. I have previously worked in industries such as marine mammal training, aeronautical mechanics, commercial real estate, and coaching high school volleyball. 
          I’d like to bring together all these unique techniques to complete complex problems in software. 
          </p>
          <div className="flex justify-center">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
            >Contact</Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer"
            >Projects</Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="hawaii"
            src='./Kualoa.jpeg'
          />
        </div>
      </div>
    </section>
  )
}
  
  export default About