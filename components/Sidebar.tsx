import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div>
        <img
          src="https://scontent.fsub8-1.fna.fbcdn.net/v/t1.18169-1/p320x320/11082561_951891674835726_7435194629227167698_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1KYjqUDj0rAAX9mvlsK&_nc_ht=scontent.fsub8-1.fna&oh=7fdc61a94ad4b9e56f85ad0a2d22931b&oe=6174D2A8"
          alt="user avatar"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-Roboto">
          <span className="text-blue">Arief</span> - Sangga Utama
        </h3>
        <p className="px-2 py-1 my-3 bg-blue-500 rounded-full">Web Developer</p>
        <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-blue-500 rounded-full"
          href=""
          download="name"
        >
          <GiTie className="w-6 h-6" /> Download Resume
        </a>
        {/* social media */}
        <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
          <a href="https://github.com/kapoylawas">
            <AiFillYoutube className="w-8 h-8 text-red-600 cursor-pointer" />
          </a>
          <a href="https://github.com/kapoylawas">
            <AiFillGithub className="w-8 h-8 cursor-pointer text-blue" />
          </a>
          <a href="https://www.linkedin.com/in/arief-sangga-utama/">
            <AiFillLinkedin className="w-8 h-8 text-blue-400 cursor-pointer" />
          </a>
        </div>

        {/* alamat */}
        <div
          className="py-4 my-5 bg-blue-300"
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex items-center justify-center space-x-2">
            <GoLocation />
            <span>Indonesia, City: Sidoarjo</span>
          </div>
          <p className="my-2">arif.sangga@gmail.com</p>
        </div>
        {/* email button */}
        <button
          className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r focus:outline-none from-blue-400 to-indigo-400"
          onClick={() => window.open("mailto:arif.sangga@gmail.com")}
        >
          Email Me
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
        >
          Theme
        </button>
      </div>
    </>
  );
};

export default Sidebar;
