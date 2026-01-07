import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <DivOne location={location}/>
      <Divtwo location={location}/>
    </aside>
  );
};

const DivOne = ({location} : {location: Location}) => (
    <div>
        <h5>Dashboard</h5>
            <ul>
                <Li 
                    url="/admin/dashboard"
                    location={location}
                    Icon={RiDashboardFill}
                    text="Dashboard"
                />
                <Li 
                    url="/admin/Products"
                    location={location}
                    Icon={RiShoppingBag3Fill}
                    text="Products"
                />
                <Li 
                    url="/admin/Customer"
                    location={location}
                    Icon={IoIosPeople}
                    text="Customer"
                />
                <Li 
                    url="/admin/Transaction"
                    location={location}
                    Icon={AiFillFileText}
                    text="Transaction"
                />
            </ul>
    </div>
      
);

const Divtwo = ({location} : {location: Location}) => (
    <div>
        <h5>charts</h5>
            <ul>
                <Li 
                    url="/admin/bar"
                    location={location}
                    Icon={FaChartBar}
                    text="Bar"
                />
                <Li 
                    url="/admin/pie"
                    location={location}
                    Icon={FaChartPie}
                    text="Pie"
                />
                <Li 
                    url="/admin/line"
                    location={location}
                    Icon={FaChartLine}
                    text="Line"
                />
            </ul>
    </div>
      
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, location, Icon, text }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url)
          ? "rgb(0,115,255)"
          : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
