module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://staging.access.answerconnect.com"
    },
    testMatch: [
        "**/tests/**/main.test.js"
    ],
    verbose: true,
    reporters: ["default", "jest-puppeteer-allure"]
}