// src/types.d.ts
interface NotionProperties {
    Order?: { number: number };
    Title?: { title: { plain_text: string }[] };
    image?: { rich_text: { href: string }[] };
    description?: { multi_select: { name: string }[] };
  }
  
  interface NotionPageItem {
    properties: NotionProperties;
  }
  
  type NotionData = NotionPageItem[];
  