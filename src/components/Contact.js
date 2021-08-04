import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai"

function Contact() {
    return (
      <section id="contact" className="text-gray-400 bg-green-200 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-400">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed mb-10 text-base">
              Let's get connect and talk about tech!
            </p>
          </div>
          <div>
            <div className="container mx-auto flex flex-wrap justify-between">
              <div>
                <a href="https://www.linkedin.com/in/ken-y-hamamoto/" className="flex flex-col items-center">
                  <AiFillLinkedin style={{ height:"6vh", width:"6vh" }}/>
                  <span>Linkedin</span>
                </a>
              </div>
              <div>
                <a href="https://github.com/hamazumi" className="flex flex-col items-center">
                  <AiFillGithub style={{ height:"6vh", width:"6vh" }}/>
                  <span>Github</span>
                </a>
              </div>
              <div className="flex flex-col items-center">
                  <AiFillMail style={{ height:"6vh", width:"6vh" }}/>
                  <span>khamamoto12@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact