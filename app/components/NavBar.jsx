import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { CodeBracketIcon } from '@heroicons/react/24/solid'

export default function NavBar() {

	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsOpen((previous) => !previous);
	};

	return (
		<header className="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-4 border-b-2 border-slate-900">
			<div className="flex items-center justify-between px-4 py-2 sm:p-0">
				<div>
					<NavLink to="/" className="flex flex-nowrap">
						<CodeBracketIcon className="h-10 w-10 text-secondary bg-primary p-1 rounded-full border border-secondary mr-2" />
						<span aria-label="GreenNous Dev" className="text-2xl md:text-3xl font-bold text-slate-900">
							GreekNous Dev
						</span>
					</NavLink>
				</div>
				<div className="flex justify-between items-center">
					<button
						type="button"
						className="text-secondary focus:text-secondary/80 hover:text-purple-300 sm:hidden dark:text-white dark:focus:text-primary"
						onClick={handleClick}
					>
						<svg
							className="fill-current h-8 w-"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							{isOpen ? (
								<path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
							) : (
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							)}
							<title>Menu</title>
						</svg>
					</button>
				</div>
			</div>
			<div className="px-4 pb-2 items-center flex">
				<div
					className={`${isOpen ? 'block' : 'hidden'
						} sm:flex sm:justify-between sm:text-lg sm:p-0 dark:text-white`}
				>
					<NavLink to="/writings" className="
						block sm:mt-0 sm:ml-4 text-secondary py-2 px-4 font-semibold
						hover:underline hover:bg-primary hover:py-2 hover:px-4 hover:rounded-lg
						">
						Writings
					</NavLink>
					<NavLink to="/talks" className="
						block sm:mt-0 sm:ml-4 text-secondary py-2 px-4 font-semibold
						hover:underline hover:bg-primary hover:py-2 hover:px-4 hover:rounded-lg
						">
						Talks
					</NavLink>
					<NavLink to="/projects" className="
						block sm:mt-0 sm:ml-4 text-secondary py-2 px-4 font-semibold
						hover:underline hover:bg-primary hover:py-2 hover:px-4 hover:rounded-lg
						">
						Projects
					</NavLink>
					<NavLink to="/about" className="
						block sm:mt-0 sm:ml-4 text-secondary py-2 px-4 font-semibold
						hover:underline hover:bg-primary hover:py-2 hover:px-4 hover:rounded-lg
						">
						About
					</NavLink>
				</div>
			</div>
		</header>
	)
}