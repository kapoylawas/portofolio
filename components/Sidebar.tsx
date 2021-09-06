import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://scontent-sin6-4.xx.fbcdn.net/v/t1.18169-9/11082561_951891674835726_7435194629227167698_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jw-bpLY8XyQAX8Y2b_a&_nc_ht=scontent-sin6-4.xx&oh=d9dd209e9e5141e16a1e8a1d840280b4&oe=6148AA42"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Roboto">
        <span className="text-blue">Arief</span> -
        Sangga Utama
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
        <a href="">
          <AiFillYoutube className="w-8 h-8 text-red-600 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 text-black cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 text-blue-400 cursor-pointer" />
        </a>
      </div>

      {/* alamat */}
      <div
        className="py-4 my-5 bg-indigo-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Indonesia, City: Sidoarjo</span>
        </div>
        <p className="my-2">arif.sangga@gmail.com</p>
        <p className="my-2">085733517044</p>
      </div>
      {/* email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r focus:outline-none from-blue-400 to-indigo-400"
        onClick={() => window.open('mailto:arif.sangga@gmail.com')}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-blue-400 to-indigo-400">
        Theme
      </button>
    </div>
  );
};

export default Sidebar;
