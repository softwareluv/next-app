export const SEARCHING_RECORDS = "SEARCHING_RECORDS";
export const SEARCHING_FAILED = "SEARCH_FAIL";
export const SEARCHING_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_RESET = "SEARCH_RESET";

export type Record = {
    trackId: number;
    wrapperType: string;
    kind: string;
    artistName: string;
    collectionName: string;
    trackName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    collectionPrice: number;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    releaseDate: Date;
    country: string;
    currency: string;
    primaryGenreName: string;
};

export interface SearchingRecord {
  type: typeof SEARCHING_RECORDS;
}

export interface SearchingFail {
  type: typeof SEARCHING_FAILED;
}

export interface SearchingSuccess {
  type: typeof SEARCHING_SUCCESS;
  payload: Record[];
}

export interface SearchCleared {
  type: typeof SEARCH_RESET;
}

export type SearchDispatchTypes = SearchingRecord | SearchingFail | SearchingSuccess | SearchCleared;
