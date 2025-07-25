// Typography showcase
export const TypographyShowcase = () => (
  <div className="space-y-4">
    <h1
      style={{
        fontSize: "var(--font-size-heading-1)",
        fontFamily: "var(--font-family-heading)",
      }}
    >
      Heading 1
    </h1>
    <h2
      style={{
        fontSize: "var(--font-size-heading-2)",
        fontFamily: "var(--font-family-heading)",
      }}
    >
      Heading 2
    </h2>
    <h3
      style={{
        fontSize: "var(--font-size-heading-3)",
        fontFamily: "var(--font-family-heading)",
      }}
    >
      Heading 3
    </h3>
    <p
      style={{
        fontFamily: "var(--font-family-primary)",
        fontSize: "var(--font-size-base)",
        lineHeight: "var(--line-height-paragraph)",
      }}
    >
      This paragraph uses base font styles and line height.
    </p>
  </div>
);