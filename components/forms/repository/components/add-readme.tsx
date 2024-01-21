import { Checkbox } from "@/components/ui/checkbox";

function AddReadMe() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Add a README file
        <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
          You choose who can see and commit to this repository.
        </p>
      </label>
    </div>
  );
}

export default AddReadMe;
