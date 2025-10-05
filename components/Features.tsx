import { Shield, TrendingUp, Users } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Silver Packs?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers the best tools and resources to help you succeed in silver investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Investment</h3>
            <p className="text-gray-600">
              Your silver investments are protected with bank-level security and insurance coverage.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
            <p className="text-gray-600">
              Get personalized investment advice from our team of silver market experts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
            <p className="text-gray-600">
              Join thousands of successful investors in our exclusive community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
