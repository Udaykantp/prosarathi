import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/blog/${blog.slug}`}
        className="flex bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
      >
        {/* Image */}

        <div className="w-44 h-36 overflow-hidden flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-110 duration-500"
          />
        </div>

        {/* Content */}

        <div className="flex flex-col justify-between p-4 flex-1">

          <div>

            <h3 className="text-lg font-semibold text-gray-800 leading-6 line-clamp-2 hover:text-[#0B7A5C] transition">
              {blog.title}
            </h3>

          </div>

          <div className="flex items-center gap-5 text-xs text-gray-500 mt-4">

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
  );
};

export default BlogCard;