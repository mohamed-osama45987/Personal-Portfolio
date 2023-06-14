import HamburgerButton from "./buttons/HamburgerButton";
import MyResumeButton from "./buttons/MyResumeButton";

const links = ["About", "Projects", "Contact"];

function MobileMenu({ navOpened, closeNav }) {
  // smooth scrolling
  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="lg:hidden">
      <HamburgerButton navOpened={navOpened} closeNav={closeNav} />

      {navOpened && (
        <aside className=" absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-navBackGround -z-10 animate-scale-in-hor-right">
          <ul className="text-textColor">
            {links.map((link, idx) => (
              <li className="mb-10 text-xl">
                <a
                  href={link}
                  className="hover:text-orange"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav();
                    handleClickScroll(e.target.attributes.href.value);
                  }}
                >
                  0{idx + 1}.{link}
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
