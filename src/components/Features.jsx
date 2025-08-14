import { CheckSquare, Zap, Users } from "lucide-react";
import FeaturesCard from "./FeaturesCard";
import { Element } from "react-scroll";

const Features = () => {
  const features = [
    {
      icon: <CheckSquare className="w-8 h-8 text-white" />,
      title: "Smart Task Management",
      description:
        "Organize, prioritize, and track your tasks with intelligent categorization and due date reminders. Never miss a deadline again.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Lightning Fast Sync",
      description:
        "Real-time synchronization across all your devices. Start on your phone, continue on your laptop, and finish on your tablet seamlessly.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Collaboration",
      description:
        "Work together efficiently with shared projects, task assignments, comments, and real-time progress tracking for your entire team.",
    },
  ];
  return (
    <Element name="features">
      <section className="bg-white min-h-screen flex items-center justify-center mb-10 px-15">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col items-center gap-4">
            <h1
              className="flex items-center flex-col justify-center sm:text-5xl font-bold text-fb500 leading-tight text-center
           max-sm:text-3xl max-sm:mt-10 "
            >
              Powerful Features for
              <span className="block  bg-gradient-to-r from-pc500 to-bg500 bg-clip-text text-transparent">
                Maximum Productivity
              </span>
            </h1>
            <p className="text-xl max-xs:w-85 text-mb400 text-center max-w-[780px] ">
              Everything you need to stay organized and productive, designed
              with simplicity and power in mind.
            </p>
          </div>
          <div className="flex gap-4 mt-5 max-md:flex-col items-center justify-center">
            {features.map((feature, index) => (
              <FeaturesCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Features;
