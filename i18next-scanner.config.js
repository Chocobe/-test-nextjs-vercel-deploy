const fs = require('fs');
const path = require('path');
const typescript = require('typescript');

const languages = ['ko', 'en'];

module.exports = {
    input: [
        './**/*.{js,jsx,ts,tsx,html}',
        '!**/node_modules/**/*',
    ],
    options: {
        debug: false,
        ns: 'translation',
        sort: true,
        // removeUnusedKeys: true,
        defaultLng: 'ko',
        lngs: languages,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        resource: {
            loadPath: path.join(__dirname, '/i18n/locales/{{lng}}/{{ns}}.json'),
            savePath: path.join(__dirname, '/i18n/locales/{{lng}}/{{ns}}.json'),
            jsonIndent: 4,
        },
        defaultValue: '_N/A',
        keySeparator: false,
        nsSeparator: false,

        interpolation: {
            prefix: '{{',
            suffix: '}}',
        },
    },
    transform: (function(options = {
        extensions: [".ts", ".tsx"],
        tsOptions: {
            target: "es5",
            module: 'esnext',
        },
    }) {
        return function transform(file, enc, done) {
            'use strict';

            const { base, ext } = path.parse(file.path);

            if (options.extensions.includes(ext) 
                && !base.endsWith(".d.ts") 
                && base.indexOf("reportWebVitals.ts") === -1
            ) {
                const content = fs.readFileSync(file.path, enc);

                const { outputText } = typescript.transpileModule(content, {
                    compilerOptions: options.tsOptions,
                    fileName: path.basename(file.path),
                });

                this.parser.parseTransFromString(outputText);
                this.parser.parseFuncFromString(outputText);
            }

            done();
        };
    }()),
};
