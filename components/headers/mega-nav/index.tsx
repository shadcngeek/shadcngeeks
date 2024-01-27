import { NavMenu } from "./components/header-lists";
import SocialLinks from "./components/social-links";

function MegaNav() {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center dark:bg-slate-950 gap-5">
      <div className="flex gap-20">
        <div className="relative w-[50px] h-[50px] rounded-full bg-gray-900 dark:bg-white flex justify-center items-center shrink-0">
          <p className="font-bold text-white dark:text-gray-900">HX</p>
          {/* <div className="absolute h-2 w-full bg-gray-900 dark:bg-white right-[-100%] top-[50%] translate-y-[-50%]"></div>
          <div className="absolute h-2 w-full bg-gray-900 dark:bg-white right-[-70%] top-[15%] translate-y-[-15%]"></div>
          <div className="absolute h-2 w-full bg-gray-900 dark:bg-white right-[-70%] top-[85%] translate-y-[-85%]"></div> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3 items-center">
            <NavMenu />
          </ul>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default MegaNav;
