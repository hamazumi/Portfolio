function Contact() {
    return (
      <section id="contact" className="text-gray-400 bg-green-200 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-400">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed mb-20 text-base">
              Let's get connect and talk about tech!
            </p>
          </div>
          <div>
            <div className="container mx-auto flex flex-wrap justify-between">
              <div>Linkedin</div>
              <div>Email</div>
              <div>Github</div>
              <div>Resume</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact