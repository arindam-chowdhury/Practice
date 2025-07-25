// Buttons & Inputs
export const ComponentStates = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
    <div>
      <h3 className="font-bold mb-2">Buttons</h3>
      <button className="bg-[var(--button-bg-color)] text-[var(--button-text-color)] px-4 py-2 rounded m-2">
        Default
      </button>
      <button className="bg-[var(--button-hover-bg-color)] text-[var(--button-hover-text-color)] px-4 py-2 rounded m-2">
        Hover
      </button>
      <button className="bg-[var(--button-active-bg-color)] text-[var(--button-active-text-color)] px-4 py-2 rounded m-2">
        Active
      </button>
      <button
        className="bg-[var(--button-disabled-bg-color)] text-[var(--button-disabled-text-color)] px-4 py-2 rounded m-2"
        disabled
      >
        Disabled
      </button>
    </div>

    <div>
      <h3 className="font-bold mb-2">Inputs</h3>

      {/* Default Input */}
      <input
        className="border p-2 block w-full mb-2 bg-[var(--input-bg-color)] text-[var(--input-text-color)] placeholder:text-[var(--input-placeholder-color)]"
        placeholder="Default"
      />

      {/* Focus Input */}
      <input
        className="border p-2 block w-full mb-2 focus:outline-none focus:border-[var(--input-focus-border-color)] focus:text-[var(--input-focus-text-color)] focus:bg-[var(--input-focus-bg-color)]"
        placeholder="Focus"
      />

      {/* Disabled Input */}
      <input
        className="border p-2 block w-full mb-2 bg-[var(--input-disabled-bg-color)] text-[var(--input-disabled-text-color)] placeholder:text-[var(--input-disabled-placeholder-color)]"
        disabled
        placeholder="Disabled"
      />

      {/* Error Input */}
      <input
        className="border p-2 block w-full mb-2 border-[var(--input-error-border-color)] text-[var(--input-error-text-color)]"
        value="Error"
      />

      {/* Valid Input */}
      <input
        className="border p-2 block w-full mb-2 border-[var(--input-valid-border-color)] text-[var(--input-valid-text-color)]"
        value="Valid"
      />
    </div>
  </div>
);