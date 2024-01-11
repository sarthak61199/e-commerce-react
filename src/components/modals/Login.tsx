import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { axiosPublic } from "@/lib/axios";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { loginSchema } from "@/schema";
import { LoginType } from "@/types";

function Login() {
  const form = useForm({
    defaultValues: {
      phoneNumber: "",
      otp: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { setAuth } = useAuth();

  const onSubmit = (values: LoginType) => {
    verifyOtpMutation.mutate(values);
  };

  const generateOtpMutation = useMutation({
    mutationFn: (phoneNumber: { phoneNumber: string }) => {
      return axiosPublic.post("/auth/generate-otp", phoneNumber);
    },
    onSuccess: () => {
      toast.success("OTP sent to your phone number");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (values: LoginType) => {
      return axiosPublic.post<
        unknown,
        {
          data: {
            accessToken: string;
          };
        }
      >("/auth/verify-otp", values);
    },
    onSuccess: ({ data }) => {
      setAuth((prev) => ({ ...prev, accessToken: data.accessToken }));
      toast.success("You have successfully logged in");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

  const getOtp = () => {
    const phoneNumber = form.getValues("phoneNumber");
    generateOtpMutation.mutate({ phoneNumber });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Login</DialogTitle>
          <DialogDescription>Login using your Phone Number</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        maxLength={10}
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="secondary" type="button" onClick={getOtp}>
                Send OTP
              </Button>
            </div>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="OTP"
                      maxLength={6}
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
