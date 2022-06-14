import { Frame } from "../index";
import Link from "next/link";

const photoArr = [1, 2, 3, 4, 5, 6];

export default function Values() {
  return (
    <Frame title="photos">
      <div className="photo-grid">
        {photoArr.map((n: number, i: number) => (
          <Link href={`/photos/${i + 1}`}>
            <div>{n && <img src={`photo-${i + 1}.jpg`} />}</div>
          </Link>
        ))}
        <div style={{ height: 34 }} />
      </div>
    </Frame>
  );
}
