import React from "react";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact"
        highlight="Us"
        des=" Get in touch with our team for pharmaceutical solutions,
              partnerships, or any inquiries. We're here to support your
              healthcare needs."
      />

      {/* Location & Map Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Visit Our Office
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Find Us in <span className="text-[#7CC241]">Chandigarh</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Located in the heart of Chandigarh, our modern facility houses our
              administrative offices, quality control labs, and customer service
              center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Map Section */}
            <div className="relative">
              {/* Map Container */}
              <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3260.3852543752355!2d76.83299777537228!3d30.71547827459266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1754387240568!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1A3A7C] text-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <i className="ri-map-pin-2-line text-2xl text-[#7CC241] mb-1"></i>
                  <p className="text-xs font-semibold">Chandigarh</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-[#1A3A7C] mb-4">
                  How to Reach Us
                </h4>
                <p className="text-gray-600 mb-6">
                  Our office is conveniently located in Manimajra, Chandigarh,
                  with easy access to public transportation and ample parking
                  facilities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-car-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A3A7C] mb-1">
                      By Car
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Free parking available. 10 minutes from Chandigarh Railway
                      Station.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1A3A7C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-bus-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A3A7C] mb-1">
                      Public Transport
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Regular bus service available. Nearest bus stop:
                      Manimajra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-train-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A3A7C] mb-1">Train</h5>
                    <p className="text-gray-600 text-sm">
                      Chandigarh Railway Station - 10 minutes drive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1A3A7C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-plane-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A3A7C] mb-1">
                      Airport
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Chandigarh Airport - 20 minutes drive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Social Media Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Contact <span className="text-[#7CC241]">Information</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Reach out to us through multiple channels for all your pharmaceutical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1A3A7C] mb-2">
                      Email Us
                    </h4>
                    <a
                      href="mailto:medigykempharma@gmail.com"
                      className="text-[#7CC241] hover:text-[#5aa832] transition-colors duration-300 text-lg font-medium"
                    >
                      medigykempharma@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#1A3A7C] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1A3A7C] mb-3">
                      Call Us
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="tel:+919888086762"
                        className="block text-[#7CC241] hover:text-[#5aa832] transition-colors duration-300 font-medium"
                      >
                        +91 98880 86762
                      </a>
                      <a
                        href="tel:+919465116697"
                        className="block text-[#7CC241] hover:text-[#5aa832] transition-colors duration-300 font-medium"
                      >
                        +91 94651 16697
                      </a>
                      <a
                        href="tel:+919956736697"
                        className="block text-[#7CC241] hover:text-[#5aa832] transition-colors duration-300 font-medium"
                      >
                        +91 99567 36697
                      </a>
                      <a
                        href="tel:+917398587324"
                        className="block text-[#7CC241] hover:text-[#5aa832] transition-colors duration-300 font-medium"
                      >
                        +91 73985 87324
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1A3A7C] to-[#2a4b8c] rounded-xl p-6 shadow-lg text-white">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">
                    Connect With Us
                  </h4>
                  <p className="text-blue-100">
                    Follow us on social media for the latest updates and health tips
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-facebook-fill text-3xl text-white group-hover:text-[#7CC241] transition-colors duration-300 mb-2"></i>
                    <p className="text-sm font-medium">Facebook</p>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-instagram-line text-3xl text-white group-hover:text-[#7CC241] transition-colors duration-300 mb-2"></i>
                    <p className="text-sm font-medium">Instagram</p>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-linkedin-fill text-3xl text-white group-hover:text-[#7CC241] transition-colors duration-300 mb-2"></i>
                    <p className="text-sm font-medium">LinkedIn</p>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-twitter-x-line text-3xl text-white group-hover:text-[#7CC241] transition-colors duration-300 mb-2"></i>
                    <p className="text-sm font-medium">Twitter</p>
                  </a>
                </div>

                {/* WhatsApp Business */}
                <div className="mt-6">
                  <a
                    href="https://wa.me/919888086762"
                    className="w-full bg-[#7CC241] hover:bg-[#5aa832] rounded-lg p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
                  >
                    <i className="ri-whatsapp-line text-2xl text-white"></i>
                    <span className="font-semibold text-white">
                      WhatsApp Business
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-[#7CC241] uppercase tracking-wide mb-2">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1A3A7C] mb-6">
              Quick <span className="text-[#7CC241]">Answers</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Find answers to common questions about contacting us and our
              services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#1A3A7C] mb-2">
                    What is your typical response time for inquiries?
                  </h4>
                  <p className="text-gray-600">
                    We respond to all inquiries within 24 hours during business
                    days. For urgent matters, our emergency support is available
                    24/7.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#1A3A7C] mb-2">
                    Can I visit your facility for a tour?
                  </h4>
                  <p className="text-gray-600">
                    Yes, we welcome scheduled visits. Please contact us at least
                    48 hours in advance to arrange a facility tour with our
                    team.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#1A3A7C] mb-2">
                    Do you provide international shipping information?
                  </h4>
                  <p className="text-gray-600">
                    Yes, we ship globally. Contact our international sales team
                    for specific shipping information, documentation, and
                    regulatory requirements for your region.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#7CC241] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#1A3A7C] mb-2">
                    How can I become a distribution partner?
                  </h4>
                  <p className="text-gray-600">
                    We're always looking for qualified distribution partners.
                    Please fill out our contact form with "Partnership
                    Opportunity" as the subject, and our business development
                    team will reach out to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
