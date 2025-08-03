// js/data/flight.js

export const flightProject = {
  id: "flight",
  title: "Project Flight",
  landingImage: "./images/before-after.png",
  sections: [
    {
      key: "beginning",
      title: "At the beginning...",
      contentHtml: `
        <p><strong>Date:</strong> <time datetime="2025-07-01">July 1, 2025</time></p>
        <p>We began by <em>striping</em> the old paint down to bare gelcoat. After a thorough <strong>sandblast</strong>, marine‐grade primer was sprayed on in three coats:</p>
        <ul>
          <li>Coat 1: Rust inhibitor primer</li>
          <li>Coat 2: Epoxy high-bond primer</li>
          <li>Coat 3: UV-resistant finish primer</li>
        </ul>
        <p>Next, we applied two topcoats of <em>Mistral Blue</em> polyurethane paint, ensuring even coverage with a 1.8 mm tip HVLP sprayer. Finally, all new <strong>304-SS</strong> railings were mirror polished and custom-welded on deck.</p>
        <blockquote class="border-l-4 pl-4 italic text-muted-foreground">
          “The hull now gleams like a mirror. It’s not just protection—it’s a statement.” — Ben Love
        </blockquote>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161406/IMG-20250724-WA0108_aavjbq.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161506/IMG-20250724-WA0092_zre2ig.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161404/IMG-20250724-WA0094_z1mzjn.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161399/IMG-20250724-WA0100_m0vj9u.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161507/IMG-20250724-WA0091_gipaps.jpg"
      ]
    },
    {
      key: "extension",
      title: "Extension Transformation",
      contentHtml: `
        <p><strong>Date:</strong> <time datetime="2025-07-01">July 1, 2025</time></p>
        <p>We began by <em>striping</em> the old paint down to bare gelcoat. After a thorough <strong>sandblast</strong>, marine‐grade primer was sprayed on in three coats:</p>
        <ul>
          <li>Coat 1: Rust inhibitor primer</li>
          <li>Coat 2: Epoxy high-bond primer</li>
          <li>Coat 3: UV-resistant finish primer</li>
        </ul>
        <p>Next, we applied two topcoats of <em>Mistral Blue</em> polyurethane paint, ensuring even coverage with a 1.8 mm tip HVLP sprayer. Finally, all new <strong>304-SS</strong> railings were mirror polished and custom-welded on deck.</p>
        <blockquote class="border-l-4 pl-4 italic text-muted-foreground">
          “The hull now gleams like a mirror. It’s not just protection—it’s a statement.” — Ben Love
        </blockquote>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161511/IMG-20250724-WA0099_xrtgfa.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161404/IMG-20250724-WA0102_tejqyh.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161513/IMG-20250724-WA0103_qn9hfc.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159697/IMG-20241101-WA0004_aw4zr8.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159689/IMG-20250120-WA0007_alilkl.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159719/IMG-20250318-WA0004_w71pny.jpg"
      ]
    },
    {
      key: "exterior",
      title: "Welcoming exterior",
      contentHtml: `
        <p><strong>Date:</strong> <time datetime="2025-07-20">July 20, 2025</time></p>
        <p>To brighten the entry, we refinished the steps in mahogany and installed in-floor LED strips. A frameless glass door lets natural light flood the main salon.</p>
        <p><em>Every guest steps aboard into a gallery of craftsmanship.</em></p>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160077/IMG-20250706-WA0005_qkxxfi.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160465/IMG-20250706-WA0004_chnkpf.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159726/IMG-20250317-WA0002_lgfpis.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159726/IMG-20250201-WA0000_g2juxr.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159727/IMG-20250119-WA0004_fwxqis.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159701/IMG-20250120-WA0000_splvpd.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159726/IMG-20250120-WA0004_sf0c4d.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159727/IMG-20250120-WA0006_uxbzcq.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159723/IMG-20250222-WA0006_scofcf.jpg"
      ]
    },
    {
      key: "bedroom",
      title: "Cozy Cabin Bedroom",
      contentHtml: `
        <p><strong>Scope:</strong> Full interior refit of the sleeping quarters.</p>
        <p><strong>Materials:</strong></p>
        <ol>
          <li>Afrormosia hardwood for intricate wall paneling</li>
          <li>Marine-grade memory foam mattress</li>
          <li>Custom warm-white LED accent strips</li>
        </ol>
        <p>Process steps:</p>
        <ol>
          <li>Removed old bunk-beds and carpeting.</li>
          <li>Built custom sub-frame for queen berth.</li>
          <li>Installed hidden cable channels for lighting.</li>
          <li>Finished with satin varnish and recessed reading lights.</li>
        </ol>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159724/IMG-20250531-WA0008_p9xzwj.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159688/IMG-20250529-WA0007_z5g18d.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159690/IMG-20250529-WA0002_f64i8w.jpg",
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159701/IMG-20250529-WA0009_sytff1.jpg"
      ]
    },
    {
      key: "kitchen",
      title: "Galley Kitchen Upgrade",
      contentHtml: `
        <p><strong>Date:</strong> <time datetime="2025-06-15">June 15, 2025</time></p>
        <p>We installed new Corian countertops, a marine-grade stainless sink, and hidden appliances behind custom cabinetry. A pop-up docking station keeps devices charged but out of sight.</p>
        <ul>
          <li>Corian Solid Surface counters</li>
          <li>Flush-mount induction cooktop</li>
          <li>Drawer-style refrigerator unit</li>
        </ul>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161401/IMG-20250724-WA0109_mcrptb.jpg",
      ]
    },
    {
      key: "bathroom",
      title: "Bathroom & Plumbing Overhaul",
      contentHtml: `
        <p><strong>Scope:</strong> Complete replumb and fixture replacement.</p>
        <p><strong>Highlights:</strong></p>
        <ul>
          <li>New freshwater tank and pump</li>
          <li>Custom teak vanity with integrated sink</li>
          <li>Walk-in shower with non-slip porcelain tile</li>
        </ul>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159716/IMG-20250209-WA0006_sdoleo.jpg"
      ]
    },
    {
      key: "entryway",
      title: "Welcoming Entryway",
      contentHtml: `
        <p><strong>Date:</strong> <time datetime="2025-07-20">July 20, 2025</time></p>
        <p>To brighten the entry, we refinished the steps in mahogany and installed in-floor LED strips. A frameless glass door lets natural light flood the main salon.</p>
        <p><em>Every guest steps aboard into a gallery of craftsmanship.</em></p>
      `,
      images: [
        "https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160077/IMG-20250706-WA0005_qkxxfi.jpg"
      ]
    }
  ]
};
