
export const state = () => ({
    modals: {
        pledgeModal: false,
        thanksModal: false,
        menuModal: false
    },
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
    }
})
