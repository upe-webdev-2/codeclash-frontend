import Loading from "@/templates/Loading";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";

const LoadingSetup = () => {
  const cancel = () => {};
  return (
    <div className="w-screen">
      <Navbar />
      <Loading onCancel={cancel} />
    </div>
  );
};

const ClashSetup = () => {
  return <>Hi</>;
};

const Dom = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  // sockets will be handled here

  return (
    <>
      <button
        className="fixed left-0 z-50 p-3 bg-white text-black rounded-xl"
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        Reverse loading
      </button>
      {isLoading ? <LoadingSetup /> : <ClashSetup />}
    </>
  );
};

type Clash = any;

export default function Clash(props: Clash) {
  return (
    <>
      <Dom {...props} />
    </>
  );
}
