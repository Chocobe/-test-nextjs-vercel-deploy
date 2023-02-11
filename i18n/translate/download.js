const fs = require('fs');
const mkdirp = require('mkdirp');
const {
    loadSpreadsheet,
    localesPath,
    ns,
    lngs,
    sheetId,
    columnKeyToHeader,
    NOT_AVAILABLE_CELL
} = require('./index');

/**
 * fetch translations from google spread sheet and transform to json
 * @param {GoogleSpreadsheet} doc GoogleSpreadsheet document
 * @returns [object] translation map
 * {
 *   "ko": { "key": "value" },
 *   "en": { "key": "value" },
 * }
 */
async function fetchTranslationsFromSheetToJson(doc) {
    const sheet = doc.sheetsById[sheetId];

    if (!sheet) {
        return {};
    }

    const lngsMap = {};
    const rows = await sheet.getRows();

    rows.forEach((row) => {
        const key = row[columnKeyToHeader.key];
        lngs.forEach((lng) => {
            const translation = row[columnKeyToHeader[lng]];
            if (!lngsMap[lng]) {
                lngsMap[lng] = {};
            }

            // prevent to remove undefined value like ({"key": undefined})
            lngsMap[lng][key] = translation || '';
        });
    });

    return lngsMap;
}

function checkAndMakeLocaleDir(dirPath, subDirs) {
    return new Promise((resolve) => {
        subDirs.forEach((subDir, index) => {
            mkdirp(`${dirPath}/${subDir}`).then((err) => {
                if (err) {
                    throw err;
                }

                if (index === subDirs.length - 1) {
                    resolve();
                }
            });
        });
    });
}

async function updateJsonFromSheet() {
    await checkAndMakeLocaleDir(localesPath, lngs);

    const doc = await loadSpreadsheet();
    const lngsMap = await fetchTranslationsFromSheetToJson(doc);

    fs.readdir(localesPath, (error, lngs) => {
        if (error) {
            throw error;
        }

        lngs.forEach((lng) => {
            const localeJsonFilePath = `${localesPath}/${lng}/${ns}.json`;
            const jsonString = JSON.stringify(lngsMap[lng], null, 4);

            fs.writeFile(localeJsonFilePath, jsonString, 'utf8', (err) => {
                if (err) {
                    throw err;
                }
            });
        });
    });
}

updateJsonFromSheet();