import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  designation: string;
  dciNum: string;
  imageSrc: string;
}

const DoctorCard = ({ name, qualification, specialization, experience, designation, dciNum, imageSrc }: DoctorCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <CardContent className="p-6">
        <div className="w-24 h-28 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <Award className="h-12 w-12 text-primary-foreground" />
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground text-center mb-2">{name}</h3>
        <p className="text-sm text-primary text-center font-medium mb-1">{qualification}</p>
        <p className="text-sm text-muted-foreground text-center mb-2">{specialization}</p>
        <p className="text-xs text-muted-foreground text-center">{experience}</p>
        <p className="text-xs text-muted-foreground text-center">{designation}</p>
        <p className="text-xs text-muted-foreground text-center">{dciNum}</p>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
