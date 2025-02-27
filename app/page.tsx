"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="grid grid-cols-4 gap-3 w-full">
      <Link href="/merge">Merge PDF</Link>
    </section>
  );
}
