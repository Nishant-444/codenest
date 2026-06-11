import { Button } from "../components/ui/button";
import { prisma } from "../lib/prisma";

export default async function Home() {
	const users = await prisma.user.findMany();
	return (
		<div
			className={
				"flex flex-col items-center justify-center h-screen bg-gray-100"
			}
		>
			<Button>Hello</Button>
			{/* Temporary render to prove the DB connection works */}
			<pre className="p-4 bg-white rounded border text-sm">
				{JSON.stringify(users, null, 2)}
			</pre>
		</div>
	);
}
