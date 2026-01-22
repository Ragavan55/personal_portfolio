// Next.js API route for contact form submissions
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { name, contact, description } = req.body;
  if (!name || !contact || !description) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const dataPath = path.join(process.cwd(), 'public', 'asserts', 'contact-messages.json');
  let messages = [];
  try {
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, 'utf-8');
      messages = JSON.parse(fileData);
    }
  } catch (e) {
    // ignore, treat as empty
  }
  messages.push({ name, contact, description, date: new Date().toISOString() });
  fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));
  return res.status(200).json({ message: 'Saved' });
}
