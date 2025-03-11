import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

const storeMasterData = new Map();

const csvFilePath = path.resolve('data', 'StoreMasterAssignment.csv');

const loadStoreMaster = async () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on('data', (row) => {
                storeMasterData.set(row.store_id, {
                    store_name: row.store_name,
                    area_code: row.area_code
                });
            })
            .on('end', () => {
                console.log('Store master data loaded successfully');
                resolve();
            })
            .on('error', (error) => {
                console.error("Error reading CSV file:", error.message);
                reject(error);
            });
    });
};

export { storeMasterData, loadStoreMaster };