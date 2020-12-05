import React from 'react';

import { useDispatch } from 'react-redux';
import { ClearSearch, SearchiTunes } from './../../Redux/actions/SearchActions';
import { Button, TextField } from '@material-ui/core';
import styles from './SearchForm.module.scss';
import SearchIcon from '@material-ui/icons/Search';

type Props = { term: string, prevTerm: string, offset: number, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, setPreviousTerm: (value: string) => void, setOffsetCount: (value: number) => void };
const SearchForm: React.FunctionComponent<Props> = ({ term, prevTerm, offset, handleChange, setPreviousTerm, setOffsetCount }) => {
    const dispatch = useDispatch();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value);

    const handleSearch = () => {
        dispatch(ClearSearch());
        setPreviousTerm(term);
        dispatch(SearchiTunes(term, 10, 0));
        setOffsetCount(10);
    }
    return (
        <div className={styles.container}>
            <TextField id="outlined-basic"
                label="Keyword"
                variant="outlined"
                onChange={handleChange} type="text" size="small"
                className={styles.searchBox} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                onClick={handleSearch}>Search</Button>
        </div >
    );
}

export default SearchForm;