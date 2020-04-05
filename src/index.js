import server from './server'

(async () => {
    try {
        await server.start({port: process.env.PORT || 5000}, ({port}) => {
            console.log(`Server on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
})()