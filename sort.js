// 冒泡排序
const bubbleArr = [234, 776, 8979, 32, 76, 32454, 876];

/**
 *我们先来实现找数组中的最大数，并把他放到数组最后
 *这样重复 arr.length - 1 次，便可以实现数组按从小到大的顺序排好了
  时间复杂度： 平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)
  空间复杂度： O(1)
 * @param {*} arr
 */
const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};
// console.log(bubbleSort(bubbleArr));
// console.log("�");

// 济南高新区  轻骑兵  6-7K  试用期3月80%  年薪一个月标准  公积金4210标准双方各4%  6个月后700元租房补贴  政府发放补贴23年  公司每季度200元
// 快速排序

/**
 *1．先从数列中取出一个数作为基准数。
  2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
  3．再对左右区间重复第二步，直到各区间只有一个数。
 * @param {*} arr
 */
// 快排
const quickSort = (arr) => {
  /* let datumValue = arr[0]
  const leftChildArr = []
  const rightChildArr = []
  // arr.forEach(item => {
  //   if(item >= datumValue) {
  //     rightChildArr.push(item)
  //   } else {
  //     leftChildArr.push(item)
  //   }
  // });
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= datumValue) {
          rightChildArr.push(arr[i])
        } else {
          leftChildArr.push(arr[i])
        }
    
  }
  return quickSort(leftChildArr).concat(quickSort(rightChildArr)) */
  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};
console.log(quickSort(bubbleArr));
