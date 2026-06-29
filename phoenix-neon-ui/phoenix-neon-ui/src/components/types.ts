/* Phoenix UI Kit © Skyler J. Jones */
/* TypeScript Type Definitions */

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  logo?: string;
  links: Array<{ label: string; href: string }>;
  ctaButton?: { label: string; onClick: () => void };
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  className?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: Array<{ text: string; included: boolean }>;
  buttonLabel: string;
  onSelect: () => void;
  featured?: boolean;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface GridSectionProps {
  items: GridItem[];
  columns?: 1 | 2 | 3 | 4;
}