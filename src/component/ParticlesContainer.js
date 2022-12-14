import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          smooth: true,
          preset: "links",
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 150,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: ["push", "remove"],
              },
              resize: true,
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              push: {
                quantity: 3, // click tang node
              },
              remove: {
                quantity: 2, // click giam node
              },

              grab: {
                distance: 200,
                duration: 3.5,
              },
            },
            // modes: {
            //   grab: {
            //     distance: 140,
            //     line_linked: {
            //       opacity: 1,
            //     },
            //   },
            //   bubble: {
            //     distance: 400,
            //     size: 40,
            //     duration: 2,
            //     opacity: 8,
            //     speed: 3,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 0.4,
            //   },
            //   push: {
            //     particles_nb: 4,
            //     duration: 0.5,
            //   },
            //   remove: {
            //     particles_nb: 4,
            //   },
            // },
            // retina_detect: true,
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 160, // khoang cach cac node
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};
export default ParticlesContainer;
