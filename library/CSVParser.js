class CSVParser {
    constructor(csvUrl) {
        this.csvUrl = csvUrl;
    }

    async fetchCSV() {
        try {
            const response = await fetch(this.csvUrl);
            const data = await response.text();
            console.log('CSV data fetched successfully.');
            return Papa.parse(data, { header: true }).data;
        } catch (error) {
            console.error('Error fetching CSV:', error);
        }
    }
}
