import { LazyLoadImage } from "react-lazy-load-image-component"

const Contact = () => {
  return (
    <>
      <section className="w-full" id="contact">
        <div data-aos="zoom-in-up"
          className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span> instead.
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <LazyLoadImage effect="blur" className="w-[15rem]" src="https://i.pinimg.com/564x/5b/ac/02/5bac02a523df792c7e4e2fa6be49c354.jpg" alt="this is contact img" />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact