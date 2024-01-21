import { BookOpenCheck, Lock, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function Visibility() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="flex gap-3 items-center">
          <BookOpenCheck />
          <div>
            <Label htmlFor="r1">Public</Label>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              Anyone on the internet can see this repository. You choose who can
              commit.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="flex gap-3 items-center">
          <Lock />
          <div>
            <Label htmlFor="r2">Private</Label>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              You choose who can see and commit to this repository.
            </p>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}

export default Visibility;
