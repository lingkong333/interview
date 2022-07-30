- state: vuex的基本数据，用来存储变量。
- getter: 从基本数据(state)派生的数据，相当于state的计算属性。
- mutation 提交更新数据的方法，必须是同步的(如果需要异步使用action)。
- action: 和mutation的功能大致相同，不同之处在于
        1. Action 提交的是 mutation，而不是直接变更状态。 
        2. Action 可以包含任意异步操作。
- modules: 模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,
         使得结构非常清晰，方便管理。
- store: 共享仓库。

**使用下面这两种方法存储数据：**
- dispatch：异步操作，写法： dispatch(‘mutations方法名’,值)
- commit：同步操作，写法：commit(‘mutations方法名’,值)