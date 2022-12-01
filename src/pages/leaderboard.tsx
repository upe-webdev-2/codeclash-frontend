import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// DOM elements here
const DOM = () => {
  return (
    <>
      <h1 className="text-6xl font-bold mb-5 pt-10 px-6">
        Leaderboard Page :/
      </h1>
      <p className="text-xl text-pink-600">Working on it...</p>
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
      title: "Leaderboard"
    }
  };
}
