import { getSeventyCharanters } from "../../helpers/getSeventyCharacters";
import { EntryRowElement, EntryBody, EntryHeader } from "../../styled/components/composite/entryCard";

export const EntryRow = ({ data={} }) => {
  const formattedPublicationDate = data.publication_date && new Date(data.publication_date).toLocaleDateString();
  return (
    <EntryRowElement>
        <EntryHeader>
            <p className="entry-author">{data.author}</p>
            <span>|</span>
            <span className="entry-publication-date">{formattedPublicationDate}</span>
        </EntryHeader>
        <h2>{data.title}</h2>
        <EntryBody>
          {getSeventyCharanters(data.content)}
        </EntryBody>
    </EntryRowElement>
  );
};