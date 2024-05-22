// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

const otherProjects= [
  {
    img:"/image/portfolio_hero.png",
    title: "A web app portfolio for Front-end Developers",
    description: "A concise showcase of your talents and achievements, elegantly presented for maximum impact.",
    liveUrl:"https://ebrahimkhan.vercel.app/",
    gitUrl: "https://github.com/EbrahimkhanM/ebrahim-rm-portfolio",
    app:"Portfolio"
  },
  {
    img:"/image/news_hero.png",
    title: "React.js news web application showcasing diverse resources.",
    description: "Explore our captivating React.js news web app, featuring a curated selection of diverse resources. With filter-based browsing and a powerful search function, stay informed effortlessly.",
    liveUrl:"https://ebra-news-app.vercel.app/",
    gitUrl: "https://github.com/EbrahimkhanM/news-app",
    app:"News App"
  },
  {
    img:"/image/handicrafts_hero.png",
    title: "Your Marketplace for Unique Creations",
    description: "Dive into our React-powered web application, where artisans can showcase their handmade treasures, and users can easily browse, buy, and sell one-of-a-kind products.",
    liveUrl:"https://handmade-rho.vercel.app/home",
    gitUrl: "https://github.com/EbrahimkhanM/handmade",
    app:"Ecommerce  App"

  }

]
function Blog({ blogs }) {
  return (
    <div id='Spotlight' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Other Noteworthy Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10 max-w-[1250px]  mx-auto">
        {
          otherProjects.map((blog, i) => (
            blog?.img &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default Blog;