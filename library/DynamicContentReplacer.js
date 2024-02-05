// DynamicContentReplacer.js
document.addEventListener('DOMContentLoaded', async () => {
    const csvUrl = 'path_to_your_csv_file.csv'; // Update with the actual CSV file path

    async function fetchAndParseCSV(url) {
        try {
            const response = await fetch(url);
            const csvText = await response.text();
            return new Promise((resolve, reject) => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
                        console.log('CSV data fetched and parsed successfully.');
                        resolve(results.data);
                    },
                    error: (error) => {
                        console.error('Error parsing CSV:', error);
                        reject(error);
                    }
                });
            });
        } catch (error) {
            console.error('Error fetching CSV:', error);
        }
    }

    function replaceContent(csvData) {
        document.querySelectorAll('[data-csv-replace]').forEach(element => {
            const columnName = element.getAttribute('data-csv-replace');
            const replacementData = csvData.map(row => row[columnName]).filter(Boolean);
            if (replacementData.length > 0) {
                const randomIndex = Math.floor(Math.random() * replacementData.length);
                const contentToReplace = replacementData[randomIndex];
                if (element.tagName === 'IMG') {
                    element.src = contentToReplace;
                    console.log(`Image source replaced with ${contentToReplace}`);
                } else if (element.tagName === 'A') {
                    element.href = contentToReplace;
                    console.log(`Link href replaced with ${contentToReplace}`);
                } else {
                    element.textContent = contentToReplace;
                    console.log(`Text content replaced with ${contentToReplace}`);
                }
            }
        });
    }

    const csvData = await fetchAndParseCSV(csvUrl);
    if (csvData) {
        replaceContent(csvData);
    }
});
