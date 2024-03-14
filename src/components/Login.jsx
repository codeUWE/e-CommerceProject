export default function Login() {
	return (
		<>
			<div className="w-3/4 m-auto flex justify-center items-center">
				<div className="bg-info bg-opacity-70 w-96 m-auto my-10 rounded-xl shadow-xl">
					<div className="h-32 flex items-end justify-center">
						<h2 className="text-5xl font-bold">Login.</h2>
					</div>
					<div className="flex">
						<div className="container w-80 m-auto h-96 items-center flex flex-col">
							<label className="input input-bordered bg-white flex items-center gap-2 mt-10 mb-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
									<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
								</svg>
								<input type="text" className="grow" placeholder="Email" />
							</label>
							<label className="input input-bordered bg-white flex items-center gap-2 mb-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
								</svg>
								<input type="text" className="grow" placeholder="Username" />
							</label>
							<label className="input input-bordered bg-white flex items-center gap-2 mb-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path
										fillRule="evenodd"
										d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
										clipRule="evenodd"
									/>
								</svg>
								<input type="password" className="grow" value="password" />
							</label>
							<div className="flex justify-center">
								<button className="btn btn-secondary w-32 mt-10 rounded-3xl">
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" p-5 rounded-xl">
					<h2 className="text-4xl font-bold mb-8">
						Don&apos;t have <br /> an account? <br />
						Register for <span className="text-accent">free</span>, <br /> and
						have access to <br /> the universe of{' '}
						<span className="text-red-600">T</span>
						<span className="text-blue-600">rendera</span>.
					</h2>
					<button className="btn btn-xl rounded-3xl shadow-xl btn-primary text-primary-content">
						Register here
					</button>
				</div>
			</div>
			<div className="divider divider-secondary mt-12"></div>
			<footer className="footer p-10 bg-base-100 text-base-content mt-10">
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
		</>
	);
}
