//import Link
import Link from "next/link";

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[6em]">
        {navData.map((item, index) => {
          //destructure item
          const { name, href } = item;
          return (
            <li key={index}>
              <Link href={href} legacyBehavior>
                <a
                  className={`${
                    header ? "text-primary" : "text-white"
                  } cursor-pointer
              hover:text-accent-hover transition`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
