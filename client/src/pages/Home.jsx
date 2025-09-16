import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="min-h-screen pt-10 relative"
        style={{
          backgroundImage: "url('/images/hero-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="max-w-8xl px-4 md:px-20 ">
          <div className="flex flex-col items-start justify-center min-h-[70vh] text-left space-y-6 sm:space-y-8">
            {/* Headline */}
            <h1
              className="uppercase font-semibold 
         text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
         text-[#1A3A7C] leading-tight tracking-wide drop-shadow-md"
            >
              Empowering{" "}
              <span className="text-[#7CC241]">
                {" "}
                <br /> Healthcare
              </span>
              <br />
              <span className="text-[#1A3A7C]">With Quality</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#1A3A7C] max-w-xl md:max-w-4xl drop-shadow-sm">
              <span className="font-semibold text-[#7CC241]">
                Medigykem Pharma
              </span>{" "}
              is a trusted name in{" "}
              <span className="font-semibold">PCD Pharma Franchise</span> and{" "}
              <span className="font-semibold">Third-Party Manufacturing</span>.
              With 20+ years of expertise, we deliver an extensive portfolio of
              safe, effective, and affordable medicines across therapeutic
              segments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
              <Link
                to="/who-we-are"
                className="bg-[#7CC241] hover:bg-[#5aaa1c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-md hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <i className="ri-information-line"></i> About Us
              </Link>
              <Link
                to="/contact"
                className="bg-[#1A3A7C] hover:bg-[#153069] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-md hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <i className="ri-phone-line"></i> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="max-w-8xl px-4 md:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Section Title */}
              <div>
                <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-widest mb-2">
                  About Us
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#1A3A7C] leading-snug">
                  Medigykem Pharma –
                  <span className="text-[#7CC241]">
                    {" "}
                    Chandigarh's Trusted Excellence
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Medigykem Pharma is a Chandigarh-based pharmaceutical company
                with a strong legacy of delivering quality medicines. With over
                two decades of experience and visionary leadership, we have
                built a reputation of trust and credibility in the Indian
                healthcare sector.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Backed by ISO 9001:2015 certification and DCGI-approved
                products, we provide
                <span className="font-semibold text-[#1A3A7C]">
                  {" "}
                  PCD Pharma Franchise
                </span>
                and{" "}
                <span className="font-semibold text-[#1A3A7C]">
                  {" "}
                  Third Party Manufacturing
                </span>
                services. Our mission is to ensure accessible, affordable, and
                high-quality healthcare for every individual.
              </p>
              <div className="mt-10">
                <Link
                  to="/who-we-are"
                  className="text-white bg-[#7CC241] text-base py-4 px-10 rounded-full"
                >
                  <i className="ri-arrow-right-long-line"></i> About More
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1">
              <div className="relative overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="Pharmaceutical Manufacturing Facility"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-screen bg-[#1A3A7C] flex justify-center items-center py-20">
        <div className="max-w-8xl px-4 md:px-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Image */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/21489.jpg"
                  alt="Why Choose Medigykem Pharma"
                  className="w-full object-cover rounded-2xl"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A7C]/30 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#7CC241] text-white p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold">ISO</h4>
                  <p className="text-xs sm:text-sm">Certified</p>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="space-y-6 text-white">
              <div>
                <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
                  Why Choose Us
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  Your Trusted Partner in
                  <span className="text-[#7CC241]">
                    {" "}
                    Pharmaceutical Business
                  </span>
                </h3>
              </div>
              <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
                We are a well-known name in the industry because of our ethical
                and transparent business deals. Choose Medigykem Pharma for
                genuine pharma business opportunities with diverse products and
                services.
              </p>
              {/* Why Choose Us Points */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white font-bold"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      100% Quality Assurance
                    </h4>
                    <p className="text-gray-300 text-sm md:text-lg">
                      Complete quality assurance with ISO 9001:2015 and DCGI
                      certifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white font-bold"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      24/7 Service Availability
                    </h4>
                    <p className="text-gray-300 text-sm md:text-lg">
                      Round-the-clock support and quick work on feedback for all
                      your business needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white font-bold"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Advanced Packaging & Formulation
                    </h4>
                    <p className="text-gray-300 text-sm md:text-lg">
                      High-tech formulation with world-class infrastructure and
                      advanced packaging
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white font-bold"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Affordable Pricing
                    </h4>
                    <p className="text-gray-300 text-sm md:text-lg">
                      Quality pharmaceutical products at rates everyone can
                      afford
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Divisions Section */}
      <section className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="max-w-8xl px-4 md:px-20 ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-[#7CC241]">Divisions</span>
            </h1>
            <p className="text-gray-800 text-lg md:text-xl max-w-7xl mx-auto leading-relaxed">
              We understand the need for proper healthcare facilities for
              patients, and with more than 15 years of experience, the company
              knows every nitty-gritty that go into the proper functioning of
              the healthcare industry. So, we have expanded its reach to various
              sectors of the healthcare industry via our three general divisions
              and two specialized divisions.
            </p>

            <img
              src="/images/divisions.jpg"
              className="mt-10 rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Our Services
            </h2>
            <h3 className="text-xl sm:text-5xl font-bold text-[#1A3A7C] mb-4">
              Pharma
              <span className="text-[#7CC241]"> Business Solutions</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg">
              We provide innovative pharma business models with PCD Pharma
              Franchise and Third Party Manufacturing services to cater to
              diverse healthcare needs.
            </p>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-hand-heart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                PCD Pharma Franchise
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Genuine pharma franchise opportunities with diverse product
                portfolio and complete business support for sustainable growth.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-settings-3-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                Third Party Manufacturing
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Professional third-party manufacturing services with GMP-WHO
                certified facilities and latest technology for quality
                production.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-truck-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                Marketing & Distribution
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Comprehensive marketing and distribution services for quality
                drug portfolio across national and international markets.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                Quality Control & Testing
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Expert quality control team and clinical scientists ensuring
                every medicine is safe, effective and meets international
                standards.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-customer-service-2-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                Business Support
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Complete business support including professional ethics,
                transparent dealing, and long-term partnership development
                strategies.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-line-chart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                Global Market Development
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm md:text-lg">
                Strategic global market development with thorough and long-term
                approach while maintaining highest ethical standards.
              </p>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />

      {/* Testimonials Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Testimonials
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-4">
              What Our Business Partners
              <span className="text-[#7CC241]"> Say About Us</span>
            </h3>
            <p className="text-gray-700 text-sm md:text-lg max-w-3xl mx-auto ">
              Trusted by pharmaceutical professionals and franchise partners
              nationwide, our commitment to ethical business and quality speaks
              through their experiences.
            </p>
          </div>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7CC241]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Medigykem Pharma has been our trusted business partner for PCD
                franchise. Their transparent dealing and quality products have
                helped us build a successful pharmaceutical business."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3A7C] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A3A7C]">Amit Sharma</h4>
                  <p className="text-gray-600 text-sm">
                    PCD Franchise Partner, Delhi
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7CC241]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Their third-party manufacturing service is exceptional.
                Professional approach, quality products, and timely delivery.
                Perfect partner for pharmaceutical business growth."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  RK
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A3A7C]">Rajesh Kumar</h4>
                  <p className="text-gray-600 text-sm">
                    Managing Director, MedLife Pharmaceuticals
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7CC241]">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Outstanding customer support and professional ethics! Their
                24/7 availability and quick feedback response has made our
                business partnership truly successful."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3A7C] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  PS
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A3A7C]">
                    Dr. Priya Singh
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Franchise Owner, Punjab Region
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Trust Indicators */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A3A7C] mb-1 sm:mb-2">
                98%
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Partner Satisfaction
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#7CC241] mb-1 sm:mb-2">
                20+
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Years Experience
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A3A7C] mb-1 sm:mb-2">
                24/7
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Support Available
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#7CC241] mb-1 sm:mb-2">
                100%
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Quality Assured
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white text-center py-8 sm:py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <p className="text-gray-600 mb-4 text-md sm:text-lg">
            Ready to start your pharmaceutical business? Our franchise support
            team is available 24/7
          </p>
          <button className="bg-[#1A3A7C] hover:bg-[#2d5aa0] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <i className="ri-customer-service-2-line mr-2"></i>
            Contact Business Team
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
