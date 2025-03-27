import mysql from 'mysql2/promise';


export const executeMysqlQuery = async (query, config) => {

    const connection = await mysql.createConnection(config);

    const [results] = await connection.execute(query);

    await connection.end();

    let resultText;

    if (Array.isArray(results)) {
        if (results.length === 0) {
            resultText = "The query returned no results.";
        }
        else {
            resultText = `Results (${results.length} rows):\n\n${JSON.stringify(results, null, 2)}`;
        }
    }
    else {
        resultText = `Result: ${JSON.stringify(results, null, 2)}`;
    }

    return {
        content: [
            {
                type: "text",
                text: resultText,
            },
        ],
    };
};