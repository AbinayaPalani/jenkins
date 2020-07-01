module.exports = {
    launch: {
        headless: process.env.HEADLESS == 'false',
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: false,
        defaultViewport: null,
        args: ['--start-maximized']
    }
}