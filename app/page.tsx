"use client";
import React from "react";
import { Chicle } from "next/font/google";
import ScrollHorizontally from "./components/ScrollHorizontally";
const chicle = Chicle({ subsets: ["latin"], weight: "400" });

export default function Home() {
	return (
		<main className={`${chicle.className}`}>
			<ScrollHorizontally />
		</main>
	);
}
