import { BG_COLOR } from "@constants/bgColor";
import ShowMovies from "./components/ShowMovies";
import useCtxOutlet from "@hooks/useCtxOutlet";

const stylesDivBg = Object.values(BG_COLOR);

const Home = () => {
  const { genres } = useCtxOutlet();

  return (
    <div>
      {genres?.map((genre, indx) => (
        <ShowMovies
          key={genre.id}
          genre={genre}
          divBg={stylesDivBg[indx % stylesDivBg.length]}
        />
      ))}
    </div>
  );
};

export default Home;
