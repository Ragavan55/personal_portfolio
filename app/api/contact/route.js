import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { name, contact, description } = await request.json();

    // Path to the data.json file
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    // Read existing data
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContents);
    }

    // Add new entry with timestamp
    const newEntry = {
      id: Date.now(),
      name,
      contact,
      description,
      timestamp: new Date().toISOString(),
    };
    data.push(newEntry);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ message: 'Data saved successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving data:', error);
    return new Response(JSON.stringify({ message: 'Failed to save data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}