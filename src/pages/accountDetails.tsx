import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountDetails() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-16 ">
      <Card className="rounded-3xl shadow-md p-6">
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-20 w-20">
            <div className="h-20 w-20 rounded-full bg-[#20576E] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
          </Avatar>

          <CardTitle className="text-2xl">Account Details</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage your personal information
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input  defaultValue="Subha" />
            </div>

            <div>
              <Label>Email</Label>
              <Input defaultValue="subha@email.com" disabled />
            </div>

            <div>
              <Label>Mobile</Label>
              <Input defaultValue="+91 98765 43210" />
            </div>

            <div>
              <Label>Location</Label>
              <Input defaultValue="Bangalore" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-[#20576E] hover:bg-[#00C9A7] text-white">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
