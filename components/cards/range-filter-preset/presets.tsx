import { Button } from "@/components/ui/button";

interface PresetTypes {
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
}

function Presets({ setPrice }: PresetTypes) {
  const handleSetPreset = (value1: number, value2: number) => {
    setPrice([value1 / 100, value2 / 100]);
  };

  return (
    <div className="mt-10">
      <p className="text-slate-500 dark:text-slate-400">Preset</p>
      <div className="flex gap-3 mt-3 flex-wrap">
        <Button
          onClick={() => handleSetPreset(0, 2000)}
          variant={"outline"}
          className="text-slate-500 dark:text-800"
        >
          $0-2000
        </Button>

        <Button
          onClick={() => handleSetPreset(2000, 5000)}
          variant={"outline"}
          className="text-slate-500 dark:text-800"
        >
          $2000-5000
        </Button>

        <Button
          onClick={() => handleSetPreset(5000, 7000)}
          variant={"outline"}
          className="text-slate-500 dark:text-800"
        >
          $5000-7000
        </Button>
      </div>
    </div>
  );
}

export default Presets;
