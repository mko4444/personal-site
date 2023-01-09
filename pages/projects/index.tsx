import { Frame } from "../index";
import Link from "next/link";

export default function Portal() {
  return (
    <Frame title="projects">
      <ul>
        <Link href="https://eventcaster.xyz">
          <li>
            <label>Eventcaster</label>
            <label>Facebook Events for Farcaster</label>
          </li>
        </Link>
        <Link href="https://alpha.onportal.xyz">
          <li>
            <label>Portal (shut down)</label>
            <label>Knowledge graph for DAOs</label>
          </li>
        </Link>
        <Link href="/projects/city">
          <li>
            <label>City</label>
            <label>A massive city built in Minecraft</label>
          </li>
        </Link>
        <Link href="https://twitter.com/@joinsail">
          <li>
            <label>Sail (acquired)</label>
            <label>Group vulnerability coaching for men</label>
          </li>
        </Link>
      </ul>
    </Frame>
  );
}
