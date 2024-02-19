import { cookies } from "next/headers";

import { Chat } from "./components/chat";

const ChatWeb = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = undefined;

  collapsed && collapsed?.value !== "undefined"
    ? JSON.parse((collapsed as any)?.value)
    : undefined;

  return (
    <div className="dark:bg-slate-950 dark:text-white h-dvh px-[200px] p-5">
      <Chat
        navCollapsedSize={4}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </div>
  );
};

export default ChatWeb;
