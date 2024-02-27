"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import {
  FlagImage,
  CountryData,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const countriesData: CountryData[] = [
  ["Austria", "at", "43"],
  ["Azerbaijan", "az", "994", "(..) ... .. .."],
  ["Bahamas", "bs", "1242"],
  ["Bahrain", "bh", "973"],
  ["Bangladesh", "bd", "880"],
  ["Barbados", "bb", "1246"],
  ["Belarus", "by", "375", "(..) ... .. .."],
  ["Belgium", "be", "32", "... .. .. .."],
  ["Belize", "bz", "501"],
  ["Benin", "bj", "229"],
  ["Bhutan", "bt", "975"],
  ["Bolivia", "bo", "591"],
  ["Bosnia and Herzegovina", "ba", "387"],
  ["Botswana", "bw", "267"],
  ["Brazil", "br", "55", "(..) ........."],
  ["British Indian Ocean Territory", "io", "246"],
  ["Brunei", "bn", "673"],
  ["Bulgaria", "bg", "359"],
  ["Burkina Faso", "bf", "226"],
  ["Burundi", "bi", "257"],
  ["Cambodia", "kh", "855"],
  ["Cameroon", "cm", "237"],
];

function PhoneNumberInput() {
  const [value, setValue] = useState<string>("");
  const { inputValue, handlePhoneValueChange, inputRef, setCountry } =
    usePhoneInput({
      defaultCountry: "at",
      value,
      countries: countriesData,
      onChange: (data) => {
        setValue(data.phone);
      },
    });

  return (
    <div className="flex items-center w-full">
      <Select onValueChange={(value) => setCountry(value)}>
        <SelectTrigger className="w-fit rounded-tr-none rounded-br-none border-r-0 outline-none dark:outline-none focus:ring-0 dark:focus:ring-0 hover:outline-none"></SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            {countriesData.map((c: any) => {
              const country = parseCountry(c);
              return (
                <SelectItem key={country.iso2} value={country.iso2}>
                  <div className="flex gap-3 items-center">
                    <FlagImage iso2={country.iso2} size="20px" />
                    <span>+{country.dialCode}</span> {country.name}
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        className="w-full border-l-0 rounded-tl-none rounded-bl-none outline-none dark:outline-none focus-visible:ring-0 dark:focus-visible:ring-0 hover:outline-none"
        value={inputValue}
        onChange={handlePhoneValueChange as any}
        type="tel"
        ref={inputRef as any}
      />
    </div>
  );
}

export default PhoneNumberInput;
