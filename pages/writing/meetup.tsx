import { Frame } from "../index";

export default function Writing() {
  return (
    <Frame title="Where Meetup Went Wrong">
      <p style={{ lineHeight: 1.5 }}>
        Lately I’ve been thinking about where Meetup went wrong and how we might build something better. Here are three
        core problems I’ve identified, but if you have more I’d love to hear them.
      </p>
      <h4>Backward incentives</h4>
      <p style={{ lineHeight: 1.5 }}>
        Meetup charges organizers before they even create their group, and it’s not cheap: a month-to-month plan costs
        $20. That’s before inviting a single person, and as the group expands, so does the cost.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        Meetups cost time and money to organize—they’re already a huge burden for organizers. While the cost could be
        seen as a quality bar, charging organizers at the outset makes it far harder to get started, and makes
        organizers far more likely to move off of the platform or quit altogether.
      </p>
      <h4>Groups are local, not global</h4>
      <p style={{ lineHeight: 1.5 }}>
        Meetup encourages organizers to create new groups for each city and activity—for example “SF hikers” and “NYC
        hikers”. This limits the brand association of every group to the local level.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        Contrast that with a hypothetical “Hikers Worldwide” community. Even though members would still organize
        locally, this community is far more likely to attract members in every city than any of the smaller communities
        above because it is a single, cohesive brand.
      </p>
      <h4>No shared ideology</h4>
      <p style={{ lineHeight: 1.5 }}>
        Communities usually form around a common worldview or like-mindedness. If someone is a fan of All In, Slate Star
        Codex, or Stratechery, you know something about how they think and what they like.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        But this is not how Meetup is structured: a quick skim of my feed shows a drop-in soccer game, a dance picnic,
        and an AI networking event. These generic activities inspire no like-mindedness, no shared worldview.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        While diversity is important, the lack of explicit common ground makes it more difficult for a strong community
        to form. It’s not impossible, just a lot more difficult, because common ground is like glue for
        relationship-building.
      </p>
      <div>–––––</div>
      <p style={{ lineHeight: 1.5 }}>
        Ultimately I think what really held Meetup back is timing. When Meetup got big in the 00’s, we were still busy
        bringing our IRL networks online. The influencer generation spawned by Instagram was still many years away, and
        there were few if any “global audiences” on the internet.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        But today things are completely different—the online world firmly drives the offline world. We’ve turned our
        online networks into massive global communities that drive our purchase decisions, form our beliefs, and help us
        make friends. And in this post-COVID world, people are free to move and work wherever.
      </p>
      <p style={{ lineHeight: 1.5 }}>
        Marc Andreessen says that there are no bad ideas, there’s only bad timing. Meetup was a victim of bad timing.
        But the world is a different place today, and now it’s time for something new. Stay tuned.
      </p>
      <div style={{ height: 8 }} />
      <label style={{ fontSize: 14, fontWeight: 500, opacity: 0.5 }}>
        <em>Written on July 1, 2023</em>
      </label>
    </Frame>
  );
}
