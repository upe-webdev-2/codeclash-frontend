import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Model } from '../components/laptop'
import { useSpring } from "react-spring";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { ContactShadows, Environment } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
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
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <>
      <three.pointLight
        position={[10, 10, 10]}
        intensity={1.5}
        // color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
      />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={e => (e.stopPropagation(), setOpen(!open))}
        >
          <Model open={open} 
          position={[0, -3.3, 0]}
          />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        position={[0, -4.5, 0]}
        opacity={0.4}
        scale={20}
        blur={1.75}
        far={4.5}
      />
    </>
  );
};

export default function landingPage() {
  return (
    <>
      <DOM />
      <R3F />
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
