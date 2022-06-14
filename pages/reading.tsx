import { Frame } from "./index";
import Link from "next/link";

const pStyle = { opacity: 0.66 };

export default function Portal() {
  return (
    <Frame title="reading list">
      <h3>Books</h3>
      <p style={pStyle}>
        I used to read as many books as possible, but I found myself absorbing
        little of what I read. So now I choose my reads carefully and re-read
        them often. Each book in this list is in my rotation, and each one
        shapes how I think about the world.
      </p>
      <div style={{ height: 4 }} />
      <ul>
        <Link href="https://www.goodreads.com/book/show/13383957-insanely-simple">
          <li>
            <label>Insanely Simple</label>
            <label>Ken Segall</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/book/show/55711592-high-conflict">
          <li>
            <label>High Conflict</label>
            <label>Amanda Ripley</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/en/book/show/22318382">
          <li>
            <label>Becoming Steve Jobs</label>
            <label>Brent Schlender & Rick Tetzeli</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/en/book/show/22451908">
          <li>
            <label>The Revolt of the Public</label>
            <label>Martin Gurri</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/book/show/54860444-wanting">
          <li>
            <label>Wanting</label>
            <label>Luke Burgis</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/en/book/show/11667578">
          <li>
            <label>Reinventing Discovery</label>
            <label>Michael Nielsen</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/en/book/show/210022">
          <li>
            <label>The Company</label>
            <label>John Micklethwait & Adrian Wooldridge</label>
          </li>
        </Link>
        <Link href="https://www.goodreads.com/book/show/18077903-creativity-inc">
          <li>
            <label>Creativity, Inc.</label>
            <label>Ed Catmull & Amy Wallace</label>
          </li>
        </Link>
      </ul>
      <div style={{ height: 32 }} />
      <h3>Papers & Posts</h3>
      <ul>
        <Link href="https://kk.org/thetechnium/scenius-or-comm/">
          <li>
            <label>Scenius, or Communal Genius</label>
            <label>Kevin Kelly • The Technium</label>
          </li>
        </Link>
        <Link href="https://jacob.energy/hyperstructures.html">
          <li>
            <label>Hyperstructures</label>
            <label>Jacob Horne • Personal Site</label>
          </li>
        </Link>
        <Link href="https://educatedguesswork.org/posts/blockchain-identity/">
          <li>
            <label>On Blockchains/Ledgers and Identity Systems</label>
            <label>Eric Rescorla • Educated Guesswork</label>
          </li>
        </Link>
        <Link href="https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide/">
          <li>
            <label>
              DAOs, DACs, DAs and More: An Incomplete Terminology Guide
            </label>
            <label>Vitalik Buterin • Ethereum Foundation</label>
          </li>
        </Link>
        <Link href="https://vitalik.eth.limo/general/2022/01/26/soulbound.html">
          <li>
            <label>Soulbound</label>
            <label>Vitalik Buterin • Personal Site</label>
          </li>
        </Link>
        <Link href="https://www.notboring.co/p/the-great-online-game?s=r">
          <li>
            <label>The Great Online Game</label>
            <label>Packy McCormick • Not Boring</label>
          </li>
        </Link>
      </ul>
      <div style={{ height: 64 }} />
    </Frame>
  );
}
