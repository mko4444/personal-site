import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

export default function Home() {
  return (
    <Frame title="Matt Kochakian">
      <p style={{ lineHeight: 1.5 }}>
        I&apos;m a product designer, full-stack web developer, and community-builder. I&apos;m currently the co-founder
        of <Link href="https://event.fund">EventFund</Link>, the crowdfunded events app for onchain communities.
        It&apos;s the easiest way for communities to collectively fund members to organize IRL.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        I previously co-founded a community startup called <a href="https://twitter.com/joinsail">Sail</a>, which was
        acquired by <Link href="https://maven.com">Maven</Link> in 2021. Our goal was to help men become more vulnerable
        and emotionally intelligent through group coaching.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        Before that, I led product engineering at <a href="https://mem.co">Mem Protocol</a> and was &quot;hacker in
        residence&quot; at <a href="https://mightyapp.com">Mighty</a>, building Chrome extensions to improve the UX of
        the web browser.
      </p>
      <div style={{ height: 8 }} />
      <label style={{ fontSize: 14, fontWeight: 500, opacity: 0.5 }}>
        Profiles: <Link href="https://rainbow.me/mattkoch.eth">mattkoch.eth</Link>
        <span style={{ margin: "0 6px", opacity: 0.33 }}> | </span>
        <Link href="https://warpcast.com/matthew">@matthew</Link>
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
      <Button>home</Button>
      <Button>writing</Button>
      <Button>reading</Button>
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
