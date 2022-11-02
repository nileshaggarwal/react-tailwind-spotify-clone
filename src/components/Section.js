import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6 gap-y-8">
        {items.map(
          (item, index) =>
            item.metadata.animation_url !== null && (
              <SongItem item={item} key={item.hash} />
            )
        )}
      </div>
    </section>
  );
}

export default Section;
