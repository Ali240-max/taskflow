import { Check, Star, Zap, Crown } from "lucide-react";
import PricingCard from "./PricingCard";
import { Element } from "react-scroll";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Forever",
      description: "Perfect for individuals getting started",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-vivid_sky_blue-400 to-pacific_cyan-400",
      buttonClass:
        "bg-gradient-to-r from-vsb500 to-pc500 hover:from-vsb600 hover:to-pc600",
      features: [
        "Up to 50 tasks",
        "Basic task organization",
        "Mobile & web access",
        "Email support",
        "Basic analytics",
      ],
      btnText: "Get Started",
    },
    {
      name: "Pro",
      price: "12",
      period: "per month",
      description: "For professionals who need more power",
      icon: <Zap className="w-6 h-6" />,
      gradient: "bg-gradient-to-r from-bg400 to-hb500",
      buttonClass:
        "bg-gradient-to-r from-bg500 to-hb500 hover:from-bg600 hover:to-hb600",
      popular: true,
      features: [
        "Unlimited tasks",
        "Advanced task management",
        "Team collaboration (up to 10 members)",
        "Priority support",
        "Advanced analytics & reports",
        "Custom integrations",
        "Calendar sync",
      ],
      btnText: "Start Free Trial",
    },
    {
      name: "Team",
      price: "29",
      period: "per month",
      description: "For teams that need full collaboration",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-mb400 to-fd400",
      buttonClass:
        "bg-gradient-to-r from-mb500 to-fb500 hover:from-mb600 hover:to-fd600",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced team analytics",
        "Custom workflows",
        "White-label options",
        "24/7 phone support",
        "SSO integration",
        "Admin controls",
      ],
      btnText: "Start Free Trial",
    },
  ];
  return (
    <Element name="Pricing">
      <section className="py-20 px-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="flex text-center items-center flex-col justify-center text-5xl font-bold text-fb500 leading-tight">
            Simple, Transparent
            <span className="block  bg-gradient-to-r from-pc500 to-bg500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-mb400 text-center max-w-[780px] ">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>
        <div className="flex gap-10 max-sm:items-center items-baseline justify-center mt-10 max-md:flex-col">
          {plans.map((plan, index) => (
            <PricingCard key={index} obj={plan} />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Pricing;
