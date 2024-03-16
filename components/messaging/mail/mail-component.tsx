import { cookies } from "next/headers";
import Image from "next/image";

import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

const MailComponent = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = undefined;

  collapsed && collapsed?.value !== "undefined"
    ? JSON.parse((collapsed as any)?.value)
    : undefined;

  return (
    <div className="dark:bg-slate-950 dark:text-white h-dvh p-4 md:p-10 lg:px-[50px] xl:px-[100px]">
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex h-full justify-center">
        <div className="border rounded-md border-slate-200 dark:border-slate-800">
          <Mail
            accounts={accounts}
            mails={mails}
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
            navCollapsedSize={4}
          />
        </div>
      </div>
    </div>
  );
};

export default MailComponent;
