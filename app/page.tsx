// import Image from "next/image";
import Banner from "@/components/banner/banner";
import BrandList from "@/components/brandlist/brandlist";
import CardSection from "@/components/cardsection/cardsection";
import Footer from "@/components/footer/footer";
import ImageWithText from "@/components/imagewithtext/imagewithtext";
import ProjectSection from "@/components/projectsection/projectsection";
import ServiceSection from "@/components/servicesection/servicesection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* flex flex-col gap-8 row-start-2 items-center sm:items-start mt-80 */}
        <Banner/>
        <BrandList/>
        <ServiceSection/>
        <ImageWithText/>
        <ProjectSection/>
        <CardSection/>
        <Footer/>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}



