import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import blogs from "../data/blog";
import Breadcrumb from "../components/Breadcrumb";

const Blog = () => {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div>
      <div className="bg-[#f8fafc] min-h-screen">
        

      {/* ================= HERO ================= */}

      <section className="relative h-[360px] overflow-hidden">

        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Latest Blog
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl">
            Stay updated with the latest real estate trends,
            property buying tips and investment insights.
          </p>

        </motion.div>

      </section>

      {/* ================= BLOG SECTION ================= */}
      
        <Breadcrumb />

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-15">

        <div className="grid lg:grid-cols-5 gap-8">

          {/* FEATURED BLOG */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <Link
              to={`/blog/${featuredBlog.slug}`}
              className="relative rounded-3xl overflow-hidden block group shadow-xl h-[520px]"
            >

              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-0 p-8 text-white">

                <span className="bg-[#0B7A5C] px-4 py-2 rounded-full text-sm font-semibold">

                  FEATURED

                </span>

                <h2 className="text-4xl font-bold mt-6 leading-tight">

                  {featuredBlog.title}

                </h2>

                <p className="mt-5 text-gray-200 leading-7">

                  {featuredBlog.excerpt}

                </p>

                <div className="flex flex-wrap gap-6 mt-8 text-sm">

                  <div className="flex items-center gap-2">

                    <FaUser />

                    {featuredBlog.author}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt />

                    {featuredBlog.date}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaClock />

                    {featuredBlog.readTime}

                  </div>

                </div>

              </div>

            </Link>

          </motion.div>

          {/* RIGHT SIDE BLOGS */}

          <div className="lg:col-span-2 space-y-6">

            {otherBlogs.slice(0, 4).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className="flex bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}

                  <div className="w-44 h-36 overflow-hidden flex-shrink-0">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    />

                  </div>

                  {/* Content */}

                  <div className="flex flex-col justify-between p-5 flex-1">

                    <div>

                      <span className="text-xs font-semibold uppercase text-[#0B7A5C]">
                        {blog.category}
                      </span>

                      <h3 className="text-lg font-semibold mt-2 leading-7 text-gray-800 group-hover:text-[#0B7A5C] transition line-clamp-2">
                        {blog.title}
                      </h3>

                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mt-5">

                      <div className="flex items-center gap-2">

                        <FaCalendarAlt className="text-[#0B7A5C]" />

                        <span>{blog.date}</span>

                      </div>

                      <div className="flex items-center gap-2">

                        <FaClock className="text-[#0B7A5C]" />

                        <span>{blog.readTime}</span>

                      </div>

                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </section>
    </div>
        {/* ================= Newsletter ================= */ }

  <section className="bg-[#0B7A5C] py-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center px-6"
    >

      <h2 className="text-4xl font-bold text-white">
        Subscribe to Our Newsletter
      </h2>

      <p className="text-gray-200 mt-4">
        Get the latest property news, investment tips and market updates directly in your inbox.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-4">

        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 h-14 rounded-full px-6 outline-none"
        />

        <button className="h-14 px-8 rounded-full bg-white text-[#0B7A5C] font-semibold hover:scale-105 transition duration-300">
          Subscribe
        </button>

      </div>

    </motion.div>

  </section>

    </div>
    

          )
};

export default Blog;
