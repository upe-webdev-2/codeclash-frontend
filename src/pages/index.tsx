import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
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
      <h1 className="text-6xl font-bold mb-5 pt-10 px-6">Landing Page :/</h1>
      <p className="text-xl text-pink-600">Working on it...</p>
      <Link href="/menu">
        <span className="text-pink-500 cursor-pointer text-5xl">
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
