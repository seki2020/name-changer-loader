const sleep = num => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, num)
})


// 异步 loader
module.exports = function (content) {
    const callback = this.async()
        ; (async () => {
            await sleep(3000)
            const newContent = content.replace(/ximing/i, 'ximing.com')
            callback(null, newContent)
        })()
}