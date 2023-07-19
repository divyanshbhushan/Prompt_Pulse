import Feed from "@components/Feed";

const Home = () => (
  <section className=' w-9/12 m-auto flex flex-col items-center justify-around'>
    <h1 className='head_text  text-center max-sm:text-5xl'>
      Explore & Share
      <br />
      <span className='bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-600 bg-clip-text text-transparent text-center'> AI-Powered Prompts</span>
    </h1>

    <Feed />
  </section>
);

export default Home;
