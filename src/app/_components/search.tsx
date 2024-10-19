"use client";
import type { SearchClient } from "typesense";
import {
  ClearRefinements,
  getServerState,
  HierarchicalMenu,
  Hits,
  HitsPerPage,
  InstantSearch,
  InstantSearchSSRProvider,
  Pagination,
  RangeInput,
  RefinementList,
  SearchBox,
  SortBy,
  Stats,
  ToggleRefinement,
} from "react-instantsearch";
import { assembleTypesenseServerConfig } from "../lib/utils";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import Hit from "./hit";
import { Book } from "./book";

export default function Search() {
  const TYPESENSE_SERVER_CONFIG = assembleTypesenseServerConfig();
  const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
    server: TYPESENSE_SERVER_CONFIG,
    additionalSearchParameters: {
      query_by: "title, authors",
      query_by_weights: "2,1",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const searchClient = typesenseInstantsearchAdapter.searchClient;

  return (
    <div>
      <InstantSearch indexName="books" searchClient={searchClient}>
        <SearchBox className="text-black" />
        {
          /* <h5>Browse by Categories</h5>
              <HierarchicalMenu
                className="mt-3"
                attributes={[
                  'categories.lvl0',
                  'categories.lvl1',
                  'categories.lvl2',
                  'categories.lvl3',
                ]}
                showParentLevel={true}
                rootPath={"Cell Phones"}
                limit={50}
              /> */
        }

        {
          /* <h5 className="mt-5">Filter by Brands</h5>
              <RefinementList
                className="mt-3"
                attribute="brand"
                limit={10}
                showMore={true}
                showMoreLimit={50}
                searchable={true}
                transformItems={items =>
                  items.sort((a, b) => a.label > b.label ? 1 : -1)
                }
              /> */
        }

        {
          /* <ToggleRefinement
                className="mt-5"
                attribute="free_shipping"
                label="Free Shipping"
              /> */
        }

        {/* <ClearRefinements className="mt-5"/> */}

        {
          /* <Stats translations={{
                        stats(nbHits, processingTimeMS) {
                          let hitCountPhrase
                          if (nbHits === 0) {
                            hitCountPhrase = 'No products'
                          } else if (nbHits === 1) {
                            hitCountPhrase = '1 product'
                           } else {
                            hitCountPhrase = `${nbHits.toLocaleString()} products`
                          }
                          return `${hitCountPhrase} found in ${processingTimeMS.toLocaleString()}ms`;
                        },
                      }}/> */
        }
        <div className="flex flex-wrap">
        <HitsPerPage
          className="ms-4 text-black"
          items={[
            { label: "9 per page", value: 9, default: true },
            { label: "18 per page", value: 18 },
          ]}
        />
        </div>
        {
          /* <SortBy
                        items={[
                          {label: 'Relevancy', value: 'products'},
                          {label: 'Price (asc)', value: 'products/sort/price:asc'},
                          {label: 'Price (desc)', value: 'products/sort/price:desc'},
                        ]}
                      /> */
        }

        <Hits hitComponent={Book} />

        <Pagination />
      </InstantSearch>
    </div>
  );
}
