import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/krish.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Krish Rathi</p>
              <p className="grid-subtext">
                I'm a passionate Web Developer with strong skills in both frontend and backend technologies.
                I work extensively with Python, Java, and C++, and have hands-on experience in AI and Machine Learning.
                From building intelligent ML models to creating dynamic web apps, I focus on real-world impact.
                I'm also experienced with Docker, cloud deployment, and Android development.
                I love turning ideas into powerful, user-friendly digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/tech.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Python, Java, C++, web development, Android, and AI/ML using TensorFlow and 
                OpenCV, with experience in Docker, Git, cloud deployment, 
                and game development using Unity and Unreal.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
          <div>
  <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
  <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
  <Button
    name="Contact Me"
    isBeam
    containerClass="w-full mt-10"
    onClick={() => window.open('https://www.linkedin.com/in/krish-rathi-036222293/', '_blank')}/>
    <Button
    name = "Download Resume"
    isBeam
    containerClass="w-full mt-10"
    onClick={() => window.open('https://drive.google.com/uc?export=download&id=1lCjYdo4LRQA-vZim_Nt9_b4Xc6L5zoFX')}/>
</div>

          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving complex problems and building innovative solutions through code. Programming is not just my profession—it’s my passion.
                I constantly explore new technologies and deepen my expertise in AI, web development, and software engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">krishrathi877@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
