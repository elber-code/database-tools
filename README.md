# Database Tools for Claude AI

[![smithery badge](https://smithery.ai/badge/@elber-code/database-tools)](https://smithery.ai/server/@elber-code/database-tools)

This is an MCP (Model Context Protocol) server that allows Claude AI to interact directly with MySQL databases.

## Features

- Query MySQL databases through Claude
- Execute any valid SQL query
- Get information about tables, including size and structure
- Formatted results for easy reading in Claude

## Installation

### Installing via Smithery

To install Database Tools for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@elber-code/database-tools):

```bash
npx -y @smithery/cli install @elber-code/database-tools --client claude
```

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
   "Execute query in MySQL to show me the databases."

2. **View tables in a database**  
   "Execute query in MySQL to show me the table `name_table`."

3. **Query the size of a table**  
   "Execute query in MySQL to show me the size of the table `name_table`."

4. **Execute custom queries**  
   "Execute query in MySQL: 'The description of what you want your query to do.'"

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
