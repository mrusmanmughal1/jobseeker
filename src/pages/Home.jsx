import FeaturedJobs from "../UI/FeaturedJobs";
import MainInfoBar from "../UI/MainInfoBar";
import RecentJObs from "../UI/RecentJObs";
import SearchJobsMain from "../UI/SearchJobsMain";

const Home = () => {
  return (
    <section id="main-section">
      <SearchJobsMain />
      <MainInfoBar />
      <div className="flex flex-col   lg:flex-row  w-11/12 mx-auto py-4">
        <RecentJObs />
        <div className="md:w-[40%] w-11/12  mx-auto">
          <FeaturedJobs />
        </div>
      </div>
    </section>
  );
};

export default Home;
