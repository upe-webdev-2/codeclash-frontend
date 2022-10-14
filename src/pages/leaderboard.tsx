import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import SimpleCard from "../components/SimpleCard";
import PromptPanel from "../components/PromptPanel";
import { useState, useEffect } from "react";
import Editor, { useMonaco, loader } from "@monaco-editor/react";
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
