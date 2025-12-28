/**
 * Envia un evento de Meta Conversions API desde el servidor/CLI.
 * No incluyas nunca el token en código cliente.
 *
 * Uso:
 * META_PIXEL_ID=123456 META_CAPI_ACCESS_TOKEN=XXXX META_TEST_EVENT_CODE=TEST123 node scripts/sendMetaConversion.js
 */

const pixelId = process.env.META_PIXEL_ID;
const token = process.env.META_CAPI_ACCESS_TOKEN;
const testEventCode = process.env.META_TEST_EVENT_CODE;

if (!pixelId || !token) {
  console.error('Faltan las variables META_PIXEL_ID y/o META_CAPI_ACCESS_TOKEN.');
  process.exit(1);
}

const payload = {
  data: [
    {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: 'https://tu-dominio.com/',
      event_id: `lead-${Date.now()}`
    }
  ],
  ...(testEventCode ? { test_event_code: testEventCode } : {})
};

const url = `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${token}`;

(async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    console.log('Respuesta Meta:', json);
  } catch (error) {
    console.error('Error enviando evento a Conversions API', error);
    process.exit(1);
  }
})();
