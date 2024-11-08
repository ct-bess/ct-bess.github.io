import Image from "next/image";
import "../../style.css";

export const metadata = {
  displayEntryAs: "Summer Madness"
}

export const blogPage = () => {
  return(
    <div className="blog-entry-container">
      <div className="blog-title">
        <u>Summer Madness and The Race From Hell</u>
        <p className="blurb">
          You can't beat the heat, so join it
        </p>
      </div>
      <p className="float-item light-black-background">
        <figure className="float-right">
          <iframe id="ytplayer" width={640} height={360}
            src="https://youtube.com/embed/NUuLhuHGVeg?autoplay=1&controls=0&loop=1"
          ></iframe>
          <figcaption>Khruangbin - Summer Madness (required background music)</figcaption>
        </figure>
        <p className="blurb">
          I've said it before and I'll say it again; Summer will humble you, especially in Houston.
          Hundred degree days at maximum humidity will have you questioning your life choices.
          But I was constantly surprised at the turn-out at each run club I visited.
          Despite the heat, the community just kept showing up every single day; And simply showing up is half the battle.
        </p>
        <p className="blurb">
          To be continued. Maybe
        </p>
      </p>
    </div>
  );
}
