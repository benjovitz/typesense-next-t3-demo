export type hitProps = {
  hit: {
    title: string;
    authors: string[];
    publication_year: number;
    average_rating: number;
    image_url: string;
    ratings_count: number;
    id: string;
  };
};
// {
//     "document": {
//       "authors": [
//         "Jamie Delano",
//         " John Ridgway",
//         " Alfredo Alcalá"
//       ],
//       "average_rating": 4.1,
//       "id": "8612",
//       "image_url": "https://s.gr-assets.com/assets/nophoto/hit/111x148-bcc042a9c91a29c1d680899eff700a03.png",
//       "publication_year": 1988,
//       "ratings_count": 12881,
//       "title": "John Constantine, Hellblazer: Volume 1: Original Sins"
//     },
//     "highlight": {
//       "title": {
//         "matched_tokens": [
//           "John"
//         ],
//         "snippet": "<mark>John</mark> Constantine, Hellblazer: Volume 1: Original Sins"
//       }
//     },
//     "highlights": [
//       {
//         "field": "title",
//         "matched_tokens": [
//           "John"
//         ],
//         "snippet": "<mark>John</mark> Constantine, Hellblazer: Volume 1: Original Sins"
//       }
//     ],
//     "text_match": 578730123365187700,
//     "text_match_info": {
//       "best_field_score": "1108091338752",
//       "best_field_weight": 15,
//       "fields_matched": 1,
//       "num_tokens_dropped": 0,
//       "score": "578730123365187705",
//       "tokens_matched": 1,
//       "typo_prefix_score": 0
//     }

export function Book({ hit }: hitProps) {
  return (
    <div className="flex w-1/5 flex-col gap-4 rounded-lg bg-[hsl(280,100%,70%)] p-4">
      <img alt="hello" src={hit.image_url} width={150} height={250} />
      <h3 className="word-wrap">{hit.title}</h3>
      <p>{hit.authors.join(", ")}</p>
      <p>{hit.publication_year}</p>
      <p>{hit.average_rating}/5</p>
      <p>{hit.ratings_count}</p>
    </div>
  );
}
