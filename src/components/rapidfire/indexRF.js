function IndexRf() {
	return (
		<div class="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
			<div class="min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
				<div
					onClick={() => (window.location.href = "/rapidfire/friends")}
					class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none"
				>
					<div>
						<img
							src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="Abstract Design"
							class="w-full h-40 sm:h-48 object-cover"
						/>
					</div>
					<div class="py-5 px-6 sm:px-8">
						<h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">rapidfire for friends</h2>
						{/* <p class="text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.</p> */}
					</div>
				</div>
				<div
					onClick={() => (window.location.href = "/rapidfire/bff")}
					class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none"
				>
					<div>
						<img
							src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="Web Design"
							class="w-full h-40 sm:h-48 object-cover"
						/>
					</div>
					<div class="py-5 px-6 sm:px-8">
						<h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">rapidfire for BFF</h2>
						{/* <p class="text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.</p> */}
					</div>
				</div>
				<div
					onClick={() => (window.location.href = "/rapidfire/couples")}
					class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-5 lg:order-none"
				>
					<div>
						<img
							src="https://images.pexels.com/photos/986733/pexels-photo-986733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="Photography"
							class="w-full h-40 sm:h-48 object-cover"
						/>
					</div>
					<div class="py-5 px-6 sm:px-8">
						<h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">rapidfire for couples</h2>
						{/* <p class="text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndexRf;
