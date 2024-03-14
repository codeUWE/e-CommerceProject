export default function Contact() {
	return (
		<>
			<div className="flex w-full justify-center items-center p-10 gap-10">
				<div className="contactTitle w-1/3 ">
					<h2 className="text-4xl text-right text-base-content font-semibold">
						Don&apos;t be shy to contact us. <br /> Use the form on this page{' '}
						<br /> to tell us how we can <br /> improve your daily
						<br />
						<span className="text-accent">experience</span>.
					</h2>
				</div>
				<div className="flex items-center justify-center p-12 w-4/12 shadow-xl rounded-lg bg-error bg-opacity-70">
					<div className="mx-auto w-full max-w-[550px]">
						<h2 className="text-5xl font-bold mb-5 text-error-content text-center">
							Contact.
						</h2>
						<form>
							<div className="mb-5">
								<label className="mb-3 block text-base font-medium text-[#07074D]">
									Full Name
								</label>
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								/>
							</div>
							<div className="mb-5">
								<label className="mb-3 block text-base font-medium text-[#07074D]">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									placeholder="example@domain.com"
									className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								/>
							</div>
							<div className="mb-5">
								<label className="mb-3 block text-base font-medium text-[#07074D]">
									Subject
								</label>
								<input
									type="text"
									name="subject"
									id="subject"
									placeholder="Enter your subject"
									className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								/>
							</div>
							<div className="mb-5">
								<label className="mb-3 block text-base font-medium text-[#07074D]">
									Message
								</label>
								<textarea
									rows="4"
									name="message"
									id="message"
									placeholder="Type your message"
									className="w-full resize-none rounded-md bg-primary py-3 px-6 text-primary-content font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
								></textarea>
							</div>
							<div className="w-full flex justify-center">
								<button className="hover:shadow-form rounded-3xl bg-secondary py-3 px-8 text-base font-semibold text-white outline-none">
									Submit
								</button>
							</div>
						</form>
					</div>
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
