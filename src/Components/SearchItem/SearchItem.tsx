import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Record } from '../../Redux/actions/SearchActionTypes';
import classes from './SearchItem.module.scss';

type Props = { record: Record };
const SearchItem: React.FunctionComponent<Props> = ({ record }) => {
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img
                    className={classes.cover}
                    src={record.artworkUrl100}
                    title={record.trackName}
                    alt={record.trackName}
                />
                <div className={classes.info}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        {record.trackName}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {record.collectionName}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {record.artistName}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}


export default SearchItem;