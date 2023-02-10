const {GoogleSpreadsheet} = require('google-spreadsheet');
const ENV = require('./.credentials/index.js');
const creds = require('./.credentials/' + ENV.CREDS);
const i18nextConfig = require('../../i18next-scanner.config');

const spreadsheetDocId = ENV.SHEET_DOC_ID;
const ns = 'translation';
const lngs = i18nextConfig.options.lngs;
const loadPath = i18nextConfig.options.resource.loadPath;
const localesPath = loadPath.replace('/{{lng}}/{{ns}}.json', '');
const rePluralPostfix = new RegExp(/_plural|_[\d]/g);
const sheetId = ENV.SHEET_ID;

const NOT_AVAILABLE_CELL = '_N/A';
const columnKeyToHeader = {
    'key': '키',
    'ko': '한글',
    'en': '영어',
};

/**
 * getting started from https://theoephraim.github.io/node-google-spreadsheet
 */
async function loadSpreadsheet() {
    console.info(
        '\u001B[32m',
        '=====================================================================================================================\n',
        '# i18next auto-sync using Spreadsheet\n\n',
        '  * Download translation resources from Spreadsheet and make /src/i18n/locales/{{lng}}/{{ns}}.json\n',
        '  * Upload translation resources to Spreadsheet.\n\n',
        `The Spreadsheet for translation is here (\u001B[34mhttps://docs.google.com/spreadsheets/d/${spreadsheetDocId}/#gid=${sheetId}\u001B[0m)\n`,
        '=====================================================================================================================',
        '\u001B[0m'
    );

    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(spreadsheetDocId);

    // load directly from json file if not in secure environment
    await doc.useServiceAccountAuth(creds);
    
    // await doc.loadInfo(); // loads document properties and worksheets
    try {
        await doc.loadInfo(); // loads document properties and worksheets

    } catch(e) {
        console.log(e.message);
        return;
    }

    return doc;
}

function getPureKey(key = '') {
    return key.replace(rePluralPostfix, '');
}

module.exports = {
    localesPath,
    loadSpreadsheet,
    getPureKey,
    ns,
    lngs,
    sheetId,
    columnKeyToHeader,
    NOT_AVAILABLE_CELL,
};
