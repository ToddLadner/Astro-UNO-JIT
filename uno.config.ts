import { defineConfig, presetUno } from 'unocss';

const justifyMap: Record<string, string> = {
  normal: 'normal',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'space-stretch',
};

const alignItemsMap: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const alignContentMap: Record<string, string> = {
  normal: 'normal',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  baseline: 'baseline',
  stretch: 'stretch',
};

const alignSelfMap: Record<string, string> = {
  auto: 'auto',
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

export default defineConfig({
  presets: [
    presetUno({
      preflight: false, // Disable preflight styles
    }),
  ],
  rules: [
    // [1] Font size  
    [/^text-(\w+)$/, ([, size]) => ({ 
      'font-size': `var(--font-size-${size})` 
    })],

    // [2] Line height
    [/^leading-(\w+)$/, ([, size]) => ({ 
      'line-height': `var(--lineheight-${size})` 
    })],

    // [3] Letter spacing 
    [/^tracking-(\w+)$/, ([, size]) => ({ 
      'letter-spacing': `var(--letterspacing-${size})` 
    })],

    // [4] Measure
    [/^measure-(\w+)$/, ([, size]) => ({ 
      'max-width': `var(--measure-${size})` 
    })],

    // [5] Logical margin (inline & block)
    [/^m-(inline|block)-(\w+(-\w+)?)$/, ([, dir, size]) => ({
      [`margin-${dir}`]: `var(--space-${size})`,
    })],

    // [6] Logical padding (inline & block)
    [/^p-(inline|block)-(\w+(-\w+)?)$/, ([, dir, size]) => ({
      [`padding-${dir}`]: `var(--space-${size})`,
    })],

    // [7] Individual logical properties
    [/^m-(start|end)-(\w+(-\w+)?)$/, ([, pos, size]) => ({
      [`margin-${pos}`]: `var(--space-${size})`,
    })],
    
    [/^p-(start|end)-(\w+(-\w+)?)$/, ([, pos, size]) => ({
      [`padding-${pos}`]: `var(--space-${size})`,
    })],

    // [8] gap
    [/^gap-(\w+(-\w+)?)$/, ([, size]) => ({ 
      gap: `var(--space-${size})` 
    })],

    // [9] Dynamic inset spacing (top, bottom, left, right)
    [/^(top|bottom|left|right)-(\w+(-\w+)?)$/, ([, pos, size]) => {
      return { [pos]: `var(--space-${size})` };
    }],

    // [10] Logical inset (applies to top, bottom, left, right in a logical way)
    [/^inset-(block|inline)-(\w+(-\w+)?)$/, ([, dir, size]) => ({
      [`inset-${dir}`]: `var(--space-${size})`,
    })],

    // [11] Logical inset start & end
    [/^inset-(start|end)-(\w+(-\w+)?)$/, ([, pos, size]) => ({
      [`inset-${pos}`]: `var(--space-${size})`,
    })],

    // [12] Full inset (both block & inline) - placed LAST to avoid conflicts
    [/^inset-full-(\w+(-\w+)?)$/, ([, size]) => ({
      inset: `var(--space-${size})`,
    })],

    // [13] Text colors
    [/^([a-zA-Z]+)-(\d+)$/, ([, color, number]) => ({ 
      color: `var(--${color}-${number})`
    })],

    // [14] Background colors
    [/^bg-(\w+(-\w+)?)$/, ([, color]) => ({ 
      'background-color': `var(--${color})` 
    })],

    // [15] Border colors
    [/^border-(\w+(-\w+)?)$/, ([, color]) => ({ 
      'border-color': `var(--${color})` 
    })],

    // [13] Text colors
    [/^([a-zA-Z]+)-(\d+)$/, ([, color, number]) => ({ 
      color: `var(--${color}-${number})`
    })],

    // [13a] Text colors for gray-cool and gray-warm shades
    [/^(gray-(?:cool|warm))-(1[0-5]|[1-9])$/, ([, type, number]) => ({ 
      color: `var(--${type}-${number})`
    })],
    
    // [14] Background colors
    [/^bg-(\w+(-\w+)?)$/, ([, color]) => ({ 
      'background-color': `var(--${color})` 
    })],

    // [14a] Background colors for gray-cool and gray-warm shades
    [/^bg-(gray-(?:cool|warm))-(1[0-5]|[1-9])$/, ([, type, number]) => ({ 
      'background-color': `var(--${type}-${number})` 
    })],

    // [15] Border colors
    [/^border-(\w+(-\w+)?)$/, ([, color]) => ({ 
      'border-color': `var(--${color})` 
    })],

    // [15a] Border colors for gray-cool and gray-warm shades
    [/^border-(gray-(?:cool|warm))-(1[0-5]|[1-9])$/, ([, type, number]) => ({ 
      'border-color': `var(--${type}-${number})` 
    })],

    // [16] Border size (renamed to `border-size-*` to prevent conflict with `border-color-*`)
    [/^border-size-(\w+)$/, ([, size]) => ({ 
      'border-width': `var(--border-size-${size})` 
    })],

    // [17] Border radius
    [/^radius-(\w+)$/, ([, size]) => ({ 
      'border-radius': `var(--radius-${size})` 
    })],

    // [18] Conditional border radius
    [/^radius-conditional-(\w+)$/, ([, size]) => ({ 
      'border-radius': `var(--radius-conditional-${size})` 
    })],

    // [19] Blob border radius
    [/^radius-blob-(\d+)$/, ([, num]) => ({ 
      'border-radius': `var(--radius-blob-${num})` 
    })],

    // [20] Aspect ratio
    [/^aspect-(\w+)$/, ([, ratio]) => ({ 
      'aspect-ratio': `var(--ratio-${ratio})` 
    })],

    // [21] Z-index layers
    [/^layer-(\w+)$/, ([, layer]) => ({ 
      'z-index': `var(--layer-${layer})` 
    })],

    // [22] Easing transitions
    [/^ease-(\w+(-\w+)?)$/, ([, ease]) => ({ 
      'transition-timing-function': `var(--ease-${ease})` 
    })],

    // [23] Easing animations
    [/^animate-ease-(\w+(-\w+)?)$/, ([, ease]) => ({ 
      'animation-timing-function': `var(--ease-${ease})` 
    })],
    
    // Flex Utility
    // Display rules (static)
    ['flex', { display: 'flex' }],
    ['flex-inline', { display: 'inline-flex' }],

    // Flex Direction (dynamic by capture)
    [/^flex-(row|row-reverse|column|column-reverse)$/, ([, dir]) => ({
      'flex-direction': dir,
    })],

    // Flex Wrap (dynamic by capture)
    [/^flex-(nowrap|wrap|wrap-reverse)$/, ([, wrap]) => ({
      'flex-wrap': wrap,
    })],

    // Justify content (dynamic)
    [/^justify-(\w+)$/, ([, key]) => ({
      'justify-content': justifyMap[key] || key,
    })],

    // Align items (dynamic)
    [/^items-(\w+)$/, ([, key]) => ({
      'align-items': alignItemsMap[key] || key,
    })],

    // Align content (dynamic)
    [/^content-(\w+)$/, ([, key]) => ({
      'align-content': alignContentMap[key] || key,
    })],

    // Align self (dynamic)
    [/^align-self-(\w+)$/, ([, key]) => ({
      'align-self': alignSelfMap[key] || key,
    })],
    
    // Base "stack" rule: reset children margin and apply spacing by default
    //  [
    //   /^stack$/,
    //   () => `
    //   [class^="stack"] > * { margin-block: 0; }
    //   [class^="stack"] > * + * { margin-block-start: var(--space, 1em); }
    //   `
    // ],
    // Dynamic modifier rule: matches .stack-3xs, .stack-2xs, .stack-xs, .stack-sm, .stack-md, .stack-lg, .stack-xl, .stack-2xl, .stack-3xl
    [
      /^stack\-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)$/,
      ([, token]) => {
        return `.stack-${token} > * + * { --space: var(--space-${token}); }`
      }
    ],
   
    //Matches .space-2xs, .space-xs, .space-sm, .space-md, .space-lg, .space-xl, .space-2xl, .space-3xl
    [/^space\-(2xs|xs|sm|md|lg|xl|2xl|3xl)$/,
      ([, token]) => {
        return `.space-${token} > * + * { --space: var(--space-${token}); }`
      },
    ],

    [
      // Matches .shadow-1, .shadow-2, ... .shadow-6
      /^shadow-(1|2|3|4|5|6)$/,
      ([, num]) => ({
        'box-shadow': `var(--shadow-${num})`,
      }),
    ],
  ],
});