const fs = require('fs')
const { promisify } = require('util')

const readdirAsync = promisify(fs.readdir)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

concatAllCucumberReports()

async function concatAllCucumberReports() {
    const CUCUMBER_REPORT_PATH = './cypress/cucumber-json'
    const CUCUMBER_FINAL_REPORT_PATH = `../ci/Report.json`

    const filenames = await readdirAsync(CUCUMBER_REPORT_PATH)

    let featuresReport = []

    for (const filename of filenames){
        const content = await readCucumberReport(`${CUCUMBER_REPORT_PATH}/${filename}`)

        featureReport = [ ...featuresReport, ...content]
    }

    console.log(`Writing file: ${CUCUMBER_FINAL_REPORT_PATH}`)
    await writeFileAsync(CUCUMBER_FINAL_REPORT_PATH, JSON.stringify(featuresReport, null, 4))
}

async function readCucumberReport(filename){
    try{
        console.log(`Reading file: ${filename}`)
        const content = await readFileAsync(filename, 'utf-8')
        return JSON.parse(content)
    }
    catch(error){
        console.error(error)
        return []
    }
}