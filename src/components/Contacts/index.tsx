import "./style.css";
import { Icon } from "@iconify/react";
import { contacts } from "../../data";

export function Contacts() {
  return (
    <div id="contacts">
      <h2>Contacts</h2>
      <div className="vertical-pipe"></div>
      <section className="social-medias">
        {contacts.map((contact) => (
          <a href={contact.url} target="_blank">
            <Icon icon={`mdi:${contact.social_media}`} width="64" height="64" />
          </a>
        ))}
      </section>
    </div>
  );
}
