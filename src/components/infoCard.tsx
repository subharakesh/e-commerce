
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { InfoCardData } from "@/types/infoCard";



export function InfoCard({ icon: Icon, title, description }: InfoCardData) {
  return (
    <div className="flex h-full ">

    <Card className="h-full p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-100 ">
      <CardHeader className="p-0">
        <Icon className="w-12 h-12 text-[#00C9A7]" />
        <CardTitle className="mt-4 text-2xl font-semibold  ">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-0 mt-4 text-gray-600 text-lg leading-relaxed">
        {description}
      </CardContent>
    </Card>
    </div>
  );
}
