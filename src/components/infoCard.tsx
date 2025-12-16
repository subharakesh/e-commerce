import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <Card className="h-full p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <Icon className="w-12 h-12 text-[#00C9A7]" />
        <CardTitle className="mt-4 text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-0 mt-4 text-gray-600 text-lg">
        {description}
      </CardContent>
    </Card>
  );
}
