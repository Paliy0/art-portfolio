// src/utils/getNotionItems.js
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notionApiKey = process.env.NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: notionApiKey });

/**
 * Fetches data from the Notion database.
 * @returns {Promise<NotionData>}
 */
export async function fetchNotionData() {
  try {
    const response = await notion.databases.query({ database_id: notionDatabaseId });
    return response.results;
  } catch (error) {
    console.error('Error querying Notion database:', error);
    throw error;
  }
}
