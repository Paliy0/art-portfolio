import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_1W3BBdh1ghvp9HclJZWXBz1cBNhj37ZIjb7AC3Paifa' });

export async function fetchNotionData() {
  const databaseId = 'eec8f4dfd43d4700a6b6b3fd61fc05cf';

  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
  } catch (error) {
    console.error('Error querying Notion database:', error);
    throw error;
  }
}
