import { HoverBorderGradient } from "@/components/shadcn/ui/hover-border-gradient";
import { TextHoverEffect } from "@/components/shadcn/ui/text-hover-effect";
import { TypewriterEffectSmooth } from "@/components/shadcn/ui/typewriter-effect";
import { Vortex } from "@/components/shadcn/ui/vortex"

const HomePage = () => {
  const words = [
    {
      text: "We",
    },
    {
      text: "Build",
    },
    {
      text: "Profitable",
    },
    {
      text: "Brands",
    },
    {
      text: "That",
    },
    {
      text: "Drive",
    },
    {
      text: "10x",
      className: "text-[var(--color-secondary)] dark:text-[var(--color-secondary)]",
    },
    {
      text: "Revenue.",
      className: "text-[var(--color-secondary)] dark:text-[var(--color-secondary)]",
    },
  ];

  return (
    <>
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="#FFFFFF"
          rangeY={800}
          particleCount={500}
          baseHue={22}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="flex flex-col items-center justify-center relative top-1/2">
            <p className="text-center">We blend brand strategy, design systems, and emerging tech to shape tomorrow’s market leaders.</p>
            <TypewriterEffectSmooth words={words} cursorClassName="bg-[var(--color-secondary)]" />
            <HoverBorderGradient
              containerClassName="rounded-full mt-12 cursor-pointer"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Let’s Build Together</span>
            </HoverBorderGradient>
          </div>
          <TextHoverEffect text="MISANI" />
        </Vortex>
      </div>
    </>
  )
};

export default HomePage;