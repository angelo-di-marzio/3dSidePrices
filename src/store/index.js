import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    modules: {
        prices: {
            namespaced: true,
            state: () => ({
                tickers: [],
                selectedTicker: {}
            }), 
            getters: {
                getTickers(state) {
                    return state.tickers
                },
                getSelectedTicker(state) {
                    return state.selectedTicker
                }
            },
            actions: {
                async retrieveAllTickers({commit, getters}) {
                    const url = "https://api.coingecko.com/api/v3/exchanges/uniswap/tickers"
                    axios.get(url)
                    .then(function(response) {
                        commit("setTickers", response.data.tickers.map(coin => ({ 
                            ...coin, id: coin.coin_id + coin.target_coin_id + coin.timestamp + coin.volume 
                        })))
                    })
                    .catch(function(error) {
                        console.log(error)
                    }) 
                },

            },
            mutations: {
                setTickers(state, tickers) {
                    state.tickers = tickers
                },
                setSelectedTicker(state, ticker) {
                    state.selectedTicker = ticker
                }
            },
            // nested modules for search and paginate
            modules: {
                search: {
                    namespaced: true,
                    state: () => ({
                        searchInput: ""
                    }),
                    getters: {
                        getSearchInput (state) {
                            return state.searchInput
                        } 
                    },
                    mutations: {
                        setSearchInput(state, value) {
                            state.searchInput = value
                        }
                    }
                },
                paginate: {
                    namespaced: true,
                    state: () => ({
                        totalPages: 0,
                        currentPage: 1,
                    }),
                    getters: {
                        getPaginatedTickers: (state, getters, rootState) => (perPageItems = 20) => {
                            let page = getters.getCurrentPage
                            let end = perPageItems * page
                            let start = 1
                            if (page == 1) {
                                start = 1
                            } else {
                                start = end - perPageItems -1
                            }
                            state.totalPages = parseInt(rootState.prices.tickers.length/perPageItems)
                            return rootState.prices.tickers.slice(start, end);
                        },
                        getCurrentPage(state) {
                            return state.currentPage
                        },
                        getTotalPages(state) {
                            return state.totalPages
                        }
                    },
                    mutations: {
                        setCurrentPage (state, currentPage) {
                            state.currentPage = currentPage
                        }
                    }

                }
            }
        }
    }
})