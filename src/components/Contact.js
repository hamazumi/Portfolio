import { AiFillGithub, AiFillMail, AiFillLinkedin, AiFillFileText } from "react-icons/ai"
import Pdf from "../docs/SEresume.pdf"

function Contact() {
    return (
      <section id="contact" className="text-gray-500 bg-green-200 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-500">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed mb-10 text-base">
              Let's get connect and talk about tech!
            </p>
          </div>
          <div>
            <div className="container mx-auto flex flex-wrap justify-between">
              <div>
                <a href="https://www.linkedin.com/in/ken-y-hamamoto/" target="_blank" className="text-xs md:text-base hover:text-gray-700 flex flex-col items-center hover">
                  <AiFillLinkedin style={{ height:"5vh", width:"5vh" }}/>
                  <span>Linkedin</span>
                </a>
              </div>
              <div>
                <a href="https://github.com/hamazumi" target="_blank" className="text-xs md:text-base hover:text-gray-700 flex flex-col items-center">
                  <AiFillGithub style={{ height:"5vh", width:"5vh" }}/>
                  <span>Github</span>
                </a>
              </div>
              <div>
                <a href={ Pdf } target="_blank" className="text-xs md:text-base hover:text-gray-700 flex flex-col items-center">
                  <AiFillFileText style={{ height:"5vh", width:"5vh" }}/>
                  <span>Resume</span>
                </a>
              </div>
              <div className="text-xs md:text-base flex flex-col items-center">
                  <AiFillMail style={{ height:"5vh", width:"5vh" }} />
                  <span>khamamoto12@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact