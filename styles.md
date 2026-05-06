// ── Google Fonts ───────────────────────────────────

// Jost (Logo Font)
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

// Space Grotesk
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');


// ── CSS custom properties (primitives) ───────────────────────
:root {
    // Orange scale (primary brand)
    --orange-100: #FEF0E8;
    --orange-200: #FDD9C4;
    --orange-300: #FBC09E;
    --orange-400: #F8A476;
    --orange-450: #f57643;
    --orange-500: #F16425;
    --orange-600: #C94E18;
    --orange-650: #B34819;
    --orange-700: #A03C12;
    --orange-800: #7A2D0D;
    --orange-850: #612308;
    --orange-900: #4A1A05;
    --orange-1000: #2E0F02;

    // Oxblood scale (secondary brand)
    --oxblood-100: #F7EAEA;
    --oxblood-200: #EECECE;
    --oxblood-300: #D99999;
    --oxblood-400: #C36464;
    --oxblood-500: #A33030;
    --oxblood-600: #7A2020;
    --oxblood-650: #671e1e;
    --oxblood-700: #5E1818;
    --oxblood-800: #431111;
    --oxblood-850: #421010;
    --oxblood-900: #260808;
    --oxblood-1000: #0d0101;


    // Stone scale (neutrals)
    --stone-000: #FDFAF7;
    --stone-100: #FAF7F4;
    --stone-200: #F5F0EB;
    --stone-300: #EDE5DB;
    --stone-400: #DDD3C6;
    --stone-500: #C4B8A9;
    --stone-600: #A3957F;
    --stone-700: #7A6E60;
    --stone-800: #534C41;
    --stone-850: #3f3b35;
    --stone-900: #342E26;
    --stone-950: #2b2723;
    --stone-1000: #1A1410;



    --max-width: 1600px;
}
:root {
  --space-0:    0;
  --space-025:  0.125rem;  // 2px
  --space-050:  0.25rem;   // 4px
  --space-075:  0.375rem;  // 6px
  --space-100:  0.5rem;    // 8px
  --space-150:  0.75rem;   // 12px
  --space-200:  1rem;      // 16px
  --space-250:  1.25rem;   // 20px
  --space-300:  1.5rem;    // 24px
  --space-400:  2rem;      // 32px
  --space-500:  2.5rem;    // 40px
  --space-600:  3rem;      // 48px
  --space-700:  3.5rem;    // 56px
  --space-750:  3.75rem;   // 60px
  --space-800:  4rem;      // 64px
  --space-1000: 5rem;      // 80px
  --space-1500: calc(var(--space-1000) * 1.5); //120px
}

// calc(var(--space-1000) * 1.5) == 120px

@use "../mixins" as *;

@use "sass:math";
@use "sass:map";

// breakpoints
$vp-min: 375;
$vp-max: 1440;

// token definitions — min and max in px
$text-xs: (
    min: 12,
    max: 14,
);
$text-s: (
    min: 14,
    max: 16,
);
$text-base: (
    min: 16,
    max: 18,
);
$text-md: (
    min: 18,
    max: 20,
);
$text-lg: (
    min: 24,
    max: 28,
);
$text-xl: (
    min: 28,
    max: 36,
);
$text-2xl: (
    min: 36,
    max: 48,
);
$text-3xl: (
    min: 48,
    max: 60,
);
$text-4xl: (
    min: 60,
    max: 72,
);
$text-5xl: (
    min: 72,
    max: 92,
);

@function fluid($min, $max) {
    $v: math.div(($max - $min), ($vp-max - $vp-min)) * 100;
    $r: math.div($min - math.div($v, 100) * $vp-min, 16);

    @return clamp(
        #{math.div($min, 16)}rem,
        #{$v}vw + #{$r}rem,
        #{math.div($max, 16)}rem
    );
}

:root {
    --text-xs: #{fluid(map.get($text-xs, min), map.get($text-xs, max))};
    --text-s: #{fluid(map.get($text-s, min), map.get($text-s, max))};
    --text-base: #{fluid(map.get($text-base, min), map.get($text-base, max))};
    --text-md: #{fluid(map.get($text-md, min), map.get($text-md, max))};
    --text-lg: #{fluid(map.get($text-lg, min), map.get($text-lg, max))};
    --text-xl: #{fluid(map.get($text-xl, min), map.get($text-xl, max))};
    --text-2xl: #{fluid(map.get($text-2xl, min), map.get($text-2xl, max))};
    --text-3xl: #{fluid(map.get($text-3xl, min), map.get($text-3xl, max))};
    --text-4xl: #{fluid(map.get($text-4xl, min), map.get($text-4xl, max))};
    --text-5xl: #{fluid(map.get($text-5xl, min), map.get($text-5xl, max))};
}
@use "./variables" as *;

// ── Base resets ──────────────────────────────────────────────

p {
  margin: 0;
  font-family: $font-sans;
  font-size: var(--text-base); 
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

a {
  margin: 0;
  font-family: $font-sans;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  // color: var(--cream-500);
}

// ── Placeholders ──────────────────────────────────────

%body-base {
  // font-family: $font-body;
  font-family: $font-sans;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

%heading-base {
  font-family: $font-sans;
  line-height: 110%;
}

%subheading-base {
  font-family: $font-mono;
  font-weight: 500;
  line-height: 125%;
}

// ── Heading styles ────────────────────────────────────────────

h1,
.heading-xxl {
  @extend %heading-base;
  font-size: var(--text-5xl);
  font-weight: 700;
}

h2,
.heading-xl {
  @extend %heading-base;
  font-size: var(--text-4xl);
    font-weight: 700;
}

h3,
.heading-l {
  @extend %heading-base;
  font-size: var(--text-3xl);
  font-weight: 600;
}

h4,
.heading-m {
  @extend %heading-base;
  font-size: var(--text-2xl);
  font-weight: 600;
}

h5,
.heading-s {
  @extend %heading-base;
  font-size: var(--text-xl);
  font-weight: 500;
}

h6,
.heading-xs {
  @extend %subheading-base;
  font-size: var(--text-lg);
}

// ── Body ──────────────────────────────────────────────────────

.body { 
  @extend %body-base;
  font-size: var(--text-base); 
}

.body-l, .body-l > p  { 
  @extend %body-base;
  font-size: var(--text-md);
  font-weight: 400; 
}

.body-s, .body-s > p   { 
  @extend %body-base;
  font-size: var(--text-s); 
}

.body-xs, .body-xs > p   { 
  @extend %body-base;
  font-size: var(--text-xs); 
}

// ── Eyebrow ───────────────────────────────────────────────────

p.eyebrow {
  font-family: $font-mono;
  font-size: var(--text-md);
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 1px;
  text-transform: uppercase;

  &.centered { text-align: center; }
}


// ── Utilities ─────────────────────────────────────────────────

