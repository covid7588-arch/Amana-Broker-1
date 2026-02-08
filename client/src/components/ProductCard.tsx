import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ShoppingCart } from "lucide-react";
import { type Product } from "@shared/schema";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
  onBuy?: () => void;
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white group">
      <div className="relative aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Video Player or Thumbnail */}
        <video 
          src={product.videoUrl}
          controls={true}
          className="w-full h-full object-cover"
          poster={product.thumbnailUrl || undefined}
        />
        
        {/* Price Badge Overlay */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/95 text-green-700 hover:bg-white backdrop-blur shadow-sm text-sm font-bold px-3 py-1 border-0">
            {product.price} ETB
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button 
          onClick={onBuy}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20 rounded-xl h-12 font-semibold"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
}
