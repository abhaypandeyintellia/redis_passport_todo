import Button from "./Button";

export default function DummyAddNew({
  title,
  onClose,
  onSubmit,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  children,
  maxWidthClass = "max-w-4xl",
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`bg-white w-full ${maxWidthClass} rounded-lg shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-blue-500">
          <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Close modal"
          >
            X
          </button>
        </div>

        <form className="px-6 py-6" onSubmit={onSubmit}>
          {children}
          <div className="flex justify-end gap-4 mt-8">
            <Button variant="secondary" onClick={onClose}>
              {cancelLabel}
            </Button>
            <Button type="submit">{submitLabel}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
