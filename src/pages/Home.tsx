
import DataTable from "../components/DataTable";
import Loader from "../hooks/useInfiniteScroll";

const Home = () => {
    const data = Loader()
    return (
    <div className="p-4">
           <DataTable data={data} />
    </div>
  );
};

export default Home;
