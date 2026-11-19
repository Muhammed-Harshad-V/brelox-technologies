import {
  Globe,
  LayoutGrid,
  Smartphone,
  Cpu,
  Sparkles,
  Cloud,
} from "lucide-react";
import type { ServiceIconKey } from "@/lib/site-data";

interface ServiceIconProps {
  name: ServiceIconKey;
  className?: string;
}

export function ServiceIcon({ name, className = "h-5 w-5" }: ServiceIconProps) {
  switch (name) {
    case "globe":
      return <Globe className={className} aria-hidden="true" />;
    case "layout":
      return <LayoutGrid className={className} aria-hidden="true" />;
    case "smartphone":
      return <Smartphone className={className} aria-hidden="true" />;
    case "cpu":
      return <Cpu className={className} aria-hidden="true" />;
    case "sparkles":
      return <Sparkles className={className} aria-hidden="true" />;
    case "cloud":
      return <Cloud className={className} aria-hidden="true" />;
  }
}
