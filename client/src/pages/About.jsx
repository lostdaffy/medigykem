import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title="About"
        highlight="Medigykem"
        des="Chandigarh based pharmaceutical company with 20+ years of experience, specializing in PCD Pharma Franchise and Third Party Manufacturing"
      />

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
                  Our Story
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1A3A7C] mb-6">
                  Two Decades of Pharmaceutical Excellence
                </h3>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg text-justify">
                  Medigykem Pharma is a Chandigarh based Pharmaceuticals Company
                  specialized in marketing and distributing quality drug
                  portfolio. Headed by experienced leadership, we have built
                  credibility in the Indian Pharmaceuticals sector with almost 2
                  decades of rich working experience.
                </p>
                <p className="text-base md:text-lg text-justify">
                  Our presence in the pharmaceutical industry is well planned
                  and deliberate. Over the years we have gained trust and
                  respect through good dealing, professional ethics, and our
                  dedication to focus on quality. We offer a more affordable
                  range of medicine through our PCD pharma franchise and
                  third-party pharma manufacturing services.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/21520.jpg"
                  alt="Medigykem Pharma Story"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gray-100 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Our Foundation
            </h2>
            <h3 className="text-4xl font-bold text-[#1A3A7C] mb-6">
              Mission, Vision & Values
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-focus-2-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-[#1A3A7C] mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                To establish a global reputation as a leading supplier of
                high-quality herbal and pharmaceutical products. Develop global
                markets with a thorough and long-term strategy while adhering to
                the highest ethical standards at all times, providing affordable
                healthcare solutions through our PCD franchise and third-party
                manufacturing services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-eye-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-[#1A3A7C] mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                Medigykem Pharma offers genuine pharma business model to provide
                more creative and diverse products. Develop a global business
                with a diverse portfolio of products and services in India,
                while maintaining our commitment to innovation and quality
                healthcare solutions for all.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-heart-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-[#1A3A7C] mb-4">
                Our Values
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Ethical & Transparent Business
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  100% Quality Assurance
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Professional Ethics
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Innovation & Excellence
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#7CC241] mr-2"></i>
                  Affordable Healthcare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Owner Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A7C] mb-2 sm:mb-4">
              Mr. Aman
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#7CC241] mb-8 sm:mb-10 md:mb-12">
              Managing Director
            </p>

            {/* Message */}
            <div className="bg-gradient-to-r from-[#1A3A7C]/5 to-[#7CC241]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                "With visionary leadership and pharmaceutical expertise, we are
                committed to delivering exceptional healthcare solutions through
                our PCD franchise and third-party manufacturing services.
                Excellence in pharmaceuticals is not just our goal, it's our
                commitment to every life we touch."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-16 lg:py-24 bg-[#1A3A7C]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Our Journey
            </h2>
            <h3 className="text-4xl font-bold text-white mb-6">
              Milestones & <span className="text-[#7CC241]">Achievements</span>
            </h3>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              A timeline of our significant achievements and milestones that
              have shaped our journey in pharmaceutical business excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Milestone 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#7CC241] mb-2">
                2000s
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Company Established
              </h4>
              <p className="text-gray-200 text-sm">
                Founded with a vision to provide quality pharmaceutical business
                solutions in Chandigarh
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#7CC241] mb-2">2010</div>
              <h4 className="text-lg font-semibold text-white mb-3">
                ISO 9001:2015 Certified
              </h4>
              <p className="text-gray-200 text-sm">
                Achieved ISO 9001:2015 certification following international
                quality standards
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#7CC241] mb-2">2015</div>
              <h4 className="text-lg font-semibold text-white mb-3">
                PCD Franchise Launch
              </h4>
              <p className="text-gray-200 text-sm">
                Expanded business model to include comprehensive PCD pharma
                franchise services
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#7CC241] mb-2">
                2020+
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                National Expansion
              </h4>
              <p className="text-gray-200 text-sm">
                Extended operations nationally with trusted PCD partners and
                manufacturing network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Quality Assurance
            </h2>
            <h3 className="text-4xl font-bold text-[#1A3A7C] mb-6">
              Certifications &{" "}
              <span className="text-[#7CC241]">Compliance</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our commitment to quality is validated by international
              certifications and strict adherence to regulatory standards in
              pharmaceutical business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                ISO 9001:2015
              </h4>
              <p className="text-gray-600">
                International standard for quality management systems,
                demonstrating our commitment to consistent quality and customer
                satisfaction.
              </p>
            </div>

            {/* Certification 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1A3A7C] to-[#2d5aa0] rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                WHO & GMP Certified
              </h4>
              <p className="text-gray-600">
                Our partner manufacturing units operate under WHO & GMP
                certification ensuring international quality standards.
              </p>
            </div>

            {/* Certification 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CC241] to-[#5aaa1c] rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-shield-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-[#1A3A7C] mb-4">
                DCGI Approved
              </h4>
              <p className="text-gray-600">
                All pharma products we distribute are approved under DCGI
                certifications ensuring safety and efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/21503.jpg"
                  alt="Manufacturing Partners"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A7C]/20 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
                  Manufacturing Excellence
                </h2>
                <h3 className="text-4xl font-bold text-[#1A3A7C] mb-6">
                  Partner Manufacturing Units
                </h3>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Our partner manufacturing units are situated in Himachal
                  Pradesh and operate under GMP-WHO approval. We are perfectly
                  synced with the latest technology, modern techniques,
                  world-class drug formulations and skilled personnel to bring
                  the best customer satisfaction through our services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                      <i className="ri-check-line text-white font-bold text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A7C] mb-1">
                        GMP-WHO Certified Units
                      </h4>
                      <p className="text-gray-600">
                        Partner manufacturing facilities with international
                        quality standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                      <i className="ri-check-line text-white font-bold text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A7C] mb-1">
                        Latest Technology & Modern Techniques
                      </h4>
                      <p className="text-gray-600">
                        Advanced equipment and modern pharmaceutical production
                        methods
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center mt-1">
                      <i className="ri-check-line text-white font-bold text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A7C] mb-1">
                        Skilled Personnel & Quality Control
                      </h4>
                      <p className="text-gray-600">
                        Expert quality control team ensuring every medicine is
                        safe and effective
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
