import { config } from 'dotenv';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { executeMysqlQuery } from "./mysql.js";

config();

const server = new McpServer({
    name: "database-tools",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

server.tool("mysql", "Execute a query in MySQL", {
    query: z.string().describe("SQL query to execute"),
}, async ({ query }) => {
    try {
        return executeMysqlQuery(query, {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || ''
        });
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: "Error executing query: " + (error.message || "Unknown error"),
                },
            ],
        };
    }
});

/* server.tool("mysql-remote", "Execute a query on the remote MySQL database", {
    query: z.string().describe("SQL query to execute"),
}, async ({ query }) => {
    try {
        return executeMysqlQuery(query, {
            host: 'remote-host',
            user: 'remote-user',
            password: 'remote-password'
        });
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: "Error executing query: " + (error.message || "Unknown error"),
                },
            ],
        };
    }
}); */

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
