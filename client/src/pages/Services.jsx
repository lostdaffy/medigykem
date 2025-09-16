import React from "react";
import HeroSection from "../components/HeroSection";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our"
        highlight="Services"
        des="Comprehensive PCD Pharma Franchise and Third Party Manufacturing solutions - your trusted partner with 20+ years of pharmaceutical excellence"
      />
      {/* Services Overview */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              What We Offer
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Pharmaceutical Business{" "}
              <span className="text-[#7CC241]">Solutions</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From PCD Pharma Franchise opportunities to Third Party
              Manufacturing, we provide end-to-end pharmaceutical business
              solutions with 20+ years of industry experience and ISO
              certifications.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 - PCD Pharma Franchise */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-hand-heart-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                PCD Pharma Franchise
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Genuine pharma franchise opportunities with diverse product
                portfolio and complete business support for sustainable growth
                in pharmaceutical sector.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Monopoly Rights Available
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Complete Marketing Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Transparent Business Model
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            {/* Service 2 - Third Party Manufacturing */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-settings-3-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                Third Party Manufacturing
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Professional third-party manufacturing services with GMP-WHO
                certified facilities and latest technology for quality
                pharmaceutical production.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  GMP-WHO Certified Facilities
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Advanced Packaging Solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Quality Control Testing
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            {/* Service 3 - Marketing & Distribution */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-truck-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                Marketing & Distribution
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Comprehensive marketing and distribution services for quality
                drug portfolio across national and international pharmaceutical
                markets.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  National Distribution Network
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Marketing Materials Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Promotional Campaign Support
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            {/* Service 4 - Quality Control & Testing */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                Quality Control & Testing
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Expert quality control team and clinical scientists ensuring
                every medicine is safe, effective and meets international
                pharmaceutical standards.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  ISO 9001:2015 Standards
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  DCGI Approved Products
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Rigorous Testing Protocols
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            {/* Service 5 - Business Support */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-customer-service-2-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                Business Support
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Complete business support including professional ethics,
                transparent dealing, and long-term partnership development with
                24/7 assistance.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  24/7 Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Technical Consultation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Business Development Guidance
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            {/* Service 6 - Global Market Development */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6 sm:p-8 group border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-global-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-4">
                Global Market Development
              </h4>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Strategic global market development with thorough and long-term
                approach while maintaining highest ethical standards in
                pharmaceutical business.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  International Market Access
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Strategic Partnership
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Ethical Business Practices
                </li>
              </ul>
              <button className="text-[#7CC241] font-semibold hover:text-[#5aaa1c] transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Our Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              How We <span className="text-[#7CC241]">Deliver Excellence</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our streamlined process ensures quality pharmaceutical business
              solutions from franchise development to manufacturing, maintaining
              the highest standards throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    1
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A3A7C] rounded-full flex items-center justify-center">
                  <i className="ri-search-line text-white text-sm"></i>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                Business Consultation
              </h4>
              <p className="text-gray-600 text-sm">
                Initial consultation to understand your pharmaceutical business
                requirements and franchise opportunities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    2
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7CC241] rounded-full flex items-center justify-center">
                  <i className="ri-file-text-line text-white text-sm"></i>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                Partnership Agreement
              </h4>
              <p className="text-gray-600 text-sm">
                Transparent partnership terms with complete documentation and
                ethical business agreement development.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    3
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A3A7C] rounded-full flex items-center justify-center">
                  <i className="ri-settings-3-line text-white text-sm"></i>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                Quality Manufacturing
              </h4>
              <p className="text-gray-600 text-sm">
                ISO certified manufacturing in GMP-WHO approved facilities with
                rigorous quality control measures.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    4
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7CC241] rounded-full flex items-center justify-center">
                  <i className="ri-hand-heart-line text-white text-sm"></i>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                Ongoing Support
              </h4>
              <p className="text-gray-600 text-sm">
                Continuous business support with 24/7 availability and marketing
                assistance for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-10 sm:py-16 lg:py-24 bg-[#1A3A7C]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
                  Why Choose Our Services
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  Excellence in Every{" "}
                  <span className="text-[#7CC241]">Service</span>
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  With 20+ years of pharmaceutical industry experience, we
                  provide comprehensive business solutions with uncompromising
                  quality and transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-shield-check-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    ISO Certified Quality
                  </h4>
                  <p className="text-gray-300 text-sm">
                    ISO 9001:2015 and DCGI approved pharmaceutical products
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    20+ Years Experience
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Two decades of pharmaceutical industry expertise
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-customer-service-2-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
                  <p className="text-gray-300 text-sm">
                    Round-the-clock business support and quick feedback
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-hand-heart-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    Affordable Healthcare
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Quality medicines at rates everyone can afford
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/21489.jpg"
                  alt="Medigykem Pharma Services"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A7C]/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#7CC241] text-white p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold">20+</h4>
                  <p className="text-xs sm:text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Specialized Services
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Advanced{" "}
              <span className="text-[#7CC241]">Business Solutions</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Beyond our core services, we offer specialized pharmaceutical
              business solutions tailored to meet specific market requirements
              and partnership needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Specialized Service 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-trophy-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                    Monopoly Franchise Rights
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Exclusive territorial rights for PCD pharma franchise with
                    complete monopoly in your designated area for sustainable
                    business growth.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Exclusive territory rights
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Complete product portfolio
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Marketing material support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Service 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-settings-4-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                    Advanced Packaging Solutions
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    High-tech formulation with world-class infrastructure and
                    advanced packaging solutions for pharmaceutical product
                    excellence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Modern packaging technology
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Custom branding solutions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Quality assurance protocols
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Service 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                    Professional Training & Development
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Comprehensive training programs for franchise partners
                    including business development, product knowledge, and
                    market strategies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Business development training
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Product knowledge sessions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Market strategy guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Service 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-line-chart-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1A3A7C] mb-3">
                    Strategic Market Development
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Long-term strategic approach to market development with
                    ethical business practices and sustainable growth planning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Market analysis & planning
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Ethical business practices
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#7CC241] mr-2"></i>
                      Long-term partnership approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Our Track Record
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Numbers That <span className="text-[#7CC241]">Speak</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-2">
                20+
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Years Experience
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#7CC241] mb-2">
                98%
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Partner Satisfaction
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-2">
                24/7
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Support Available
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#7CC241] mb-2">
                100%
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Quality Assured
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Services;
