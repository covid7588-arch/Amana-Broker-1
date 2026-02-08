import { motion } from "framer-motion";
import { Link } from "wouter";
import { Video, Youtube, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white p-6 pb-8 rounded-b-[2.5rem] shadow-sm relative z-10">
        <Link href="/" className="inline-flex items-center text-gray-500 mb-4 hover:text-primary transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </Link>
        <h1 className="text-2xl font-bold font-display text-gray-900">
          Seller Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          ምርትዎን በጥራት ለገበያ ያቅርቡ
        </p>
      </div>

      <div className="p-4 md:p-6 -mt-4 relative z-0 space-y-6 max-w-md mx-auto">
        {/* Guidelines Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-50"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
            የጥራት መመሪያ
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            ምርትዎ ተቀባይነት እንዲያገኝ መጀመሪያ ይሄን መመሪያ ይመልከቱ። ጥራት ያለው ቪዲዮ ለመቅረጽ የሚረዱ ነጥቦችን ይወቁ።
          </p>
          
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20 rounded-xl"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            <Youtube className="w-5 h-5 mr-2" />
            መመሪያውን በዩቲዩብ እይ
          </Button>
        </motion.div>

        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Ready to sell?</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Upload Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
           <p className="text-center text-sm text-gray-500 mb-4">
            ቪዲዮውን ካዩ በኋላ ምርትዎን እዚህ ይላኩ
          </p>
          <Link href="/seller/upload">
            <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 rounded-xl">
              <Video className="w-6 h-6 mr-2" />
              ጥሬ ቪዲዮ ለመላክ
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
