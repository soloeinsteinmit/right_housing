import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Shield, Gift, Clock, CreditCard } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@heroui/input";

const DonationOptions = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [showImpact, setShowImpact] = useState(false);

  const amounts = [25, 50, 100, 250, 500, 1000];

  const impactInfo = {
    25: "Essential supplies for a solo housing transition",
    50: "A week of utilities for a family in need",
    100: "Basic furniture for a new home",
    250: "One month's housing support for an individual",
    500: "Complete home setup for a family",
    1000: "Three months of comprehensive housing support",
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setShowImpact(true);
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
    setShowImpact(false);
  };

  const handleDonate = async () => {
    // Here you would typically create a Stripe session
    // For demo, we'll just navigate to success/cancel pages
    const amount = selectedAmount || customAmount;
    if (!amount) return;

    try {
      // Simulating Stripe redirect
      setTimeout(() => {
        const success = Math.random() > 0.2; // 80% success rate for demo
        navigate(success ? "/donate/success" : "/donate/cancel");
      }, 1000);
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="donate-options"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none max-md:z-[-10]">
        <motion.div
          className="absolute -right-20 -top-20 w-96 h-96 bg-success-50 rounded-full opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary-50 rounded-full opacity-80 "
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Choose Your Impact
            </motion.h2>
            <p className="text-gray-600">
              Select how you'd like to contribute to our mission
            </p>
          </div>

          {/* Donation Type Toggle */}
          <div className="bg-gray-50 p-2 rounded-xl flex mb-8">
            {["one-time", "monthly"].map((type) => (
              <button
                key={type}
                onClick={() => setDonationType(type)}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                  donationType === type
                    ? "bg-white text-success-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {type === "one-time" ? (
                    <Gift className="w-5 h-5" />
                  ) : (
                    <Clock className="w-5 h-5" />
                  )}
                  {type === "one-time" ? "One-time" : "Monthly"}
                </div>
              </button>
            ))}
          </div>

          {/* Amount Selection */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {amounts.map((amount) => (
              <motion.button
                key={amount}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAmountSelect(amount)}
                className={`p-6 rounded-xl border-2 transition-all relative overflow-hidden ${
                  selectedAmount === amount
                    ? "border-success-500 bg-success-50 text-success-700"
                    : "border-gray-200 hover:border-success-200"
                }`}
              >
                <span className="text-2xl font-bold">${amount}</span>
                {selectedAmount === amount && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 p-2 bg-success-100 text-success-700 text-xs"
                  >
                    {impactInfo[amount]}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-12">
            <div className="relative">
              <Input
                type="number"
                variant="bordered"
                label="Custom Amount"
                size="lg"
                min={0}
                startContent="$"
                value={customAmount}
                onChange={handleCustomAmount}
                placeholder="Enter custom amount"
                className=""
              />
            </div>
          </div>

          {/* Impact Information */}
          <AnimatePresence>
            {showImpact && selectedAmount && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 bg-success-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-success-700 mb-2">
                  Your Impact
                </h3>
                <p className="text-success-600">{impactInfo[selectedAmount]}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure Payment",
                description: "Powered by Stripe",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Tax Deductible",
                description: "Get your tax receipt",
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Multiple Methods",
                description: "Card, PayPal, & more",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50"
              >
                <div className="text-success-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDonate}
            disabled={!selectedAmount && !customAmount}
            className="w-full py-4 bg-success-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-success-600/20 hover:shadow-xl hover:shadow-success-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Heart className="w-5 h-5" />
            {donationType === "one-time"
              ? "Donate Now"
              : "Start Monthly Donation"}
          </motion.button>

          {/* Stripe Notice */}
          <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Secure payments powered by Stripe
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;
