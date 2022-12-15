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
          smooth: false,
          preset: "links",
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 150,

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },

          // interactivity: {
          //   events: {
          //     onClick: {
          //       enable: false,
          //       mode: ["push", "remove"],
          //     },
          //     resize: true,
          //     onHover: {
          //       enable: true,
          //       mode: ["grab", "slow"],
          //     },
          //   },
          //   modes: {
          //     push: {
          //       quantity: 4, // click tang node
          //     },
          //     remove: {
          //       quantity: 4, // click giam node
          //     },

          //     grab: {
          //       distance: 222,
          //       duration: 1.5,
          //     },
          //   },
          // },
          // particles: {
          //   color: {
          //     value: "#ffffff",
          //   },
          //   links: {
          //     color: "#ffffff",
          //     distance: 180, // khoang cach cac node
          //     enable: true,
          //     opacity: 0.5,
          //     width: 1,
          //   },
          //   //va cham
          //   collisions: {
          //     enable: false,
          //   },
          //   move: {
          //     directions: "none",
          //     enable: true,
          //     outModes: {
          //       default: "bounce",
          //     },
          //     random: false,
          //     speed: 1.15,
          //     straight: false,
          //   },
          //   number: {
          //     density: {
          //       enable: true,
          //       area: 1800,
          //     },
          //     value: 200,
          //   },
          //   opacity: {
          //     value: 0.5,
          //   },
          //   shape: {
          //     type: "circle",
          //   },
          //   size: {
          //     value: { min: 1, max: 5 },
          //   },
          // },
          detectRetina: true,
        }}
      />
    </>
  );
};
export default ParticlesContainer;
