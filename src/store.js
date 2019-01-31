import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//共享状态
const state = {
	count: 0
}
//共享计算属性
const getters = {
	evenOrOdd: function(state) {
		return state.count%2===1 ? '奇数':'偶数'
	}
}
//处理行为
const actions = {
	increment: function({commit}) {
		commit('INCREMENT')
	},
	decrement: function({commit}) {
		commit('DECREMENT')
	},
	incrementIfOdd: function({commit,state}) {
		if(state.count%2==1) {
			commit('INCREMENT')
		}
	},
	incrementAsync: function({commit}) {
		setTimeout(() => {
			commit('INCREMENT')
		},1000)
	}
}
//更新state
const mutations = {
	//加1
	INCREMENT: function(state) {
		state.count++
	},
	//减1
	DECREMENT: function(state) {
		state.count--
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})