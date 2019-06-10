import * as APIWatchlistUtil from "../util/watchlist_api_util";

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';

const receiveWatchlist = watchlist => {
    return {
        type: RECEIVE_WATCHLIST,
        watchlist
    }
}

const receiveWatchlists = watchlists => {
    return {
        type: RECEIVE_WATCHLISTS,
        watchlists
    }
}

const deleteWatchlist = id => {
    return {
        type: DELETE_WATCHLIST,
        id
    }
}

export const createWatchlist = watchlist => dispatch => {
    APIWatchlistUtil.createWatchlist(watchlist)
        .then(resp => dispatch(receiveWatchlist(resp)))
}

export const removeWatchlist = id => dispatch => {
    APIWatchlistUtil.deleteWatchlist(id)
        .then(resp => dispatch(deleteWatchlist(resp.id)))
}

export const fetchAllWatchlists = () => dispatch => {
    APIWatchlistUtil.fetchAllWatchlists()
        .then(resp => dispatch(receiveWatchlists(resp)))
}