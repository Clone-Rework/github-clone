import Head from "next/head";
import { FileExplorer } from "./components/FileExplorer";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { RepoNav } from "./components/RepoNav";
import { RepoTabs } from "./components/RepoTabs";

export default function Home() {
	return (
		<div className='text-gray-900 text-sm'>
			<Navbar />
			<RepoTabs />
			<RepoNav />
			<FileExplorer />
			<Footer />
		</div>
	);
}
