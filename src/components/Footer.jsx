import {
  CheckSquare,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin as LinkedIn,
  Github,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-fb500 via-mb500 to-hb500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pacific_cyan-400 to-blue_green-400 rounded-lg flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TaskFlow</span>
            </div>
            <p className="text-light_cyan-200 mb-6 leading-relaxed max-w-md">
              TaskFlow helps individuals and teams organize their work, boost
              productivity, and achieve their goals. Join thousands of users who
              trust TaskFlow to keep them on track.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-light_cyan-200">
                <Mail className="w-5 h-5 mr-3 text-vivid_sky_blue-400" />
                <span>hello@taskflow.com</span>
              </div>
              <div className="flex items-center text-light_cyan-200">
                <Phone className="w-5 h-5 mr-3 text-vivid_sky_blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-light_cyan-200">
                <MapPin className="w-5 h-5 mr-3 text-vivid_sky_blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Status Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Bug Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Feature Requests
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-honolulu_blue-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-light_cyan-200 hover:text-vivid_sky_blue-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-light_cyan-200 text-sm">
              <span>© 2024 TaskFlow. All rights reserved.</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-vivid_sky_blue-400 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
