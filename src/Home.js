import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, err } = useFetch("http://3.39.207.95:8080");

  return (
    <div className="home">
      {err && <div>{err}</div>}
      {isLoading && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
    </div>
  );
};

export default Home;
