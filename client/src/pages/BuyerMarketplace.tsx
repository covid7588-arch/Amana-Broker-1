import { motion } from "framer-motion";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Loader2, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useCreateOrder } from "@/hooks/use-orders";

export default function BuyerMarketplace() {
  // In a real app, status would be 'approved'. For testing, we might want to see all or mock.
  // The schema default status is 'pending', let's fetch those for demo if no admin panel exists yet,
  // OR fetch 'approved' and rely on seed data. Let's fetch 'pending' for now so user sees their own uploads immediately
  // in this MVP without an admin panel.
  const { data: products, isLoading } = useProducts();
  const { toast } = useToast();
  const createOrder = useCreateOrder();

  const handleBuy = (productId: number) => {
    // In a real flow, this would open a confirmation dialog or payment gateway
    // Here we just create a pending order
    createOrder.mutate({
      productId,
      buyerId: 2, // Mock Buyer ID
      status: "pending"
    }, {
      onSuccess: () => {
        toast({
          title: "Order Placed!",
          description: "The seller will be notified.",
          className: "bg-green-600 text-white border-0",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Could not place order. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white p-6 pb-4 sticky top-0 z-20 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold font-display text-gray-900">Marketplace</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Filter className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search products..." 
            className="pl-10 bg-gray-100 border-0 rounded-xl h-12 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-green-500" 
          />
        </div>
      </div>

      <div className="p-4 md:p-6 max-w-md mx-auto space-y-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Loader2 className="w-8 h-8 animate-spin mb-2" />
            <p>Loading products...</p>
          </div>
        ) : products?.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No products found.</p>
            <Link href="/seller/upload" className="text-green-600 font-medium mt-2 inline-block">
              Be the first to sell!
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {products?.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  onBuy={() => handleBuy(product.id)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
