import type { VercelRequest, VercelResponse } from '@vercel/node';

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    res.status(500).json({ ok: false, error: 'Missing META_PIXEL_ID or META_CAPI_ACCESS_TOKEN' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const {
      event_name,
      event_id,
      event_source_url,
      user_data,
      custom_data,
    } = body ?? {};

    if (!event_name || !event_id) {
      res.status(400).json({ ok: false, error: 'Missing event_name or event_id' });
      return;
    }

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          event_source_url,
          action_source: 'website',
          user_data: {
            client_user_agent: req.headers['user-agent'],
            ...(user_data ?? {}),
          },
          custom_data: custom_data ?? {},
        },
      ],
      ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
    };

    const response = await fetch(`https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    res.status(response.ok ? 200 : 500).json({ ok: response.ok, result });
  } catch (error) {
    res.status(500).json({ ok: false, error: (error as Error).message });
  }
}
