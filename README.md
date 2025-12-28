<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1sPLW2qvC686cfTnsGP3J__FybgEcSgmn

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Meta Pixel y Conversions API

- Configura `VITE_META_PIXEL_ID` en `.env.local` (usa `.env.example` como guía) y vuelve a construir. El Pixel se inicializa en `App.tsx` y envía el `PageView` automáticamente.
- Los CTAs principales disparan eventos `Lead` o `InitiateCheckout` antes de navegar (revisa `components/Hero.tsx`, `components/PricingSection.tsx`, `components/FinalCTA.tsx` y `components/Header.tsx`).
- Para Conversions API, el token debe vivir solo en el servidor: usa `META_PIXEL_ID` y `META_CAPI_ACCESS_TOKEN` (opcional `META_TEST_EVENT_CODE`). Puedes probarlo con `node scripts/sendMetaConversion.js`.
- En producción crea un endpoint/función (Netlify/Vercel/Cloudflare) que reciba los datos de tu front y los reenvíe a `https://graph.facebook.com/v20.0/{PIXEL_ID}/events` tal como en `scripts/sendMetaConversion.js`. Nunca expongas el token en el navegador.
- Valida con el Test Event Code en el administrador de eventos de Meta antes de pasar a producción.
