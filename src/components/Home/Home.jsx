import Catalog from "../Catalog/Catalog";
import Loader from "../Loader/Loader";
import Top from "../Top/Top";

const Home = () => {
    const loading = false;
    return (
        <div>
            {loading && <Loader />}
            <Top />
            <Catalog />
        </div>
    )
}

export default Home;