import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Sudeep Polymers</h3>
            <p className="text-blue-200">
              Leading manufacturer of high-precision plastic products and assembly for the automotive industry.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/company" className="text-blue-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-blue-200 hover:text-white">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-200 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-blue-200">Follow us on social media for updates and news.</p>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Sudeep Polymers Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

