/**
 * My amazing footer
 */
export default function Footer() {
  return(
    <footer>
      <span>Created with <a href="https://nextjs.org" className="link"><u>Next.js</u></a></span>
      <span>Site source code on <a href="https://github.com/ct-bess/ct-bess.github.io" className="link"><u>Github</u></a></span>
      <span>Daily <a href="https://www.lingscars.com/" className="link"><u>inspiration</u></a></span>
      <a hidden={true}>Add Entropy</a>
      <a href="#top" className="site-navigation-link">Scroll to top</a>
    </footer>
  );
}
