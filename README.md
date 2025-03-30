# Database Tools for Claude AI

This is an MCP (Model Context Protocol) server that allows Claude AI to interact directly with MySQL databases.

## Features

- Query local MySQL databases through Claude
- Execute any valid SQL query
- Get information about tables, including size and structure
- Formatted results for easy reading in Claude

## Installation

To install and use this tool, follow these steps:

1. **Clone or download the repository**
   ```
   git clone [repository-url]
   ```
   or download and extract the ZIP file.

2. **Install dependencies**
   Navigate to the project directory and run:
   ```
   npm install
   ```

## Configuration

For Claude to use this tool, you need to add the configuration to your `claude_desktop_config.json` file, which is typically located at:

```json
C:\Users\YOUR_USER\AppData\Roaming\Claude\claude_desktop_config.json
```

With the following structure:

```json
{
  "mcpServers": {
    // Other existing configurations...
    "database-tools": {
      "command": "node",
      "args": [
        "C:\\path\\to\\index.js"
      ]
    }
  }
}
```

## Usage

Once configured, you can interact with your MySQL databases from Claude with commands like:

1. **List all databases**
   "Show me all databases in my local MySQL"

2. **View tables in a database**
   "What tables are in the 'my_database' database?"

3. **Query the size of a table**
   "What is the size of the 'users' table in my database?"

4. **Execute custom queries**
   "Execute this SQL query: SELECT * FROM users WHERE active = 1"

## Security

This tool runs with the permissions configured in the `mysql.js` file. Make sure the credentials provided have only the necessary permissions for the operations you want to allow.

## Troubleshooting

If you have connection problems, check:
- That MySQL is running
- That the credentials in `mysql.js` are correct
- That the path in the Claude configuration file is correct

## Implementation

To query databases, simply ask Claude something like:
"Show me all databases in my MySQL" or "What is the size of the users table?"
