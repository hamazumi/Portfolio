import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div id="nav" className="title-font font-medium text-white mb-4 md:mb-0">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="ml-3 text-xl hover:text-gray-400 cursor-pointer"
          >Ken Hamamoto</Link>
        </div>
        <nav id="nav" className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-5 hover:text-white cursor-pointer"
          >Projects</Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-5 hover:text-white cursor-pointer"
          >Technical Knowledge</Link>
        </nav>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0 cursor-pointer"
        >Contact TEST TEST</Link>
      </div>
    </header>
  )
  }
  
  export default Navbar