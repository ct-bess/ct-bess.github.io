"use client";

export default function ErrorPage() {
  return(
    <main className="center">
      <h1><span>My 500 Error Page</span></h1>
      <iframe id="ytplayer" width={640} height={360}
        src="https://youtube.com/embed/tyTz_-EQOXE?autoplay=1&controls=1&start=15&loop=0"
      ></iframe>
    </main>
  );
};

