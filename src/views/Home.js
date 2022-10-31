import Section from "components/Section";

import supabase from "helper/supabase";
import { useEffect, useState } from "react";

function Home() {
  const [songs, setsongs] = useState([]);
  async function getSong() {
    const { data, error } = await supabase.from("music").select();
    console.log(data, "hello", error);
    setsongs(data);
  }
  useEffect(() => {
    getSong();
  }, []);

  return (
    <div className="grid gap-y-8">
      <Section
        title="Recently played"
        more="/blabla"
        items={songs.slice(0, 5)}
      />
      {/* <Section title="Shows to try" more="/blabla" items={songs} />
      <Section title="Made For Tayfun Erbilen" more="/blabla" items={songs} /> */}
    </div>
  );
}

export default Home;
