# Design plan

Tokens: navy `#020C29`, accent `#EDCD1F` (CTAs, stat numerals, active underline, price on dark — never text on white), charcoal `#3B3A3A`, muted `#5C5C5C`, tint `#F5F5F4`, white. Montserrat 800 headings / 400–500 body at 17px. Scale 1.25: hero 56/36, h2 36/28. Radius: card 16px, button 10px, image 14px, chip pill. Shadows: sm `0 2px 8px rgba(2,12,41,.10)`, lg `0 18px 40px rgba(2,12,41,.24)`.

Hero: full-bleed outdoor blaster photo, left-weighted navy scrim, white headline, yellow primary quote button, text link to the shop. Headline rises 450ms; yellow underline wipes. Off under reduced motion. No split hero.

Signature: proof band, huge yellow numerals on navy (17+ years, 12,000 lb lift, 9,000 lb load, 5 media types) with a diagonal hazard-stripe edge.

Home bands and phone layout: photo hero (stack); navy stat band (2-up); white photo service cards (snap scroller); tint mosaic (carousel); white product row with photos and a yellow hover bar (scroller); charcoal delivery split (stack); yellow quote strip (stack); white FAQ accordion. Cards differ: photo cards, stat tiles, mosaic, product photos, chips.

Kit: flowbite-vue buttons, badges, cards, tabs, accordion, carousel, sidebar, themed with brand classes through the component class API. Reference take: Clemco full-bleed work photography and a clear quote button; Kramer category, size, and price clarity; Media Blast services plus media sales on one site.
