const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2 ',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《23》',
        date: '2008-10',
        price: 19.00,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHead(index) {
      this.books.splice(index, 1)
    },
    testFunction() {
      //  编程范式：命令式编程/声明式编程
      //           面向对象编程(第一公民: 对象)
      //           函数式编程(第一公民：函数)

      //  高阶函数：filter/map/reduce
      //  过滤函数：filter(回调函数)，必须返回Boolean值；为true时，函数内部将n加入新数组，反之则被过滤掉
      const num = [1, 2, 3, 100]
      let newNums = num.filter(function (n) {
        return n < 2
      })
    //  map函数 每次返回的值作为新的值
      let new2Nums = newNums.map(function (n) {
        return n*2
      })
    //  reduce 对数组内容进行汇总，至少需要两个参数
      new2Nums.reduce(function (preValue, n) {
        return 100
      })
    //  preValue是上次的return值，n则是数组元素
    //  第一次preValue是0， n是1
    //  第二次preValue是100，n是2
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})