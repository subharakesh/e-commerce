import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  mobile: string;
  message: string;
};
export default function Contact() {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      mobile: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactFormData) {
    toast.success("Message sent!", {
      description: "Our team will reach out soon.",
      duration: 4000,
    });
    form.reset();
  }

  return (
    <div className="container mx-auto mt-20 max-w-4xl px-6">
      <div className="bg-white rounded-3xl py-14 px-8 md:px-12">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">
          Send Us a Message
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              rules={{ required: "Mobile number is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter mobile number"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message"
                      className="w-full resize-none p-4"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#20576E] hover:bg-[#00C9A7] text-white"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
