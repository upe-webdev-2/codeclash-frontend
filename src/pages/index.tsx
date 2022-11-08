import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
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
          <Model open={open} />
          {/* hinge={props.open.to([0, 1], [1.575, -0.425])} */}
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
