'use client';

import { useCSSVar } from "@/hooks/useCssVar";

// Spacing tokens visualization
const SpacingVisualizer = () => {
  const spacings = [
    ["--spacing-2xs", "2xs"],
    ["--spacing-xs", "XS"],
    ["--spacing-sm", "SM"],
    ["--spacing-base", "Base"],
    ["--spacing-lg", "LG"],
    ["--spacing-xl", "XL"],
    ["--spacing-2xl", "2XL"],
    ["--spacing-3xl", "3XL"],
    ["--spacing-4xl", "4XL"]
  ];

  // Call useCSSVar for each spacing token at the top level of the component
  const spacing2xs = useCSSVar("--spacing-2xs");
  const spacingXs = useCSSVar("--spacing-xs");
  const spacingSm = useCSSVar("--spacing-sm");
  const spacingBase = useCSSVar("--spacing-base");
  const spacingLg = useCSSVar("--spacing-lg");
  const spacingXl = useCSSVar("--spacing-xl");
  const spacing2xl = useCSSVar("--spacing-2xl");
  const spacing3xl = useCSSVar("--spacing-3xl");
  const spacing4xl = useCSSVar("--spacing-4xl");

  // Create an array of the actual values to map over for rendering
  const spacingValues = [
    spacing2xs, spacingXs, spacingSm, spacingBase, spacingLg,
    spacingXl, spacing2xl, spacing3xl, spacing4xl
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Spacing Tokens</h2>
      <div className="flex flex-wrap gap-4">
        {spacings.map(([token, label], index) => (
          <div
            key={token}
            className="border rounded bg-blue-200 text-xs text-center text-black flex items-center justify-center"
            style={{ padding: spacingValues[index], minWidth: "80px" }}
          >
            {label}
            <br />
            {spacingValues[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpacingVisualizer;