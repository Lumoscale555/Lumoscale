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
  Users,
  Film,
  Database,
  RefreshCw,
  Columns,
  Monitor,
  Cloud,
  Bot,
  LucideProps, // ✅ Import LucideProps
} from 'lucide-react';

import { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  smartphone: Smartphone,
  columns: Columns,
  users: Users,
  film: Film,
  monitor: Monitor,
  barChart: BarChart,
  bot: Bot,
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
