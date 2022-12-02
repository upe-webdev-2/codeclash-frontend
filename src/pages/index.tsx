import Button from "@/components/Button";
import Navbar from "@/components/Navbar/Navbar";
import { a as three } from "@react-spring/three";
import { ContactShadows, Environment, Html, Stars } from "@react-three/drei";
import { GetServerSideProps } from "next";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import Router from "next/router";
import { Suspense, useState } from "react";
import { useSpring } from "react-spring";
import { Model } from "../components/laptop";
import { getSession } from "next-auth/react"

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
    <div className="relative">
      <div className="absolute top-0 w-full">
        <Navbar user={user} />
      </div>
      <div className="w-[50vw] h-screen flex justify-center flex-col gap-8 pl-[5rem]">
        <h1 className="font-gilroy-bold text-[60px]">
          Unleash Your <span className="animated-text">Code</span>
        </h1>
        <p className="font-gilroy -mt-7">
          <i>CodeClash</i> is a competitive coding platform for developers to
          showcase their skills and learn from each other all while enhancing
          their technical interview abilities. Join the community today!
        </p>
      </div>

      <div className="absolute bottom-16 right-[50%] translate-x-1/2">
        <Button type="fill" onclick={() => Router.push("/menu")} movingGradient>
          Play Now
        </Button>
      </div>
    </div>
  );
}

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
          <Stars count={2000} />
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
  return {
    props: {
      title: "Landing Page",
      user: session?.user ? session?.user : null
    }
  };
};
