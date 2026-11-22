# CALLYROSE

CALLYROSE is a premium, mobile-first retail e-commerce website for bedroom comfort and home furnishings.

## Live website

The customer-facing static storefront is published with GitHub Pages at:
https://callyrose.github.io/Callyrose/

The source homepage is `app/page.tsx`. During the GitHub Actions build, Next.js exports the application into static website files, including `out/index.html`. GitHub Pages publishes the generated `out` folder; it must not publish this README as the website.

## Development

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add the Supabase project URL and anon key to `.env.local`.
5. Run `npm run dev`.

## Important implementation notes

- Product names, models, photographs, prices, sizes, warranties, branch details and availability must come from the verified CALLYROSE catalogue. Do not present demo data as real inventory.
- GitHub Pages is static hosting. Features requiring trusted server-side code—payment verification, order creation, staff pickup validation, QR redemption and administrative operations—cannot run on GitHub Pages alone and must be added through a suitable backend when those features are implemented.
- Supabase browser setup uses only the public anon key. Never expose a service-role key in frontend code.
- Branch stock and internal stock transfers must never be exposed as public inventory data.
