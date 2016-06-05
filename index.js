module.exports.install = function(Vue) {
	Vue.merge = function(oldData, newData, vm) {
		var merge = Vue.config.optionMergeStrategies.data,
			oldDataFn = typeof oldData == "function" ? oldData : function(d) {return oldData}
			newDataFn = typeof newData == "function" ? newData : function(d) {return newData}
		return merge(oldDataFn, newDataFn, vm)() 
	}
	Vue.prototype.$merge = function(newData) {
		this.$data = Vue.merge(this.$data, newData, this)
	};
}