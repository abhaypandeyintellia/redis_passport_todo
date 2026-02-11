export default function StatusBadge({ label, status=true }) {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
      {label}
    </span>
  );
}
