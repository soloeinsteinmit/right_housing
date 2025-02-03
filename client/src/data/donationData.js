import { Users, Home, Heart, Shield, Star, CreditCard } from "lucide-react";

export const impactStats = [
  {
    icon: <Users className="w-10 h-10" />,
    number: "5,000+",
    label: "Lives Impacted",
    color: "primary",
    description: "Supporting families in need",
  },
  {
    icon: <Home className="w-10 h-10" />,
    number: "1,200+",
    label: "Homes Provided",
    color: "success",
    description: "Safe and stable housing",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    number: "$2.5M+",
    label: "Donations Received",
    color: "warning",
    description: "100% goes to housing",
  },
];

export const amounts = [25, 50, 100, 250, 500, 1000];

export const impactInfo = {
  25: "Essential supplies for a solo housing transition",
  50: "A week of utilities for a family in need",
  100: "Basic furniture for a new home",
  250: "One month's housing support for an individual",
  500: "Complete home setup for a family",
  1000: "Three months of comprehensive housing support",
};

export const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Payment",
    description: "Powered by Stripe",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Tax Deductible",
    description: "Get your tax receipt",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Multiple Methods",
    description: "Card, PayPal, & more",
  },
];
