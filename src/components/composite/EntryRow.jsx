import { EntryRowElement, EntryBody, EntryHeader } from "../../styled/components/composite/entryCard";

export const EntryRow = () => {
  return (
    <EntryRowElement>
        <EntryHeader>
            <p className="entry-author">Austin Powers</p>
            <span>|</span>
            <span className="entry-publication-date">2024-01-20</span>
        </EntryHeader>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <EntryBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid officia inventore est iusto delectus, perferendis ipsam ratione error facilis aliquam sed fuga expedita libero neque consectetur numquam, dolorum eveniet?
        </EntryBody>
    </EntryRowElement>
  );
};