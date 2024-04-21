import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export function PaymentMethod() {
  return (
    <div className="space-y-2">
      <p className="font-bold">Payment method</p>
      <RadioGroup className="flex gap-5" defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">
            <Image
              width={100}
              height={50}
              className="w-8"
              alt="payment method"
              src={"/images/Visa.png"}
            />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">
            <Image
              width={100}
              height={50}
              className="w-8"
              alt="payment method"
              src={"/images/MasterCard.png"}
            />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">
            <Image
              width={100}
              height={50}
              className="w-8"
              alt="payment method"
              src={"/images/Paypal.png"}
            />
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
