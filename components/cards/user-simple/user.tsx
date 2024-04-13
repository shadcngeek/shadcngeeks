import React from "react";

import UserImage from "./image";

import { Card, CardContent } from "@/components/ui/card";

function UserSimple() {
  return (
    <div>
      <Card className="w-fit mx-auto sm:mx-0 sm:mx-auto sm:mx-0 sm:ml-auto">
        <CardContent className="p-6">
          <div className="w-fit mx-auto">
            <UserImage
              imgSrc={
                "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              }
            />
          </div>
          <div className="space-y-2 text-center mt-3">
            <p className="dark:text-white">{"Phillip Doglas"}</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              {"Frontend Developer"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserSimple;
