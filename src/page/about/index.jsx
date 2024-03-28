import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section id="about" className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <h1 className="text-5xl text-center py-8">Xizmatlar</h1>
      <div className="container mx-auto space-y-12">
        <div data-aos="zoom-in" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <LazyLoadImage src="https://source.unsplash.com/640x480/?1" alt="services image" className="h-80 dark:bg-gray-500 aspect-video" effect="blur" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
            <button type="button" className="self-start">Action</button>
          </div>
        </div>
        <div data-aos="zoom-in" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <LazyLoadImage src="https://source.unsplash.com/640x480/?2" alt="services image" className="h-80 dark:bg-gray-500 aspect-video" effect="blur" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
            <button type="button" className="self-start">Action</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
