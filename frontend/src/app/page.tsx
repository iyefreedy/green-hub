import Image from "next/image";
import Link from "next/link";
import appLogo from "@/assets/images/green-hub.svg";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export default function Home() {
	return (
		<main>
			<section className="bg-emerald-50">
				<nav className="container px-4">
					<div className="h-28 flex justify-between items-center">
						<div className="flex items-center">
							<Link href={"/"} className="flex items-center">
								<Image
									src={appLogo}
									width={0}
									height={0}
									alt="Green Hub"
									className="w-14 h-14"
									priority
								/>
								<span className="font-semibold text-3xl hidden">Green Hub</span>
							</Link>

							<ul className="hidden">
								<li>
									<Link href={"/"}>Our Goodies</Link>
								</li>
								<li>
									<Link href={"/"}>Upcoming Events</Link>
								</li>
								<li>
									<Link href={"/"}>Join Seller Squad</Link>
								</li>
								<li>
									<Link href={"/"}>About Us</Link>
								</li>
							</ul>
						</div>

						<div>
							<button>
								<AiOutlineSearch className="h-6 w-6 fill-emerald-400" />
							</button>
							<button>
								<AiOutlineMenu className="h-6 w-6 fill-emerald-400" />
							</button>
						</div>
					</div>
				</nav>
				<div className="h-[calc(100vh_-_7rem)]"></div>
			</section>
		</main>
	);
}
