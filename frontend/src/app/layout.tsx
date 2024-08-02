import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const author = localFont({
	src: [
		{
			path: "./../assets/fonts/Author-ExtraLight.otf",
			weight: "200",
		},
		{
			path: "./../assets/fonts/Author-Light.otf",
			weight: "300",
		},
		{
			path: "./../assets/fonts/Author-Regular.otf",
			weight: "400",
		},
		{
			path: "./../assets/fonts/Author-Medium.otf",
			weight: "500",
		},
		{
			path: "./../assets/fonts/Author-Semibold.otf",
			weight: "600",
		},
		{
			path: "./../assets/fonts/Author-Bold.otf",
			weight: "700",
		},
	],
});

export const metadata: Metadata = {
	title: "Green Hub",
	description:
		"Green Hub is a sustainable marketing community platform that connects eco-friendly businesses. Join to collaborate, share resources, and expand your network within the sustainable business ecosystem.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={author.className}>{children}</body>
		</html>
	);
}
