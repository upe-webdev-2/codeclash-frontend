import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import SimpleCard from "../components/SimpleCard";

// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(
  () => import("@/components/canvas/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

// DOM elements here
const DOM = () => {
  const { router } = useStore();

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold mb-5 ">
        Welcome to{" "}
        <Link href="/">
          <span className="text-pink-500 cursor-pointer">CodeClash!</span>
        </Link>
      </h1>

      <div className="mt-6 max-w-4xl flex-wrap items-center justify-around hidden sm:w-full md:flex">
        <SimpleCard
          title="Playground"
          body="Try out our interactive editor!"
          href="/playground"
        />

        <SimpleCard
          title="Leaderboard"
          body="See the top players on the platform!"
          href="/leaderboard"
        />
        <SimpleCard
          title="Problems"
          body="Check out our list of problems!"
          href="/problems"
        />
        <SimpleCard
          title="Profile"
          body="Access your profile information!"
          href="/profile"
        />
      </div>
    </div>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
  const { router } = useStore();
  const handleOnClick = () => {
    router.push("/two");
  };

  return (
    <>
      <Shader onClick={handleOnClick} />
    </>
  );
};

export default function Home() {
  return (
    <>
      <DOM />
      {/* <R3F /> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
