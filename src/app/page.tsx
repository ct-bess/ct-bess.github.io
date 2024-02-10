import Image from "next/image";
import Timeline from "./timeline";
import ContactWidget from "./contact/widget";

export default function Home() {
  return (
    <main>
      <div className="about-container">
        <h1 className="center"><span>Connor Bessell</span></h1>
        <div className="profile-container">
          <Image src="/me-but-jolly-crop.jpg" className="profile-item picture-bubble" alt="Picture of the author" width={250} height={250}/>
          <p className="blurb profile-item light-black-background">
            Howdy! I&apos;m a full-time software engineer who just runs in his spare time, for hours upon hours. He just doesn&apos;t stop running.
            You could say I&apos;m a part-time full-time runner.
            Anyway... I enjoy working on the frontend and backend of applications, the full-stack.
            Frontend slightly moreso than backend, but perhaps one day I will specialize into one of the two.
            I&apos;ve somehow found myself working in the insurance and financial services industry for the past 5+ years,
            but I wouldn&apos;t mind branching out to software engineering in other sectors.
            I graduated from Texas A&M with a Bachelor Of Science degree in Computer Engineering.
            I persued this degree with the Computer Science department, so this degree is basically a Computer Science degree with Electrical Engineering electives.
            While at school, we focused on core fundamentals such as object-oriented programming, application security, and even lower level computer architecture.
            Consider this website a <i>lite resume</i> but with more flare and character about me.
            You&apos;ll find several web application demos and even some random thoughts in my blog.
            Enjoy your stay!
            <br/>
            <i className="tiny-text">Photo by: <a className="link" href="http://jonathangwesterfield.github.io/">Johnathan Westerfield</a></i>
          </p>
        </div>
      </div>

      <ContactWidget/>

      <div className="timeline-container">
        <h2 className="center">
          <span>My Career Journey</span>
        </h2>

        <div className="center half-width">
          <Timeline/>
        </div>
      </div>

      <ContactWidget/>

    </main>
  );
}
