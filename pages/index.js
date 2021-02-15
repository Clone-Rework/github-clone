import Head from "next/head";
import Navbar from "./components/Navbar";
import { RepoTabs } from "./components/RepoTabs";

export default function Home() {
	return (
		<div className='text-gray-900 text-sm'>
			<Navbar />
			<RepoTabs />
		</div>
	);
}
