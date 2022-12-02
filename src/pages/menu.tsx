import Navbar from "@/components/Navbar/Navbar";
import ProblemsMenu from "@/templates/ProblemsMenu";
import { useSession } from "next-auth/react";
import Router from "next/router";

const Dom = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    Router.push("/auth");
    return <></>;
  }

  const searchForGame = (difficulty: string) => {
    console.log(`Searching for ${difficulty}`);
    Router.push(`/clash?difficulty=${difficulty.toLowerCase()}`);
  };
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <ProblemsMenu searchForGame={searchForGame} />
      </div>
    </>
  );
};

export default function Menu() {
  return (
    <>
      <Dom />
    </>
  );
}
