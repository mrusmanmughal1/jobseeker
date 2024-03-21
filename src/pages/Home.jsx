import FeaturedJobs from "../UI/FeaturedJobs";
import MainInfoBar from "../UI/MainInfoBar";
import RecentJObs from "../UI/RecentJObs";
import SearchJobsMain from "../UI/SearchJobsMain";

const Home = () => {
  return (
    <section id="nav">
      <SearchJobsMain />
      <MainInfoBar />
      <div className="flex flex-col w-full  lg:flex-row lg:w-11/12 mx-auto py-4">
        <RecentJObs />
        <div className="md:w-[25%] w-11/12 ">
          <FeaturedJobs />
        </div>
      </div>
    </section>
  );
};

export default Home;
