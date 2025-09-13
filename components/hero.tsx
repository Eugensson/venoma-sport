import Image from "next/image";
import { FaArrowRight, FaFire, FaPlay } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="xl:h-266 bg-grey-50 bg-hero bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right">
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full flex flex-col xl:flex-row items-center">
          <div className="w-full max-w-190 mb-8 md:mb-0 flex flex-col items-center xl:items-start">
            <div className="mb-12 flex items-center gap-4">
              <div className="py-2 px-4 flex items-center gap-2 bg-accent text-primary rounded-full">
                <FaFire />
                <p className="font-semibold">New</p>
              </div>
              <p>Premium Sports Apparel for Peak Performance</p>
            </div>
            <h1 className="h1 mb-10 text-center xl:text-left">
              Unleash
              <br />
              Your Inner
              <br />
              Athlete
            </h1>
            <div className="mb-32 md:mb-0 flex flex-col xl:flex-row gap-10">
              <button type="button" className="btn btn-accent">
                <div className="flex items-center gap-4">
                  <span className="capitalize">Explore collection</span>
                  <FaArrowRight />
                </div>
              </button>
              <button
                type="button"
                className="h-14 flex items-center justify-center text-primary font-medium cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="capitalize">Watch video</span>
                  <div className="p-4 bg-white text-primary rounded-full border-10 border-grey-200">
                    <FaPlay />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative xl:absolute xl:-right-25 xl:-top-7">
            <Image
              src="/assets/img/hero/running.png"
              alt="Running Man"
              width={858}
              height={858}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
