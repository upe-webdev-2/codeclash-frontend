import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import ProblemsMenu from "@/components/templates/ProblemsMenu";
// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(
  () => import("@/components/canvas/ShaderExample/ShaderExample"),
  {
    ssr: false
  }
);

// DOM elements here
const DOM = () => {
  const { router } = useStore();
  const { data } = useSession();

  return (
    <>
      <Navbar />
      <h1 className="px-6 pt-10 mb-5 text-6xl font-bold">Landing Page :/</h1>
      <p className="text-xl text-pink-600">Working on it...</p>
      <Link href="/menu">
        <span className="text-5xl text-pink-500 cursor-pointer">
          Go to CodeClash Menu!
        </span>
      </Link>
      {data ? (
        <>
          <button onClick={() => signOut()}>Sign Out</button>
          <h3>Signed in as {data.user.name}</h3>
        </>
      ) : (
        <>
          <button onClick={() => signIn("google")}>Sign In</button>
          <h3>not signed in</h3>
        </>
      )}
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return <></>;
};

export default function landingPage() {
  return (
    <>
      <DOM />
      {/* <R3F /> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Landing Page"
    }
  };
}
