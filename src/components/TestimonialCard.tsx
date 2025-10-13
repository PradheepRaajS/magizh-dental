import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, location, rating, text }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{text}"</p>
        <div className="border-t border-border pt-4">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
