import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import LeaderboardList from "@/components/profile/leaderboard/leaderboard-list";
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
      <h1 className="text-6xl font-bold mb-5 pt-10 px-6">Profile Page</h1>
      <p className="text-xl text-pink-600">Working on it...</p>
      <LeaderboardList />
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return <></>;
};

export default function leaderboard() {
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
      title: "Profile"
    }
  };
}
