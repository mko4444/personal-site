import { Frame } from "pages";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Frame title="city">
      <em>
        <p>
          "Every place you've ever imagined, it's real. There is a fictional
          city in your mind and you know every corner of it. Your mind is a
          world; each of us is a place."
          <br />
          <label style={{ marginTop: 8, fontSize: 12, opacity: 0.66 }}>
            - Porter Robinson
          </label>
        </p>
      </em>
      <div style={{ height: 32 }} />
      <div className="grid top-grid">
        <Link href="/projects/city/3">
          <div>
            <Image layout="fill" src="/city-3.jpeg" />
          </div>
        </Link>
        <div style={{ height: 5 }} />
        <label>
          An avenue in the south-east district of the city, looking toward the
          sky bridge and downtown district.
        </label>
      </div>
      <div style={{ height: 32 }} />
      <p>
        For the last few years, I've been quietly building a city inside of
        Minecraft. With well over a hundred unique skyscrapers, it may very well
        be the largest project of this kind ever made in the game.
      </p>
      <p>
        Entering this place is akin to stepping inside my mind: you see the
        progression of ideas and inspirations as they evolve over time; watch an
        entire city rise from nothing but my own imagination.
      </p>
      <p>
        There’s something different about a city as a creative medium: that you
        can actually walk through it; that it’s ever-changing, ever-growing,
        ever-evolving. I think "creativity" is more than just the act of
        generating novel ideas, it's also about finding the <em>right</em> way
        to express those ideas. This is my medium of expression.
      </p>
      <p>
        Influenced by its surroundings, each new building is a reflection of
        time and space. But each one puts forth new ideas too; each one brings
        with it new inspiration, a new vision for the future. Sometimes those
        visions rhyme, and other times they conflict. I think that creative
        dance, the harmony and the discord, the interplay of ideas, are what
        make cities so vibrant. The battle for the skyline is a beautiful thing
        to watch.
      </p>
      <div style={{ height: 32 }} />
      <div className="grid top-grid">
        <Link href="/projects/city/4">
          <div>
            <Image layout="fill" src="/city-4.jpeg" />
          </div>
        </Link>
        <div style={{ height: 5 }} />
        <label>Looking out at the downtown district from the sky bridge.</label>
      </div>
      <div style={{ height: 32 }} />
      <div className="grid equal-grid">
        <Link href="/projects/city/2">
          <div>
            <Image layout="fill" src="/city-2.jpeg" />
          </div>
        </Link>
        <Link href="/projects/city/5">
          <div>
            <Image layout="fill" src="/city-5.jpeg" />
          </div>
        </Link>
        <label>
          The view from underneath the sky bridge, looking up at the downtown
          district.
        </label>
        <label>
          The view of the downtown district from a nearby balcony street.
        </label>
      </div>
      <div style={{ height: 32 }} />
      <div className="grid top-grid">
        <Link href="/projects/city/7">
          <div>
            <Image layout="fill" src="/city-7.jpeg" />
          </div>
        </Link>
        <div style={{ height: 5 }} />
        <label>The northern city skyline.</label>
      </div>
      <div style={{ height: 32 }} />
    </Frame>
  );
}
