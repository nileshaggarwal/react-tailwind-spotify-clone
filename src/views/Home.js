import Section from "components/Section";
import SongItem from "components/SongItem";
import supabase from "helper/supabase";
import useFetch from "hooks/useFetch";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [songs, setsongs] = useState([]);
  const [numeberOfIteration, setNumeberOfIteration] = useState(1);
  const { loading, error, list } = useFetch(numeberOfIteration);
  const loader = useRef(null);

  // const getSong = async () => {
  //   console.log("kung");
  //   console.log(numeberOfIteration, "hello");
  //   const { data, error } = await supabase
  //     .from("music")
  //     .select("*")
  //     .range(
  //       10 * (numeberOfIteration - 1),
  //       9 * numeberOfIteration + (numeberOfIteration - 1)
  //     );
  //   if (error) console.log(error);
  //   console.log(data);
  //   setNumeberOfIteration(numeberOfIteration + 1);
  //   setsongs([...songs, ...data]);
  // };
  // console.log(songs);
  // useEffect(() => {
  //   getSong(numeberOfIteration, setNumeberOfIteration, setsongs, songs);
  // }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setNumeberOfIteration((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="grid gap-y-8">
      {/* <InfiniteScroll
        dataLength={list.length}
        hasMore={true}
        next={getSong}
        loader={<h4>Loading 10 more songs...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Section title="New Music" more="/blabla" items={songs} />
      </InfiniteScroll> */}
      <Section title="New Music" more="/blabla" items={list} />
      {numeberOfIteration <= 5 && <div ref={loader} />}
    </div>
  );
}

export default Home;
