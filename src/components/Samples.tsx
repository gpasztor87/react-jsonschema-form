import { samples } from "@/playground";

import { cn } from "@/lib/utils";

import { type AppState, useStore } from "@/store";

const selector = (state: AppState) => ({
  label: state.label,
  setLabel: state.setLabel,
});

export function Samples() {
  const { label, setLabel } = useStore(selector);

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Tabs">
        {Object.keys(samples).map((sample) => (
          <button
            key={sample}
            className={cn(
              sample === label
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:bg-muted",
              "rounded-full text-center px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary",
            )}
            onClick={() => setLabel(sample)}
          >
            {sample}
          </button>
        ))}
      </div>
    </div>
  );
}
