
const STATUS_STYLES = {
  processing: {
    label: "Processing",
    text: "#9A6B00",
    bg: "#FFF6DE",
    border: "#E8D5A8",
  },
  confirmed: {
    label: "Confirmed",
    text: "#2F6FED",
    bg: "#EEF4FF",
    border: "#C9DBFF",
  },
  shipped: {
    label: "Shipped",
    text: "#6B4FA1",
    bg: "#F4EFFB",
    border: "#DCCEF0",
  },
  delivered: {
    label: "Delivered",
    text: "#2E7D32",
    bg: "#EDF7EE",
    border: "#C8E3CA",
  },
  cancelled: {
    label: "Cancelled",
    text: "#C0392B",
    bg: "#FDEEEE",
    border: "#F1C9C5",
  },
};

const OrderStatus = ({ status }) => {
  const config = STATUS_STYLES[status];

  if (!config) return null;

  return (
    <span
      className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.8px] rounded-sm border select-none"
      style={{
        color: config.text,
        backgroundColor: config.bg,
        borderColor: config.border,
      }}
    >
      {config.label}
    </span>
  );
};

export default OrderStatus;
