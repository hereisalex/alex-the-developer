import PostHeader from "./postHeader";
import CoverImage from "./coverImage";
import Link from "next/link";
import DateFormatter from "./dateFormatter";

const Projects = () => {
  return (
    <section>
      <div className="rounded-3xl bg-[#dcd74f] w-100 p-[50px] m-5">

      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tight" id="projects">
        Projects
      </h2>
      <div className="projects grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <div>
          <div className="mb-5">
            <CoverImage slug="liftr-cover-image" title="Liftr" src="/assets/projects/liftrcover.png" link="https://github.com/hereisalex/liftr-react-native" />
          </div>
          <h3 className="text-3xl mb-3 leading-snug">
            <Link
              as={`https://github.com/hereisalex/liftr-react-native`}
              href="https://github.com/hereisalex/liftr-react-native"
              className="hover:underline"
            >
              Liftr
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <p>Smart workout tracker that uses pattern recognition to identify trends and suggest specific exercises. Emphasizes ergonomics, simplicity and frictionless design. </p>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <CoverImage slug=-"autogpt-cover-image" title="AutoGPT" src="assets/projects/gpt.png" link="https://github.com/hereisalex/autogpt">
          </div>
          <h3 className="text-3xl mb-3 leading-snug">
            <Link
              as={`https://github.com/hereisalex/autogpt`}
              href="https://github.com/hereisalex/autogpt"
              className="hover:underline"
            >
              AutoGPT
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <p>An experimental open-source attempt to make GPT-4 fully autonomous.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Projects;