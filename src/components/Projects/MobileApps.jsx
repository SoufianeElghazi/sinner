import React from "react";
import EndeavorsHeading from "./EndeavorsHeading";
import { Container } from "react-bootstrap";
import { AiOutlineArrowUp, AiOutlineGlobal } from "react-icons/ai";
import { SiAndroid } from "react-icons/si";
import fikraIcon from "../../Assets/mobile-apps/fikra.webp";
import hsebliIcon from "../../Assets/mobile-apps/hsebli.webp";
import weatherIcon from "../../Assets/mobile-apps/scene-weather.webp";
import fikraQr from "../../Assets/mobile-apps/fikra-android.svg";
import hsebliAndroidQr from "../../Assets/mobile-apps/hsebli-android.svg";
import hsebliWebQr from "../../Assets/mobile-apps/hsebli-web.svg";
import weatherQr from "../../Assets/mobile-apps/scene-weather-android.svg";

const apps = [
  {
    name: "Fikra", category: "Daily puzzles", theme: "fikra", icon: fikraIcon,
    description: "A daily mix of word, logic, and pattern puzzles in Arabic and French.",
    note: "iOS coming soon",
    links: [{ label: "Google Play", detail: "Android", href: "https://play.google.com/store/apps/details?id=com.elsoufiane.fikra.daily", qr: fikraQr }],
  },
  {
    name: "HsebLi", category: "Purchase planning", theme: "hsebli", icon: hsebliIcon,
    description: "Plan purchases around your budget and find a realistic date for each goal.",
    note: "Open the web app on iPhone",
    links: [
      { label: "Android beta", detail: "Google Play testing", href: "https://play.google.com/apps/testing/com.hsebli.app", qr: hsebliAndroidQr },
      { label: "Web app", detail: "Works in Safari", href: "https://hsebli.com/", qr: hsebliWebQr, web: true },
    ],
  },
  {
    name: "Scene Weather", category: "Atmospheric forecasts", theme: "weather", icon: weatherIcon,
    description: "See the forecast through illustrated scenes that change with the weather.",
    note: "Android only",
    links: [{ label: "Android beta", detail: "Google Play testing", href: "https://play.google.com/apps/testing/com.sceneweather.app", qr: weatherQr }],
  },
];

export default function MobileApps() {
  return (
    <Container as="section" id="mobile-apps" className="mobile-apps" aria-labelledby="mobile-apps-heading">
      <EndeavorsHeading id="mobile-apps-heading" lead="My" accent="Mobile Apps" eyebrow="Built for everyday life">
        Scan a QR code with your phone or tap a link to open the app.
      </EndeavorsHeading>
      <div className="mobile-apps-grid">
        {apps.map(({ name, category, theme, icon, description, note, links }) => (
          <article className={`mobile-app mobile-app--${theme}`} key={name}>
            <header className="mobile-app-header">
              <img src={icon} width="64" height="64" alt="" loading="lazy" decoding="async" />
              <div><span className="eyebrow">{category}</span><h3>{name}</h3></div>
            </header>
            <p className="mobile-app-description">{description}</p>
            <div className="mobile-app-links">
              {links.map(({ label, detail, href, qr, web }) => (
                <a key={href} className="mobile-app-link" href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={`Open ${name} — ${label} (${detail})`}>
                  <img src={qr} width="100" height="100" loading="lazy" decoding="async" alt="" />
                  <span className="mobile-app-link-label">
                    {web ? <AiOutlineGlobal aria-hidden="true" /> : <SiAndroid aria-hidden="true" />}
                    {label}
                    <AiOutlineArrowUp aria-hidden="true" />
                  </span>
                  <small>{detail}</small>
                </a>
              ))}
            </div>
            <p className="mobile-app-note">{note}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
