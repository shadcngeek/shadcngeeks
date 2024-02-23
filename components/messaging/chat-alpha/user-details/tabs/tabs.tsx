import SentFiles from "./sent-files";
import ReceivedFiles from "./received-files";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FileTabs() {
  return (
    <Tabs defaultValue="received" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-blue-200 dark:bg-blue-300">
        <TabsTrigger
          className="dark:text-slate-800 active:text-white"
          value="received"
        >
          Received
        </TabsTrigger>
        <TabsTrigger
          className="dark:text-slate-800 active:text-white"
          value="sent"
        >
          Sent
        </TabsTrigger>
      </TabsList>
      <TabsContent value="received">
        <ReceivedFiles />
      </TabsContent>
      <TabsContent value="sent">
        <SentFiles />
      </TabsContent>
    </Tabs>
  );
}

export default FileTabs;
