import "../../style.css";

export const metadata = {
  displayEntryAs: "New Website, New Me"
}

export const blogPage = () => {
  return(
    <div className="blog-entry-container">
      <div className="blog-title">
        <u>New Website, New Me - The Update The World Never Expected</u>
      </div>
      <p className="float-item light-black-background">
        <p className="blurb">
          My old website hosted on Github pages was a strange creation from my college days in 2018 or so.
          I was inspired by <a href="https://lingscars.com" className="link">Lingscars.com</a>, but never truly completed this one piece of mine.
          There were buttons flying throughout the screen, flashing backgrounds, and so on.
          This is a snapshot of the home page. I&apos;ve stripped out the intricate scripts leaving behind the layout and styling.
          The hashed router didn&apos;t want to co-operate when I downloaded the snapshot, but the full website was kind of a shell to begin with.
        </p>
        <p className="blurb">
          The main thing of note about my old website was that it hosted my first ever game, <a className="link" href="/demos/games/yyyyyy">YYYYYY</a>.
          I took on the project after starting my first job out of college and tacked it onto my website without updating much.
          I was curious if I could persue something fun and challenging like that
          while balancing a full time job. It&apos;s tricky, but possible. I&apos;d work 8 hours a day and then come home and work on this game for an hour or 2 a night.
          It goes to show how small, incremental progress can stack up into something nice.
          While my little creation isn&apos;t much to write home about, I still look back on those times fondly.
        </p>
        <p className="blurb">
          The main reason for scraping the old site and working on the new was to learn this flashy new <a className="link" href="https://nextjs.org/">Next.js</a> thing.
          It turns out the old create-react-app framework is a thing of the past.
          I&apos;ve also been window shopping around at other job opportunities too and wanted to clean up the site.
          After all, having my old disaster of a site linked on my resume probably isn&apos;t a good look!
          We&apos;ll let this page be the final resting place for the old site of mine, as well as on the git history I suppose!
        </p>
        <iframe className="blog-iframe center" src="/html/ct-bess.github.io.html"></iframe>
      </p>
    </div>
  );
}
