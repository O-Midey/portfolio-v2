import { LucideIcon } from "lucide-react";

interface PropertyItemProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

const PropertyItem = ({ label, value, icon: Icon }: PropertyItemProps) => (
  <div className="flex items-center gap-2 text-gray-700">
    <Icon className="w-4 h-4 text-gray-500" />
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

export default PropertyItem;
