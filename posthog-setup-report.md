<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the ZEvent Next.js App Router application. The following changes were made:

- **`instrumentation-client.ts`** (new) — Initializes PostHog client-side using the `instrumentation-client` pattern for Next.js 15.3+. Configured with a reverse proxy (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`** — Added reverse proxy rewrites routing `/ingest/*` traffic through the app to the EU PostHog ingestion endpoint (`eu.i.posthog.com`), reducing tracking-blocker interception. Also set `skipTrailingSlashRedirect: true`.
- **`.env.local`** — Created with `NEXT_PUBLIC_POSTHOG_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`components/ExploreBtn.tsx`** — Added `explore_button_clicked` capture to the existing `onClick` handler.
- **`components/EventCard.tsx`** — Added `event_card_clicked` capture (with `title`, `slug`, `location`, `date` properties) on the card link click.
- **`components/NavBar.tsx`** — Added `nav_link_clicked` capture (with `label` property) to each navigation link.

## Tracked events

| Event | Description | File |
|---|---|---|
| `explore_button_clicked` | User clicks the "Explore Event" CTA button on the home page | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on a featured event card to view event details | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link (Home, Event, Create Event) | `components/NavBar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/692078)
- [Event Card Clicks — Daily Trend](/insights/uufV3hKw)
- [Explore Button Clicks — Total](/insights/APvCXUxk)
- [Nav Link Clicks by Label](/insights/d0YOh3h7)
- [Discovery Funnel: Explore → Event Card](/insights/T2F6Hel7)
- [All Interactions — Daily Unique Users](/insights/05PIwP12)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
