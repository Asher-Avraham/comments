"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type propTypes = {
  image: string;
};

export default function Logged({ image }: propTypes) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          className="w-14 rounded-full"
          src={image}
          alt="profile pic"
          priority
        />
      </Link>
    </li>
  );
}
