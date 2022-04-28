export const state = () => ({
    // header: {
    //     style: 'default',
    //     hidden: false,
    // },

    // footer: {
    //     style: 'default',
    //     hidden: false,
    // },

    win: { 
        w: 0, 
        h: 0,
        layout: '' 
    },
})

export const mutations = {
    setWin(state, win) {
        state.win = win
    },

    // setHeaderHidden(state, hidden) {
    //     state.header.hidden = hidden
    // },

    // setHeaderStyle(state, style) {
    //     state.header.style = style
    // },

    // setFooterHidden(state, hidden) {
    //     state.footer.hidden = hidden
    // },

    // setFooterStyle(state, style) {
    //     state.footer.style = style
    // },
}