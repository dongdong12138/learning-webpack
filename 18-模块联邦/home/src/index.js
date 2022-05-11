import HomeList from './HomeList'

// 要通过异步的方式导入，因为网络共享或者模块载入是有延迟的
import('nav/Header').then((Header) => {
    const body = document.createElement('div')
    body.appendChild(Header.default())
    document.body.appendChild(body)
    document.body.innerHTML += HomeList(5)
})
