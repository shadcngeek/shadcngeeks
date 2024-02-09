import Logo from "../Logo";
import { NavMenu } from "./components/header-lists";
import SocialLinks from "./components/social-links";

function MegaNav() {
  return (
    <div className="bg-transparent border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center gap-5 md:px-[50px] lg:px-[100px]">
      <div className="md:border-r pr-10 border-slate-200 dark:border-slate-800">
        <Logo />
      </div>
      <div className="flex gap-20">
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
