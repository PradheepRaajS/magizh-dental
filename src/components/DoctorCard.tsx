import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
}

const DoctorCard = ({ name, qualification, specialization, experience }: DoctorCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <CardContent className="p-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
          <Award className="h-12 w-12 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground text-center mb-2">{name}</h3>
        <p className="text-sm text-primary text-center font-medium mb-1">{qualification}</p>
        <p className="text-sm text-muted-foreground text-center mb-2">{specialization}</p>
        <p className="text-xs text-muted-foreground text-center">{experience}</p>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
