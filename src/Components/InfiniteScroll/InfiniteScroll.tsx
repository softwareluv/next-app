import React from 'react';
import { Waypoint } from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IInfiniteScroll {
    children: React.ReactElement;
    callBack(args: Waypoint.CallbackArgs): void
    isLoading: boolean
}
export const InfiniteScroll: React.FunctionComponent<IInfiniteScroll> = ({ children, callBack, isLoading }) => {
    return <>
        {children}
        <Waypoint bottomOffset="-25px" onEnter={callBack}>
            {isLoading && (
                <div style={{ paddingBottom: '15px', justifyContent: 'center' }}>
                    <CircularProgress disableShrink />
                </div>
            )}
        </Waypoint>
    </>
}