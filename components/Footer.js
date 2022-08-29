import Image from 'next/image'
export default function Footer(){
	return(
		<footer className="bg-sky-900 my-3">
      		<div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
		        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
			        <div className="mx-auto my-6 text-center text-white md:hidden">
			        	Copyright &copy; 2022, All Rights Reserved
			        </div>
			        <div>
			        	<Image src="/logo-white.svg" className="h-8" alt="" />
			        </div>
		          	<div className="flex justify-center space-x-4">
			            <a href="#">
			            	<Image src="/icon-facebook.svg" alt="" className="h-8" />
			            </a>
			            <a href="#">
			            	<Image src="/icon-youtube.svg" alt="" className="h-8" />
			            </a>
			            <a href="#">
			            	<Image src="/icon-twitter.svg" alt="" className="h-8" />
			            </a>
			            <a href="#">
			            	<Image src="/icon-pinterest.svg" alt="" className="h-8" />
			            </a>
			            <a href="#">
			            	<Image src="/icon-instagram.svg" alt="" className="h-8" />
			            </a>
		          	</div>
		        </div>
        		<div className="flex justify-around space-x-32">
		          	<div className="flex flex-col space-y-3 text-white">
		            	<a href="#" className="hover:text-orange-500">Home</a>
		            	<a href="#" className="hover:text-orange-500">Pricing</a>
		            	<a href="#" className="hover:text-orange-500">Products</a>
		            	<a href="#" className="hover:text-orange-500">About</a>
		          	</div>
          			<div className="flex flex-col space-y-3 text-white">
            			<a href="#" className="hover:text-orange-500">Careers</a>
            			<a href="#" className="hover:text-orange-500">Community</a>
            			<a href="#" className="hover:text-orange-500">Privacy Policy</a>
          			</div>
        		</div>

		        <div className="flex flex-col justify-between">
		          	<form>
			            <div className="flex space-x-3">
			              	<input
			                	type="text"
			                	className="flex-1 px-4 rounded-full focus:outline-none"
			                	placeholder="Updated in your inbox"
			              	/>
			              	<button
			                	className="px-6 py-2 text-white rounded-full bg-red-700 hover:bg-red-400 focus:outline-none"
			             	>
			                	Go
			              	</button>
			            </div>
		          	</form>
		          	<div className="hidden text-white md:block">
		            	Copyright &copy; 2022, All Rights Reserved
		          	</div>
		        </div>
      		</div>
    	</footer>
	)
}