import React, { } from 'react';
import { Record } from '../../Redux/actions/SearchActionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Redux/store';
import SearchItem from '../SearchItem/SearchItem';
import { ClearSearch, SearchiTunes } from '../../Redux/actions/SearchActions';
import { InfiniteScroll } from './../InfiniteScroll/InfiniteScroll';

type Props = { term: string, prevTerm: string, offset: number, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, setPreviousTerm: (value: string) => void, setOffsetCount: (value: number) => void };
const SearchResults: React.FunctionComponent<Props> = ({ term, prevTerm, offset, setPreviousTerm, setOffsetCount }) => {
    const dispatch = useDispatch();
    const { records, loading } = useSelector((state: RootStore) => state.search);

    const handleSearch = () => {
        if (term !== prevTerm) {
            dispatch(ClearSearch());
            setPreviousTerm(term);
        }
        // console.log(term, offset);
        dispatch(SearchiTunes(term, 10, offset));
        setOffsetCount(offset + 10);
    }

    return (
        <div>
            <InfiniteScroll callBack={handleSearch} isLoading={loading}>
                <div>
                    {
                        records.map((item: Record, index: number) => {
                            return <section key={index} style={{ marginTop: 10 }}>
                                <SearchItem record={item} />
                            </section>
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default SearchResults;