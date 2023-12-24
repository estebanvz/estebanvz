import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-16"
              data-aos="zoom-y-out"
            >
              Unlock Data-Driven Success
            </h1>
            <div className="grid justify-items-center">
              <img className="rounded-full w-60 h-60 mb-16" src="https://media.licdn.com/dms/image/C4D03AQFaEyQDSMkznA/profile-displayphoto-shrink_800_800/0/1662340742374?e=1708560000&v=beta&t=EokiOmQweCZwZRF5wCAax3nzQ_iTArainBabA-4GA2A" alt="profile" />
            </div>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-16"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                I'm Esteban Vilca, an international Data Scientist and Engineer with a diverse background in healthcare, retail, and the financial sector. My experience extends across Argentina, Colombia, Brazil, Peru, Chile, and currently, Canada. Specializing in artificial intelligence, machine learning, cloud computing, and software development, I leverage my Master's in Computer Science to translate complex data into actionable business insights. Fluent in English, Spanish, and Portuguese, I excel in global, multicultural teams, driving data-driven strategies for multinational companies.              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://forms.gle/ab2pSX1wD1fYtscX8"
                    >
                    Contact
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="https://www.linkedin.com/in/estebanvz/"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
