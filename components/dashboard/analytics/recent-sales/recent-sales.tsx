import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-2 sm:items-center">
        <div className="flex items-center w-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <div className="font-medium shrink-0">+$1,999.00</div>
            </div>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-2 sm:items-center">
        <div className="flex items-center w-full">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <div className="font-medium shrink-0">+$39.00</div>
            </div>
            <p className="text-sm text-muted-foreground">
              jackson.lee@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-2 sm:items-center">
        <div className="flex items-center w-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium leading-none">
                Isabella Nguyen
              </p>
              <div className="font-medium shrink-0">+$299.00</div>
            </div>
            <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-2 sm:items-center">
        <div className="flex items-center w-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback>WK</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <div className="font-medium shrink-0">+$99.00</div>
            </div>
            <p className="text-sm text-muted-foreground">will@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
