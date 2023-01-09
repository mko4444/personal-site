import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

export default function Home() {
  return (
    <Frame title="Hello">
      <p style={{ lineHeight: 1.5 }}>
        I am a product designer and full-stack web developer. I&apos;m currently working on Eventcaster, which is sort
        of like Facebook Events, but for crypto. It&apos;s a Farcaster client that displays casts as events, and lets
        users coordinate and discuss them in one place.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        I previously co-founded a company called <a href="https://twitter.com/joinsail">Sail</a>, which was acquired by
        Maven in 2021. It was part community, part group-coaching program, with the goal of helping men become more
        vulnerable and emotionally intelligent. I also worked on a knowledge graph for crypto communities called Portal.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        My past roles have all been at startups and have included a mix of design, engineering, and product. I worked at{" "}
        <a href="https://mightyapp.com">Mighty</a>, where I was a &quot;hacker in residence,&quot; building Chrome
        extensions to improve the UX of the web browser. I was also recently the lead designer, and before that lead
        front-end engineer, at <a href="https://mem.co">Mem Protocol</a>.
      </p>
      <div style={{ height: 8 }} />
      <label style={{ fontSize: 14, fontWeight: 500, opacity: 0.5 }}>
        {" "}
        mattkoch.eth (ENS)<span style={{ margin: "0 6px", opacity: 0.33 }}> | </span>
        @matthew (Farcaster)
      </label>
    </Frame>
  );
}

export const Frame = ({
  children,
  className,
  title,
  style,
}: {
  children: any;
  className?: string;
  title: string;
  style?: any;
}) => {
  return (
    <div style={style} className={cn([className, "frame"])}>
      <Sidebar />
      <h1
        style={{
          textTransform: "capitalize",
          fontSize: 36,
          margin: 0,
        }}
      >
        {title}
      </h1>
      <div style={{ height: 10 }} />
      {children}
    </div>
  );
};

export const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-inner">
      <Link href="/">
        <h1
          style={{
            width: "100%",
            cursor: "pointer",
            margin: 0,
            fontWeight: 800,
            fontSize: 36,
          }}
        >
          MK
        </h1>
      </Link>
      <div style={{ height: 16 }} />
      <Button>home</Button>
      <Button>projects</Button>
      <Button>reading</Button>
      <Button>photos</Button>
    </div>
  </div>
);

const Button = ({ children }: any) => {
  const { pathname }: NextRouter = useRouter();

  const href = children === "home" ? "/" : "/" + children.toString().replace(" ", "-");

  return (
    <Link href={href}>
      <h4
        className={cn([
          "underline",
          {
            active: href !== "/" ? pathname.startsWith(href) && href !== "/" : pathname === "/",
          },
        ])}
      >
        {children}
      </h4>
    </Link>
  );
};
