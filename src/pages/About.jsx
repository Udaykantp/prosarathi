import React from 'react'
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import {
    FaHome,
    FaBuilding,
    FaUsers,
    FaAward,
    FaBullseye,
    FaEye,
    FaHandshake,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const About = () => {
    return (
        <div className="bg-[#f8fafc]">

            {/* ================= HERO ================= */}

            <section
                className="relative h-[500px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/about-bg.png')",
                }}
            >

                <div className="absolute inset-0 bg-black/50" />
                  <Breadcrumb />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="relative h-full flex flex-col justify-center items-center text-center text-white px-5"
                >

                    <h1 className="text-5xl font-bold">
                        About Us
                    </h1>

                    <p className="max-w-2xl mt-5 text-lg">
                        Helping families and investors find
                        their perfect property with trust,
                        transparency and excellence.
                    </p>

                </motion.div>

            </section>

            {/* ================= COMPANY ================= */}

            <motion.section
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-14 items-center"
            >

                <motion.img
                    variants={fadeUp}
                    src="/hero-bg.png"
                    className="rounded-3xl shadow-xl"
                />

                <motion.div variants={fadeUp}>

                    <h2 className="text-4xl font-bold">

                        Who We Are

                    </h2>

                    <p className="text-gray-600 mt-6 leading-8">

                        We are a trusted real estate company
                        offering premium residential and
                        commercial properties across India.
                        Our goal is to simplify property buying
                        and provide transparent, hassle-free
                        services.

                    </p>

                    <div className="grid grid-cols-2 gap-5 mt-10">

                        <div className="flex items-center gap-3">

                            <FaHome className="text-3xl text-[#0B7A5C]" />

                            <span>Premium Homes</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <FaBuilding className="text-3xl text-[#0B7A5C]" />

                            <span>Commercial Spaces</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <FaUsers className="text-3xl text-[#0B7A5C]" />

                            <span>Expert Team</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <FaAward className="text-3xl text-[#0B7A5C]" />

                            <span>Trusted Brand</span>

                        </div>

                    </div>

                </motion.div>

            </motion.section>

            {/* ================= MISSION ================= */}

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid lg:grid-cols-2 gap-8">

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-3xl p-10 shadow-lg"
                    >

                        <FaBullseye className="text-5xl text-[#0B7A5C]" />

                        <h3 className="text-3xl font-bold mt-6">

                            Our Mission

                        </h3>

                        <p className="text-gray-600 mt-4">

                            To help people find the best
                            properties with complete trust,
                            professional guidance and affordable
                            pricing.

                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-3xl p-10 shadow-lg"
                    >

                        <FaEye className="text-5xl text-[#0B7A5C]" />

                        <h3 className="text-3xl font-bold mt-6">

                            Our Vision

                        </h3>

                        <p className="text-gray-600 mt-4">

                            To become India's most trusted
                            digital real estate platform.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= WHY ================= */}

            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-4xl font-bold">

                        Why Choose Us

                    </h2>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-14">

                        {[
                            "Verified Properties",
                            "Best Locations",
                            "Affordable Pricing",
                            "24/7 Support"
                        ].map((item, index) => (
                            <motion.div

                                key={index}

                                whileHover={{
                                    scale: 1.05
                                }}

                                className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow"

                            >

                                <FaHandshake className="mx-auto text-5xl text-[#0B7A5C]" />

                                <h4 className="font-semibold mt-6">

                                    {item}

                                </h4>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= STATS ================= */}

            <section className="bg-[#0B7A5C] text-white py-20">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10 text-center">

                    <div>

                        <h2 className="text-5xl font-bold">

                            2500+

                        </h2>

                        <p>Properties</p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-bold">

                            1800+

                        </h2>

                        <p>Happy Clients</p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-bold">

                            20+

                        </h2>

                        <p>Cities</p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-bold">

                            10+

                        </h2>

                        <p>Years Experience</p>

                    </div>

                </div>

            </section>

            {/* ================= TEAM ================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl text-center font-bold">

                        Meet Our Team

                    </h2>

                    <div className="grid lg:grid-cols-3 gap-8 mt-16">

                        {[
                            "Rahul Sharma",
                            "Amit Verma",
                            "Neha Singh"
                        ].map((member, index) => (

                            <motion.div

                                key={index}

                                whileHover={{ y: -10 }}

                                className="bg-white rounded-3xl shadow-lg overflow-hidden"

                            >

                                <img

                                    src={`/images/team${index + 1}.jpg`}

                                    className="h-80 w-full object-cover"

                                />

                                <div className="p-6 text-center">

                                    <h3 className="text-2xl font-semibold">

                                        {member}

                                    </h3>

                                    <p className="text-gray-500">

                                        Real Estate Consultant

                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="bg-[#0B7A5C] py-20 text-center text-white">

                <motion.h2

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: .8 }}

                    className="text-4xl font-bold"

                >

                    Ready To Find Your Dream Property?

                </motion.h2>

                <button className="mt-8 bg-white text-[#0B7A5C] px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">

                    Explore Properties

                </button>

            </section>

        </div>
    )
}

export default About
