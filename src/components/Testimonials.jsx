import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechFlow Inc.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "TaskFlow has completely transformed how our team manages projects. The collaboration features are incredible, and we've increased our productivity by 40% since switching.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Creative Studio",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "As a freelancer juggling multiple clients, TaskFlow keeps me organized and on track. The smart scheduling feature alone has saved me countless hours every week.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Growth Labs",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "The analytics dashboard gives me incredible insights into my team's productivity patterns. TaskFlow isn't just a task manager – it's a productivity powerhouse.",
      rating: 5,
    },
  ];
  return (
    <Element name="Reviews">
      <section className="bg-gradient-to-br from-lc600 via-lb500 to-npb1400 py-20 px-10 ">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="flex text-center max-sm:text-3xl items-center flex-col justify-center text-5xl font-bold text-fb500 leading-tight">
              Loved by Teams
              <span className="block  bg-gradient-to-r from-pc500 to-bg500 bg-clip-text text-transparent">
                Around the World
              </span>
            </h1>
            <p className="text-xl text-mb400 text-center max-w-[700px] ">
              Join thousands of satisfied users who've transformed their
              productivity with TaskFlow.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-10 mt-10 max-md:flex-col">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Testimonials;
