
import { db } from '@/lib/firebaseAdmin';

export async function POST(request) {
  try {
    const { name, contact, description } = await request.json();

    await db.collection('contact').add({
      name,
      contact,
      description,
      timestamp: new Date().toISOString(),
    });

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