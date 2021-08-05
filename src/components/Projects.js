import { CodeIcon } from "@heroicons/react/solid"
import { projects } from "../data"


function Projects() {
  return (
    <section id="projects" className="text-gray-500 bg-green-200 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-5xl font-bold title-font mb-4 text-gray-500">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative transition duration-500 ease-out transform hover:scale-105">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-0 hover:opacity-100"
                  src={project.image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
  
  export default Projects