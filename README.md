# Creative Portfolio Showcase

Local React/Vite portfolio for a graphic designer and video editor. It includes 10 different visual directions that share the same content, work sections, about section, social links, and freelance inquiry panel.

## Run

```bash
npm install
npm run dev -- --port 5173
```

Open `http://localhost:5173/`.

## Switch Designs

- Press the fixed numbered button to cycle through the 10 designs.
- Open a specific design directly with `?design=5`, for example:

```text
http://localhost:5173/?design=5
```

## Customize

Edit [src/App.tsx](src/App.tsx):

- `socials` for WhatsApp, LinkedIn, Instagram, and email links.
- `projects` for your real portfolio work.
- `experience` for your actual groups, clients, projects, and roles.
- `tools` for your software stack.

## Design Directions

The 10 variants are: Signal Studio, Neon Reel Room, Editorial Craft, Luxury Index, 3D Orbit, Poster Wall, Bento Workbench, Glass Reel Lab, Timeline Archive, and Bold Gallery.
