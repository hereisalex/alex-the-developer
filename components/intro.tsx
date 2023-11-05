import { CMS_NAME } from '../lib/constants'
import { TypeAnimation } from 'react-type-animation'
const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        /AlexThe<span style={{ color: "#fc6b03" }}>Developer</span>/
      {/* <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      2000,
      '/AlexTheDeveloper/', // initially rendered starting point
      1000,
      '/AlexTheEngineer/',
      1000,
      '/AlexTheDesigner/',
      1000,
      '/AlexTheCollaborator/',
      1000,
      '/AlexTheCreative/',
      1000,
      '/AlexTheDeveloper/',
      1,
    ]}
    speed={40}
    style={{ fontSize: '1.5em' }}
    repeat={0}

  /> */}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      </h4>
    </section>
  )
}

export default Intro
