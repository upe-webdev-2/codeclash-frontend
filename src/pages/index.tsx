import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import { Model } from "../components/laptop";
import { useSpring } from "react-spring";
import { Suspense, useState } from "react";
import { a as three } from "@react-spring/three";
import { ContactShadows, Environment, Html } from "@react-three/drei";

import { getSession, SessionProvider, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(
//   () => import("@/components/canvas/ShaderExample/ShaderExample"),
//   {
//     ssr: false
//   }
// );
const Canvas = dynamic(() => import("@/components/layout/canvas"), {
  ssr: false
});

// DOM elements here
const DOM = ({
  user
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) => {
  return (
    <div className="relative top-0 left-0 flex flex-col items-center justify-center w-full h-screen">
      <div className="absolute top-0 w-full">
        <Navbar user={user} />
      </div>
    </div>
  );
};

// Canvas/R3F components here
const R3F = ({
  user
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) => {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });

  return (
    <>
      <Html fullscreen>
        <SessionProvider>
          <DOM user={user} />
        </SessionProvider>
      </Html>

      <three.pointLight
        position={[10, 10, 10]}
        intensity={1.5}
        color={props.open.to([0, 1], ["#f0f0f0", "#0F1021"])}
      />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={e => (e.stopPropagation(), setOpen(!open))}
        >
          <Model open={open} position={[0, -3.3, 0]} />
        </group>
        <Environment preset="warehouse" />
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

export default function LandingPage({
  user
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) {
  return (
    <>
      <Canvas>
        <R3F user={user} />
      </Canvas>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/menu",
        permanent: false
      }
    };
  }

  return {
    props: {
      title: "Landing Page",
      user: session?.user ? session?.user : null
    }
  };
};
