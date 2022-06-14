import { Frame } from "../index";
import Link from "next/link";

export default function Portal() {
  return (
    <Frame title="projects">
      <ul>
        <Link href="https://alpha.onportal.xyz">
          <li>
            <label>Portal</label>
            <label>The knowledge graph for communities</label>
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
            <label>Sail</label>
            <label>Group vulnerability coaching for men</label>
          </li>
        </Link>
      </ul>
    </Frame>
  );
}
