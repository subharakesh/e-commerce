import { Button } from "@/components/ui/button"
import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InfoCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
         Upfront prices, CarMax Certified quality, and detailed history reports on every car
        </CardDescription>
        
      </CardHeader>
      <CardContent>
      
      </CardContent>
  
    </Card>
  )
}
