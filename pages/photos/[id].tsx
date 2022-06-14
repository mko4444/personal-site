import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

export default function Values() {
  const { query }: NextRouter = useRouter();
  const { id } = query;
  return (
    <Link href="/photos">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "black",
          minHeight: "100vh",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            height: 48,
          }}
        ></div>
        <img
          style={{
            margin: "0 auto",
            position: "relative",
            maxWidth: "800px",
            maxHeight: "calc(100vh - 96px)",
            pointerEvents: "none",
            borderRadius: 4,
          }}
          src={`/photo-${id}.jpg`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 13,
            fontWeight: 600,
            width: "100%",
            maxWidth: "800px",
            opacity: 0.5,
            height: 48,
            bottom: 0,
            padding: "0 20px",
            position: "absolute",
          }}
        >
          <label style={{ color: "white" }}>TAP ANYWHERE TO CLOSE</label>
        </div>
      </div>
    </Link>
  );
}
