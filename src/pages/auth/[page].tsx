import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";

type Auth = {
  page: "login" | "join";
};

const Dom = ({ page }: Auth) => {
  const [loginMethods] = useState([
    {
      name: "Google",
      icon: "/static/auth/google.svg",
      action: () => alert("You want to login with Google")
    },
    {
      name: "Facebook",
      icon: "/static/auth/facebook.svg",
      action: () => alert("You want to login with Facebook")
    },
    {
      name: "Github",
      icon: "/static/auth/github.svg",
      action: () => alert("You want to login with Github")
    }
  ]);

  return (
    <div className="w-screen">
      <Navbar hideElements />

      <div className="flex flex-col items-center justify-center ">
        <div>
          <Image
            src="/static/auth/graphic.svg"
            alt=""
            width={250}
            height={200}
          />
        </div>

        <h1 className="mt-6 text-5xl capitalize font-gilroy-bold">{page}</h1>

        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {loginMethods.map(({ name, icon, action }, index) => (
            <Container key={index}>
              <button
                className="flex items-center justify-center h-16 cursor-pointer w-[768px]"
                onClick={action}
              >
                <Image src={icon} alt={name} width={30} height={30} />
              </button>
            </Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Auth(props: Auth) {
  return (
    <>
      <Dom {...props} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { page: "login" }
      },
      {
        params: { page: "join" }
      }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      ...params,
      title: params.page
    }
  };
};
