import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black/90 via-black/80 to-gray-900/90 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Logo & Profile */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.png"
                className="w-16 sm:w-20 md:w-24 drop-shadow-lg"
                alt="MedigyKem Logo"
              />
            </Link>

            <div className="space-y-4 pl-1">
              <div className="flex items-center gap-2 text-gray-300 font-light text-sm">
                <i className="ri-building-2-line text-[#7cc241]"></i>
                Marketed by:
              </div>
              <div className="font-bold text-xl text-white tracking-wide">
                MedigyKem Pharma
              </div>
              <div className="text-gray-200 text-base leading-relaxed max-w-md">
                <i className="ri-map-pin-2-line text-[#7cc241] mr-2"></i>
                SCO-747/1 Half Portion Second Floor<br />
                Dehra Sahib, Manimajra<br />
                Chandigarh 160101
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="bg-[#7cc241]/10 border border-[#7cc241]/30 rounded-full px-3 py-1 text-xs text-[#7cc241] font-medium">
                  ✓ ISO Certified
                </div>
                <div className="bg-[#7cc241]/10 border border-[#7cc241]/30 rounded-full px-3 py-1 text-xs text-[#7cc241] font-medium">
                  ✓ Quality Assured
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-3 text-white">
              <div className="w-8 h-8 bg-[#7cc241]/20 rounded-full flex items-center justify-center">
                <i className="ri-links-line text-[#7cc241] text-sm"></i>
              </div>
              Quick Links
            </h4>
            <ul className="space-y-3 pl-2">
              {[
                { to: "/", icon: "ri-home-4-line", text: "Home" },
                { to: "/who-we-are", icon: "ri-building-line", text: "About Us" },
                { to: "/services", icon: "ri-service-line", text: "Services" },
                { to: "/contact", icon: "ri-customer-service-2-line", text: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#7cc241] hover:translate-x-2 transition-all duration-300 py-2 group"
                  >
                    <i className={`${link.icon} text-[#7cc241] group-hover:scale-110 transition-transform`}></i>
                    <span className="group-hover:font-medium">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-3 text-white">
              <div className="w-8 h-8 bg-[#7cc241]/20 rounded-full flex items-center justify-center">
                <i className="ri-contacts-line text-[#7cc241] text-sm"></i>
              </div>
              Get in Touch
            </h4>
            
            <div className="space-y-5 text-gray-200 text-sm pl-2">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#7cc241]/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-[#7cc241]/20 transition-colors">
                  <i className="ri-mail-line text-[#7cc241] text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Email Us</div>
                  <Link
                    to="mailto:medigykempharma@gmail.com"
                    className="hover:text-[#7cc241] transition-colors font-medium"
                  >
                    medigykempharma@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#7cc241]/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-[#7cc241]/20 transition-colors">
                  <i className="ri-phone-line text-[#7cc241] text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-2">Call Us</div>
                  <div className="space-y-1">
                    {[
                      "+91 99880 86762",
                      "+91 94651 16697", 
                      "+91 99567 36697",
                      "+91 73985 87324"
                    ].map((phone, index) => (
                      <div key={index}>
                        <Link 
                          to={`tel:${phone.replace(/\s/g, '')}`} 
                          className="hover:text-[#7cc241] transition-colors block text-sm font-medium"
                        >
                          {phone}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <div className="text-xs text-gray-400 mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: "ri-instagram-line", url: "https://www.instagram.com/medigykem_pharma/" },
                    { icon: "ri-facebook-circle-line", url: "https://www.facebook.com/profile.php?id=61580840976419" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      to={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#7cc241]/10 hover:bg-[#7cc241] rounded-full flex items-center justify-center text-[#7cc241] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-12 mb-8">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7cc241]/30 to-transparent"></div>
            <div className="px-4">
              <i className="ri-heart-pulse-line text-[#7cc241] text-xl"></i>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7cc241]/30 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
          <div className="flex items-center gap-2">
            <i className="ri-copyright-line text-[#7cc241]"></i>
            <span>{currentYear} MedigyKem Pharma. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            {[
              { to: "/privacy-policy", text: "Privacy Policy" },
              { to: "/terms-of-service", text: "Terms of Service" },
              { to: "/trade-terms", text: "Trade Terms" }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="hover:text-[#7cc241] transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7cc241] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
