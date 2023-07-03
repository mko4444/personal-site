import Link from "next/link";
import { Frame } from "../index";

export default function Writing() {
  return (
    <Frame title="writing">
      <ul>
        <Link href="/writing/meetup">
          <li>
            <label>Where Meetup Went Wrong</label>
            <label>July 1, 2023</label>
          </li>
        </Link>
      </ul>
    </Frame>
  );
}
