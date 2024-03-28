import { useEffect } from 'react';
import data from '../../public/data/db.json';

function useIndexAction(index) {
    useEffect(() => {
        console.log(`Index ${index} was provided.`);
        const fs = require('fs');

        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const jsonData = JSON.parse(data);

            jsonData.navbar.title = "Modified Title";

            const updatedData = JSON.stringify(jsonData, null, 2);

            fs.writeFile(data, updatedData, 'utf8', err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Data updated successfully');
            });
        });

    }, [index]);
}

export default useIndexAction;
