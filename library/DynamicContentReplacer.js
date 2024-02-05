document.addEventListener('DOMContentLoaded', async () => {
    console.log('Document loaded. Initializing content replacement...');

    const csvUrl = 'https://raw.githubusercontent.com/morisy/quickrocks/main/library/nonsense.csv'; // Make sure this path is correct

    async function fetchAndParseCSV(url) {
        console.log(`Fetching CSV data from: ${url}`);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const csvText = await response.text();
            return new Promise((resolve, reject) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        console.log('CSV data fetched and parsed successfully:', results.data);
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

    async function replaceContent(csvData) {
        console.log('Starting content replacement...');
        if (!csvData || csvData.length === 0) {
            console.log('No data available for replacement.');
            return;
        }

        document.querySelectorAll('[data-csv-replace]').forEach(element => {
            const columnName = element.getAttribute('data-csv-replace');
            console.log(`Processing element for column: ${columnName}`);

            const replacementData = csvData.map(row => row[columnName]).filter(Boolean);
            if (replacementData.length > 0) {
                const randomIndex = Math.floor(Math.random() * replacementData.length);
                const contentToReplace = replacementData[randomIndex];

                console.log(`Replacing content for ${columnName}. New content: ${contentToReplace}`);
                if (element.tagName === 'IMG') {
                    element.src = contentToReplace;
                } else if (element.tagName === 'A') {
                    element.href = contentToReplace;
                } else {
                    element.textContent = contentToReplace;
                }
            } else {
                console.log(`No replacement data found for column: ${columnName}`);
            }
        });
    }

    try {
        const csvData = await fetchAndParseCSV(csvUrl);
        await replaceContent(csvData);
    } catch (error) {
        console.error('An error occurred during the content replacement process:', error);
    }
});
