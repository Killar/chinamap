import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const visited = await kv.get('visited-spots');
    return new Response(JSON.stringify(visited || []), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Error reading from KV:', error);
    return new Response(JSON.stringify({ error: 'Failed to read data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const { visitedSpots } = await request.json();
    if (!Array.isArray(visitedSpots)) {
      return new Response(JSON.stringify({ error: 'Invalid data format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    await kv.set('visited-spots', visitedSpots);
    return new Response(JSON.stringify({ success: true, count: visitedSpots.length }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Error writing to KV:', error);
    return new Response(JSON.stringify({ error: 'Failed to save data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}