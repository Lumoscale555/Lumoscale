import {
  Smartphone,
  BarChart,
  Sparkles,
  FileText,
  Mail,
  Search,
  LineChart,
  Globe,
  Layout,
  Server,
  Database,
  RefreshCw,
  Cloud,
  LucideProps, // ✅ Import LucideProps
} from 'lucide-react';

import { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  smartphone: Smartphone,
  barChart: BarChart,
  sparkles: Sparkles,
  fileText: FileText,
  mail: Mail,
  search: Search,
  lineChart: LineChart,
  globe: Globe,
  layout: Layout,
  server: Server,
  database: Database,
  refresh: RefreshCw,
  cloud: Cloud,
};

export const getIconComponent = (iconName: string): ComponentType<LucideProps> => {
  return iconMap[iconName] || Sparkles;
};
