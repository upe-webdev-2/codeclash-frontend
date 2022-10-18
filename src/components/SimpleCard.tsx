import React from "react";
import Link from "next/link";

type PropTypes = {
  title: string;
  body: string;
  href: string;
};

const SimpleCard = (props: PropTypes) => {
  return (
    <Link href={props.href}>
      <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-pink-600 hover:cursor-pointer focus:text-pink-600">
        <h3 className="text-2xl font-bold">{props.title} &rarr;</h3>
        <p className="mt-4 text-xl">{props.body}</p>
      </div>
    </Link>
  );
};

export default SimpleCard;
