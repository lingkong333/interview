<!-- 生命周期 -->
setup ->在create之前，替代了2.0当中的beforecreate,created
onBeforeMount
onMounted ->一般当组件挂载完毕，请求接口放在当中
onBeforeUpdate
onUpdated
onBeforeUnmount
unmounted

mounted() {} 选项api(options API)   onMounted(() => {}) 组合api(Composition API)
<!--  -->

## setup
在初始化属性之后被调用
setup是程序入口，组件中使用组合式 API 的入口
在 setup() 函数中返回的对象会暴露给模板
例如watch, onMounted, computed 等钩子函数都在setup函数内部使用

setup(props， context)
props 是被代理的,其为父组件传来的值
context 其为对象，抛出的属性有{ context.attrs, context.slots, context.emit }
attrs, slots都是代理后的相对应的值，都是对应最新的值

## reactive
返回一个对象的响应式代理, 深度代理
使用方法 const obj = reactive({ count: 0 })

##  readonly
只读， 深度代理
使用方法
const obj = reactive({ count: 0 }) 
const newObj = readonly({obj})

## ref
接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的 property .value。
ref 对象是可更改的，也就是说你可以为 .value 赋予新的值。它也是响应式的，即所有对 .value 的操作都将被追踪，
如果是对象将通过reactive转为具有深层次响应式的对象
例子
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1

## computed
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0

## watchEffect
立即运行一个函数，同时响应式地追踪其数据，并在数据更改时重新执行，watchEffect会在beforeUpdate之前执行
const stop = watchEffect((onInvalidate)=>{
  console.log(count.value)

  <!-- onInvalidate 在watchEffect每次重新执行前执行，组件加载首次不执行，在stop之前也会执行 -->
  onInvalidate(() => {
    console.log('onInvalidate')
  })
}，
<!-- 添加此对象后， watchEffect会在beforeUpdate之后执行-->
{
  flush: 'post'
})

stop() // 执行该函数会停止监听

## watch
侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
watch(() => {
  return count.value
},() => {

})

## toRef
可用于为响应式对象上的 property 创建 ref。这样创建的 ref 与其源 property 保持同步：改变源 property 将更新 ref，反之亦然。
## toRefs
将一个响应式对象转换为一个普通对象，这个普通对象的每个 property 都是指向源对象相应 property 的 ref。每个单独的 ref 都是使用 toRef() 创建的。
## isRef
判断一个值是不是ref值
isRef(count)

<!-- 依赖注入 -->
父组件可以作为依赖的提供方(provide)，子组件可以作为依赖的使用方(Inject)(注：不管子组件还是孙子组件都可使用)
选项api VUE2.0
在父组件中,无需:data绑定数据
<Father/>
name: 'Father',
provide() {
  return {
    name: this.name
  }
},
data() {
  return{
    name: '张三'
  }
}
在子组件中,无需props
<Child/>
name: 'Child'，
inject: ['name'] 

组合api VUE3.0
在父组件中
<Father/>
import {provide} from 'vue'
setup() {
  const data = reactive{{
    name: '张三'
  }}
  const changeName = () {
    data.name = '李四'
  }
  provide('name', name)
  <!-- 给子组件提供方法，让子组件更改数据 -->
  provide('changeName'，changeName)
}
在子组件中
<Child/>
<button @click="changeName">更改数据</button>
import {inject} from 'vue'
setup() {
  const name = inject('name', '默认值'),
  <!-- const name1 = inject('name2', '如果父组件未提供，则是默认值') -->
  const changeName = inject('changeName')
  return {
    name,
    changeName
  }
}