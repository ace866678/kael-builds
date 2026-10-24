export const buildNotesArticle002 = {
  kicker: "BUILD NOTES / 002",
  title: "Stop Layout Jumps Before They Start",
  subtitle: "A practical guide to reserving space for images so content stays steady while assets load.",
  readingTime: "4 MIN READ",
  status: "PERFORMANCE FIELD GUIDE",
  introduction:
    "When an image loads without a known size, the browser may not know how much room to reserve. Nearby content can move after the image arrives. You can prevent many of these avoidable shifts before measuring or tuning anything else.",
  sections: [
    {
      heading: "01 — Give the browser an aspect ratio early",
      paragraphs: [
        "For ordinary HTML images, include width and height attributes that match the image's intrinsic dimensions. Modern browsers can use those values to calculate an aspect ratio and reserve space before the file finishes downloading.",
        "The attributes describe the source's proportions; they do not prevent responsive CSS from resizing the image."
      ],
      bullets: [
        "Use the real intrinsic width and height, not guessed display dimensions.",
        "Keep responsive styling such as max-width: 100% and height: auto.",
        "For art-directed picture sources, make sure each source's dimensions and aspect ratio match its image."
      ]
    },
    {
      heading: "02 — Keep the layout responsive",
      paragraphs: [
        "A reserved box should still fit its container. Pair intrinsic dimensions with responsive CSS, or use an aspect-ratio container when the design intentionally crops an image. Avoid forcing a fixed height that distorts the image or leaves an awkward gap at narrow widths."
      ]
    },
    {
      heading: "03 — Prioritize the right images",
      paragraphs: [
        "Space reservation addresses layout stability, not download speed. After that, inspect file size and loading priority separately. Images below the fold are often candidates for lazy loading; the image that forms the page's main first-screen content should not be delayed automatically."
      ]
    },
    {
      heading: "04 — Verify instead of guessing",
      paragraphs: [
        "Load the page with a throttled connection and watch whether content moves as images appear. Then use browser performance tools or Lighthouse to identify actual layout-shift contributors. Treat the result as evidence for the next fix, not a score to invent in a status update."
      ],
      bullets: [
        "Check the initial viewport and at least one narrow mobile width.",
        "Confirm each image's dimensions match its actual aspect ratio.",
        "Record the tool, page, and date if you publish a performance result."
      ]
    }
  ],
  closing:
    "A stable layout starts before the image arrives. Give the browser the dimensions it needs, keep the design responsive, and measure the remaining shifts before deciding what to optimize next.",
  sources: [
    {
      label: "MDN — HTML image element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
    },
    {
      label: "web.dev — Optimize Cumulative Layout Shift",
      url: "https://web.dev/articles/optimize-cls"
    }
  ]
};

export type BuildNotesArticle002 = typeof buildNotesArticle002;
