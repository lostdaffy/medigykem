import React from "react";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-[#1A3A7C] to-[#2d5aa0]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Get in Touch
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Partner with
              <span className="text-[#7CC241]"> Medigykem Pharma?</span>
            </h3>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Contact our team today for PCD Pharma Franchise opportunities,
              Third Party Manufacturing services, or any business inquiries.
              We're here to support your pharmaceutical business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A3A7C] mb-6">
                Send us a Message
              </h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CC241] focus:border-[#7CC241] transition-colors text-sm sm:text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CC241] focus:border-[#7CC241] transition-colors text-sm sm:text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CC241] focus:border-[#7CC241] transition-colors text-sm sm:text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CC241] focus:border-[#7CC241] transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your business requirements or franchise interest..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7CC241] hover:bg-[#5aaa1c] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Office Address */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Head Office
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base">
                      CO-747/1, Second Floor
                      <br />
                      Dehra Sahib, Manimajra,
                      <br />
                      Chandigarh 160101
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base">
                      +91 98880 86762 <br />
                      +91 94651 16697 <br />
                      +91 99567 36697 <br />
                      +91 73985 87324
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7CC241] rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Email Addresses
                    </h4>
                    <p className="text-gray-200 text-[12px] md:text-base">
                      medigykempharma@gmail.com
                    </p>
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

export default GetInTouch;
