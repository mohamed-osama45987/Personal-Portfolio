import HamburgerButton from "./buttons/HamburgerButton";
import MyResumeButton from "./buttons/MyResumeButton";

const links = ["01.About", "02.Projects", "03.Contact"];

function MobileMenu({ navOpened, closeNav }) {
  return (
    <div className="lg:hidden">
      <HamburgerButton navOpened={navOpened} closeNav={closeNav} />

      {navOpened && (
        <aside className=" absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-navBackGround -z-10 animate-scale-in-hor-right">
          <ul className="text-textColor">
            {links.map((link) => (
              <li className="mb-10 text-xl">
                <a href="#" className="hover:text-orange">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <MyResumeButton />
        </aside>
      )}
    </div>
  );
}

export default MobileMenu;
