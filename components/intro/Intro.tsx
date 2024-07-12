import IntroImage from "@/public/images/profile.jpg";
import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="p-4 relative">
        <Image width={650} height={650} alt="into-image" src={IntroImage.src} className="rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-800 bg-opacity-30 rounded-3xl pointer-events-none"></div>

        <div className="absolute bottom-12 right-10">
            <h1>حبیب</h1>
            <p>سلام من حبیبتونم!</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Intro;
