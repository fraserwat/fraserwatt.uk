
export const state = () => ({
    modals: {
        pledgeModal: false,
        thanksModal: false,
        menuModal: false
    },
    posts: [],
    hamburger: undefined,
    activeOverlay: undefined,
    activeModal: undefined
})

export const actions = ({
    changeModalState({ commit }, data) {
        commit('updateModalState', {modal: data.modalName, state: data.newState})
    },
    saveHamburgerState({ commit }, data) {
        commit('setHamburgerState', data)
    },
    saveActiveOverlay({ commit }, data) {
        commit('setActiveOverlay', data)
    },
    saveActiveModal({ commit }, data) {
        commit('setActiveModal', data)
    },
    async getArticleData({ state, dispatch, commit }) {
        if (state.posts.length > 0) return;
        // axios wordpress call
        let posts = await this.$axios.$get(`${this.$axios.defaults.baseURL}/wp-json/wp/v2/posts?page=1&per_page=100&_embed=1`);
        // get rid of uneccessary stuff 
        posts = posts.map( (post) => {
            return {
                title: post.title.rendered,
                subhead: post.exerpt,
                content: post.content.rendered,
                slug: post.slug,
                createdAt: post.date_gmt,
                external: false
            }
        });
        commit('appendArticleContent', posts)

        // After for loop, add Tribune and Jacobin articles
        dispatch('externalArticleContent')
    },
    externalArticleContent({ commit }) {
        const articles = [
            {
                title: "When the President Is a Crypto Bro",
                subhead: "El Salvador became the first country in the world to adopt cryptocurrency as legal tender, pledging to build a ‘Bitcoin City’ on a volcano – but the recent crash has exposed the consequences of hitching a country’s economy to crypto delusions.",
                content: undefined,
                slug: "https://tribunemag.co.uk/2022/05/el-salvador-crypto-bitcoin",
                createdAt: new Date('30 May 2022'),
                external: "Tribune Magazine"
            },
            {
                title: "Crypto Can't Build a Better Internet",
                subhead: "For all its utopian trappings, web3 tech like cryptocurrency only deepens the problem of elite control over the internet. We have an alternative.",
                content: undefined,
                slug: "https://jacobin.com/2022/06/crypto-cant-build-a-better-internet",
                createdAt: new Date('6 June 2022'),
                external: "Jacobin"
            },
        ]
        commit('appendArticleContent', articles)
    }
})

export const mutations = ({
    updateModalState: (state, data) => {
        state.modals[data.modal] = data.state;
    },
    setHamburgerState: (state, data) => {
        state.hamburger = data;
    },
    setActiveOverlay: (state, data) => {
        state.activeOverlay = data;
    },
    setActiveModal: (state, data) => {
        state.activeModal = data;
    },
    appendArticleContent: (state, data) => {
        state.posts.push(...data);
    }
})

export const getters = {
    sortedPosts: (state) => {
        return state.posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
};
  