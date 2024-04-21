"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPSlot,
  InputOTPGroup,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export function InputOTPCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Your Account</CardTitle>
        <CardDescription>
          Your One-Time Password has been sent via SMS to the registered phone
          number.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter className="justify-end">
        <Button>Verify</Button>
      </CardFooter>
    </Card>
  );
}
