import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, TrendingUp, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center justify-center max-w-md mx-auto relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-green-100/50 rounded-full blur-3xl z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full flex flex-col items-center text-center mb-10"
      >
        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-blue-500/10 flex items-center justify-center mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
          Amana Broker
        </h1>
        <p className="text-gray-500 text-lg font-medium font-sans">
          ጥራትን መሰረት ያደረገ ግብይት
        </p>
      </motion.div>

      <div className="w-full space-y-4 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/seller" className="w-full block">
            <div className="group relative overflow-hidden bg-white hover:bg-blue-50/50 border-2 border-transparent hover:border-blue-100 rounded-3xl p-6 shadow-lg shadow-blue-500/5 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp className="w-24 h-24 text-blue-600 transform rotate-12 translate-x-4 -translate-y-4" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  እኔ ሻጭ ነኝ
                </h3>
                <p className="text-blue-600/80 font-medium text-sm mt-1">
                  ምርት ለመላክ
                </p>
                <div className="mt-4 inline-flex items-center text-blue-600 font-semibold text-sm">
                  Start Selling →
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/buyer" className="w-full block">
            <div className="group relative overflow-hidden bg-white hover:bg-green-50/50 border-2 border-transparent hover:border-green-100 rounded-3xl p-6 shadow-lg shadow-green-500/5 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingBag className="w-24 h-24 text-green-600 transform -rotate-12 translate-x-4 -translate-y-4" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  እኔ ገዢ ነኝ
                </h3>
                <p className="text-green-600/80 font-medium text-sm mt-1">
                  ምርት ለመግዛት
                </p>
                <div className="mt-4 inline-flex items-center text-green-600 font-semibold text-sm">
                  Start Buying →
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      <p className="mt-8 text-xs text-center text-gray-400 font-sans z-10">
        Trusted by thousands of Telegram users
      </p>
    </div>
  );
}
