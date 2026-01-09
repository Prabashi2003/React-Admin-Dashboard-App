import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userpic from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Serach for data, users, docs"/>
          <FaRegBell/>
          <img src={userpic} alt="userpic" />
        </div>
        <section className="widget-container">
          <WidgetItem 
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)" 
          />
          <WidgetItem 
            percent={-14}
            value={400}
            heading="Users"
            color="rgba(255, 0, 0, 1)" 
          />
          <WidgetItem 
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgba(34, 94, 39, 1)" 
          />
          <WidgetItem 
            percent={30}
            value={1000}
            heading="Products"
            color="rgba(217, 29, 255, 1)" 
          />
        </section>

        <section className="graph-container">
          {/* Graph */}
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1 = "rgb(0,115,255)"
              bgColor_2 = "rgba(53,162,235,0.8)"
            /> */}
          </div>

          {/* Inventry */}
          <div className="dashboard-categories">
            <h2>Inventry</h2>
            <div>
              {data.categories.map((i) =>(
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, ${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
    
  );
};

//revenue circle
interface WidgetItemProps{
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({heading,value,percent,color,amount=false}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount? `$${value}` : value}</h4>
      { percent > 0 ? (
        <span className="green">
          <HiTrendingUp/> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown/> {percent}%{" "}
        </span>
      )}
    </div>

    <div className="widget-circle"
    style={{
      background:`conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360 }deg,
      rgb(255,255,255) 0
      )`
    }}
    >
      <span style={{color,}}> 
        {percent}% 
      </span>
    </div>
  </article>
);



// graph
interface CategoryItemProps{
  color:string;
  value: number;
  heading: string;
}

const CategoryItem = ({color,value,heading}: CategoryItemProps)=>(
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}`,
      }}> </div>
    </div>
    <span>{value}%</span>
  </div>
);








export default Dashboard