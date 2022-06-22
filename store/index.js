
export const state = () => ({
    modals: {
        pledgeModal: false,
        thanksModal: false,
        menuModal: false
    }
})

export const actions = ({
    changeModalState({ commit }, data) {
        commit('updateModalState', {modal: data.modalName, state: data.newState})
    }
})

export const mutations = ({
    updateModalState: (state, data) => {
        state.modals[data.modal] = data.state;
    }
})
