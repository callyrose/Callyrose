# CALLYROSE

CALLYROSE is a premium, mobile-first retail e-commerce website for bedroom comfort and home furnishings.

## Project status

The repository has been connected successfully. The initial application scaffold and customer-facing storefront are being added next. Product names, prices, images, sizes, warranties, branch details, and stock availability must come from the CALLYROSE catalogue and operations team; demo data must not be presented as real inventory.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add the Supabase project URL and anon key to `.env.local`.
5. Run `npm run dev` and open the local development URL.

## Important implementation notes

- The homepage and initial customer routes are a storefront foundation, not a finished checkout system.
- The shop intentionally does not display fabricated products, prices, warranty claims, or stock.
- Supabase browser setup uses only the public anon key. Never expose a service-role key in frontend code.
- Payment verification, order creation, staff pickup validation, QR redemption, and administrative operations must be implemented server-side before production.
- Branch stock and internal stock transfers must never be exposed as public inventory data.
