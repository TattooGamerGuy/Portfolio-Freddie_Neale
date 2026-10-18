# Freddie Neale — Portfolio

Personal portfolio for **Freddie Neale**, COO at Nunn Corporation and founder of Algorithm Academy. Experience, education, certifications, products, LifeLong Studios, Zombie Invasion, Unity prototypes, itch.io jam games, and a scripted Sentinel portfolio guide.

Next.js App Router · TypeScript · Tailwind CSS · shadcn/ui

## Quick start

```bash
cd AlgorithmAcademy/FreddieNealePortfolio
npm install
cp .env.example .env.local
npm run dev -- -p 3005
```

On Windows PowerShell: `Copy-Item .env.example .env.local`.

Open [http://localhost:3005](http://localhost:3005).

## Contact

- Email: Freddie.Neale86@gmail.com
- GitHub: [TattooGamerGuy](https://github.com/TattooGamerGuy)
- LinkedIn: [freddie-neale-7679a829a](https://www.linkedin.com/in/freddie-neale-7679a829a)

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development (use `-p 3005`) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run test` | Vitest watch mode |
| `npm run test:run` | Vitest single run (CI) |

## Tests

Vitest + Testing Library under `tests/`:

- Content integrity (experience, education, certs, projects, jams, skills, featured)
- Site constants and nav anchors
- Portfolio Sentinel chat matcher / refusals
- Claim and brand guards
- `cn` utility
- Sentinel open-event store
- shadcn UI smoke (Button, Badge, Input, ProfileCard, OrgMark)

## Related apps

| App | Port |
| --- | --- |
| Algorithm Academy Website | 3000 |
| LifeLong Studios | 3001 |
| Pyforge | 3002 |
| Algorithm Academy Online | 3003 |
| Developer Hub | 3004 |
| This portfolio | 3005 |
