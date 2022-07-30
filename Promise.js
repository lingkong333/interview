/* 
Promise有三种状态Pending(等待),Fulfilled(执行),Rejected(拒绝)
状态只能由 Pending 变为 Fulfilled 或由 Pending 变为 Rejected。且状态改变之后不会在发生变化，会一直保持这个状态。
 */

class MyPromise {
    constructor(executor) {
        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve, this.reject)
    }

    initValue() {
        this.PromiseResult = null
        this.PromiseState = 'pending'
    }

    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value) {
        // 状态只允许改变一次 PromiseState修改一次后不允许再次修改
        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'fulfilled'
        this.PromiseResult = value
    }
    
    reject(value) {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = value
    }

    // then有两个回调
    then(onFulfilled, onRejected) {
        if (this.PromiseState === 'fulfilled') {
            onFulfilled(this.PromiseResult)
        } else if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        }
    }
}

const p1 = new MyPromise((resolve, reject) => {
    resolve('成功')
}).then(res => {
    console.log('thenRES =>', res)
})
console.log(p1) // 成功

