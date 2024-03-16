import { MobileView } from "./mobile/mobile-view";
import { NavMenu } from "./components/header-lists";

function HeaderX() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center dark:bg-slate-950">
      <div className="relative w-[50px] h-[50px] rounded-full bg-gray-900 dark:bg-white flex justify-center items-center shrink-0">
        <p className="font-bold text-white dark:text-gray-900">HX</p>
      </div>
      <nav
        role="navigation"
        aria-label="Main"
        className="hidden lg:flex gap-3 items-center"
      >
        <NavMenu />
      </nav>

      <div className="block lg:hidden">
        <MobileView />
      </div>
    </header>
  );
}

export default HeaderX;
