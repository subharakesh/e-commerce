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

  function onSubmit(data: ContactFormData) {
    console.log(data);

   toast.success("Message sent!", {
  description: "Our team will reach out soon.",
  duration: 4000, 
});


    form.reset();
  }

  return (
    
    <div className="container mx-auto mt-20 max-w-4xl  px-6 ml-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <div className="bg-white rounded-3xl py-14 px-12 min-h-[650px]">

        <h1 className="text-2xl font-semibold mb-6 text-gray-900 ">
          Send Us a Message
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >

        
        
            <FormField 
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className= "w-[550px]" placeholder="Enter your name" {...field} />
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
                  <FormLabel className="mt-5">Mobile</FormLabel>
                  <FormControl>
                    <Input className= "w-[550px]"
                      placeholder="Enter mobile number"
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
                  <FormLabel className="mt-5">Message</FormLabel>
                  <FormControl>
                    <Textarea className= "w-[550px] p-10 resize-none"
                      placeholder="Type your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button  type="submit"className= "w-[550px]  bg-[#20576E] hover:bg-[#00C9A7] text-white mt-6">
              Send Message
            </Button>

          </form>
        </Form>
        
        
      </div>
    

      </div>
      
    </div>
    
    
  );
  
}
