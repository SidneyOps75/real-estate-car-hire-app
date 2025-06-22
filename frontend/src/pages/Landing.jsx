import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">PropertyCar Hub</h1>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 lg:col-span-6 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                    <span className="block">Find Your Perfect</span>
                    <span className="block text-indigo-600">Property & Vehicle</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-md xl:max-w-lg">
                    Discover premium real estate properties and reliable car rentals all in one place. 
                    Your journey to finding the perfect home and transportation starts here.
                  </p>
                  <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                    <div className="rounded-md shadow">
                      <Link
                        to="/login"
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div>
                      <a
                        href="#features"
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-8 transition duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <div className="h-64 sm:h-72 lg:h-80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🏠🚗</div>
                        <p className="text-lg sm:text-xl font-semibold">Properties & Cars</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in one platform
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Streamline your property search and car rental experience with our comprehensive platform.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:gap-x-8 lg:gap-y-10">
              {/* Real Estate Feature */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-2xl">🏠</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real Estate Properties</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Browse through a wide selection of premium properties including apartments, houses, and commercial spaces.
                  Find your perfect home or investment opportunity.
                </p>
              </div>

              {/* Car Rental Feature */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-2xl">🚗</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Car Rental Services</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Access a fleet of well-maintained vehicles for short-term and long-term rentals. 
                  Perfect for business trips, vacations, or daily commuting.
                </p>
              </div>

              {/* Easy Management */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Management</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Manage all your bookings, payments, and preferences from a single, intuitive dashboard.
                  Track your rental history and property interests effortlessly.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-2xl">🛟</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Customer Support</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Get assistance whenever you need it with our round-the-clock customer support team.
                  We're here to help with any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Join PropertyCar Hub today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Sign up now and discover the perfect property and vehicle rental solutions for your needs.
          </p>
          <Link
            to="/login"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto transition duration-300"
          >
            Sign up for free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-gray-400 text-sm">
              Connect with us on social media
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 PropertyCar Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}