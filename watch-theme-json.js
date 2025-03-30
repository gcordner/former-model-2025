const fs = require('fs');
const path = require('path');

const themeJsonPath = path.resolve(__dirname, 'theme.json');
const outputScssPath = path.resolve(__dirname, 'css/src/base/_theme-values.scss');

function regenerateScssFromThemeJson() {
    const themeJson = JSON.parse(fs.readFileSync(themeJsonPath, 'utf-8'));
    const layout = themeJson.settings?.layout || {};
    const contentWidth = layout.contentSize || '700px';
    const wideWidth = layout.wideSize || '1200px';

    const scssVars = `$content-width: ${contentWidth};
$wide-width: ${wideWidth};
`;

    fs.writeFileSync(outputScssPath, scssVars);
    console.log(`[theme.json → _theme-values.scss] Regenerated @ ${new Date().toLocaleTimeString()}`);
}

// Watch the file
fs.watch(themeJsonPath, (eventType) => {
    if (eventType === 'change') {
        try {
            regenerateScssFromThemeJson();
        } catch (err) {
            console.error('Error regenerating SCSS from theme.json:', err.message);
        }
    }
});
