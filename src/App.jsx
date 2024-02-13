import Header from "./components/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

const App = () => {
  return (
    <div className='bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center'>
      <Header />
      <WeatherBoard />
    </div>
  );
};

export default App;
