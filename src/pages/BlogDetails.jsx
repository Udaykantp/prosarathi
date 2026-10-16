import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";
import blogs from "../data/blog";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Blog Not Found</h2>

        <Link
          to="/blog"
          className="mt-6 bg-[#0B7A5C] text-white px-6 py-3 rounded-full"
        >
          Back To Blogs
        </Link>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="bg-[#f8fafc]">

      {/* Hero */}

      <section className="relative h-[500px]">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-6xl mx-auto px-6 text-white">

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mb-8"
            >
              <FaArrowLeft />
              Back To Blogs
            </Link>

            <span className="bg-[#0B7A5C] px-4 py-2 rounded-full text-sm">

              {blog.category}

            </span>

            <h1 className="text-5xl font-bold mt-6 max-w-4xl leading-tight">

              {blog.title}

            </h1>

            <div className="flex flex-wrap gap-6 mt-8">

              <div className="flex items-center gap-2">

                <FaUser />

                {blog.author}

              </div>

              <div className="flex items-center gap-2">

                <FaCalendarAlt />

                {blog.date}

              </div>

              <div className="flex items-center gap-2">

                <FaClock />

                {blog.readTime}

              </div>

            </div>

          </div>
        </motion.div>

      </section>

      {/* Article */}

      <section className="max-w-4xl mx-auto py-20 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-10"
        >

          <p className="text-lg leading-8 text-gray-600 mb-10">

            {blog.excerpt}

          </p>

          {blog.content.map((item, index) => (

            <div key={index} className="mb-10">

              <h2 className="text-3xl font-bold mb-5">

                {item.heading}

              </h2>

              <p className="text-gray-600 leading-8">

                {item.text}

              </p>

            </div>

          ))}

        </motion.div>

      </section>

      {/* Related Blogs */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-10">

          Related Blogs

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {relatedBlogs.map((item) => (

            <Link
              key={item.id}
              to={`/blog/${item.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-[#0B7A5C] text-sm font-semibold">

                  {item.category}

                </span>

                <h3 className="text-xl font-bold mt-3 line-clamp-2">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-3 line-clamp-2">

                  {item.excerpt}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
};

export default BlogDetails;