import PRTable from "./pr-table";
import Image from "next/image";
import "./style.css";

/**
 * Running
        <iframe height={454} width={300} src="https://www.strava.com/athletes/25917112/latest-rides/5416bb5333591a1c689c300b8e2a878fb9884d79"></iframe>
        <iframe height={160} width={300} src="https://www.strava.com/athletes/25917112/activity-summary/5416bb5333591a1c689c300b8e2a878fb9884d79"></iframe>
 */
export default function Running() {
  return(
    <main>
      <div className="running-profile-container float-item">
        <Image src="/2023-houston-half.jpg" alt="Man running Houston Half marathon" className="float-left" width={454} height={640}/>
        <h2 className="center"><u>The Why</u></h2>
        <div className="light-black-background">
          <p className="blurb">
            It&apos;s the question that plagues all of us. It has a way of creeping into our minds at the worst possible times when we&apos;re most vulnerable.
            When we&apos;re in the pain cave during a race and we still have half way to go, we ask ourselves, &quot;why?&quot; Or when that lung collapses spontaneously we ask, &quot;why me?&quot;
            When the question comes, you&apos;ll need to be ready to answer immediately and confidently.
            You&apos;ll have a breif moment to steel your mind and align yourself back on track.
            If you can&apos;t then chances are you&apos;ll throw in the towel and embrace the coming pity party.
          </p>
          <br/>
          <p className="blurb">
            My why is simple, it&apos;s basic self mastery, discovery, and actualization. Why do I continue to run these races or push myself in general?
            I want to be someone that I can truly be proud of. When I look back, I want to be proud of my arduous journey that has lead me to this point.
            I want to be my strongest self, and to do so, I must create it. I have to forge it with my own strength, little it may be.
            That&apos;s not my only reason of course, just a reason. I also run and workout to stay fit, I do it for the joy or thrill of it, I run for community,
            and sometimes just for the challenge to see what I&apos;m capable of.
            It&apos;s important to keep your why close because it will cast any doubt you may ever have aside.
          </p>
        </div>
        <br/>
        <iframe className="center" height={160} width={300} src="https://www.strava.com/athletes/25917112/activity-summary/5416bb5333591a1c689c300b8e2a878fb9884d79"></iframe>
      </div>

      <h2 className="center"><u>Ultra History</u></h2>

      <div className="race-container">
        <p className="blurb">
          Ultra marathons are funny huh?
        </p>
        <br/>
        {PRTable( "ultra", "Ultra" )}
      </div>

      <h2 className="center"><u>Marathon History</u></h2>

      <div className="race-container">
        <p className="blurb">
          Simply finishing a marathon is an incredible feat to be proud of, and in my eyes, it is the toughest race out of them all.
          It&apos;s not short enough to the point of red-lining your cardio, and it&apos;s not far enough to the extent that
          you are afforded the luxury of taking it easy for a few miles when you&apos;re feeling tired.
          The marathon is a long race, but it&apos;s short enough to where you can really edge your threshold pace while remaining long enough to allow for any conceivable thing to give out.
          Your given plenty of time and distance for any muscle fiber to buckle, for the GI system to reach critical mass, or for your mental fortitude to lapse.
          It is a race where the weight of everything feels just right, and that&apos;s why I keep coming back for more.
        </p>
        <br/>
        {PRTable( "marathon", "Marathon" )}
      </div>

      <h2 className="center"><u>Half Marathon History</u></h2>

      <div className="race-container">
        <p className="blurb">
          I don&apos;t have much to say about the half marathon. It can be very tough, but, with enough practice, it eventually just becomes a long run at tempo pace.
          That being said, I do enjoy racing them. They&apos;re a great middle ground between long distance and fast speeds while providing a much needed break from
          the typical marathon finishing slog that befalls upon me for each final 5K or 10K of the full marathon.
        </p>
        <br/>
        {PRTable( "half", "Half Marathon" )}
      </div>

      <h2 className="center"><u>5K History</u></h2>

      <div className="race-container">
        <p className="blurb">
          All right, now time to possibly rustle some feathers. The 5K sucks. It is undeniably the worst race distance with the 800m coming in as an easy 2nd place.
          The reason why the 5K sucks is because it&apos;s a 15-20 minute all-out sprint. Imagine red-lining your car engine for 20 minutes straight and taking it to your
          mechanic and asking, &quot;Yeah, I left a cinderblock on the gas peddle for 20 minutes. Why wont my car start anymore?&quot;
          That&apos;s what a 5K feels like. Fully red-lining your anarobic ability for 20 minutes straight with no respite. You ride that red-line the whole way through.
          Anything under 5K at least lets you finish early, so you get to tell your mechanic that you only left the brick on your peddle for 5 minutes rather than 20.
          And on the flip side, anything over 5K is idyllic. Even the 10K.
          Currently, I allot myself ONE 5K per year, and believe me, if my local trot
          had a 10K option I&apos;d be on that instead. None the less, I did most of my 5K&apos;s in my 2 years of highschool cross-country.
          I&apos;m only going to list my highschool 5K PR here though, it was my only sub 20 of cross-country anyway, LOL!
        </p>
        <br/>
        {PRTable( "five-k", "5K" )}
      </div>

      <h2 className="center"><u>Other Distances</u></h2>

      <div className="race-container">
        <p className="blurb">
          Now for the odd ball distances that I haven&apos;t done enough races in to justify giving them a dedicated table.
        </p>
        <br/>
        {PRTable( "other", "Other" )}
      </div>

      <br/>

    </main>
  );
}
