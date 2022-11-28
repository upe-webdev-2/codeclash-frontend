import Navbar from "@/components/Navbar/Navbar";
import LeaderboardList from "@/components/profile/leaderboard/leaderboard-list";
import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// DOM elements here
const DOM = () => {
  return (
    <>
      <Navbar />
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
      title: "Leaderboard"
    }
  };
}
