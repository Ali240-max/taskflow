import { Star, Quote } from "lucide-react";

function TestimonialCard({ name, role, company, image, content, rating }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-10 transition duration-300 transform hover:scale-105 relative">
      <div className="bg-gradient-to-br from-pc500 to-bg500 rounded-lg flex items-center justify-center absolute -top-4 left-8 w-8 h-8 ">
        <Quote className="text-white" />
      </div>
      <div className="flex gap-5 items-center">
        <img
          src={image}
          alt="Person"
          className="w-12 h-12 rounded-full object-cover border-2 border-vsb500"
        />
        <div className="flex flex-col ">
          <h4 className="text-lg font-bold text-fb500"> {name}</h4>
          <span className="text-sm text-mb400"> {role}</span>
          <span className="text-sm text-hb400 font-medium">{company}</span>
        </div>
      </div>
      <div className="flex gap-1 mt-5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-mb400 leading-relaxed italic mt-5">"{content}"</p>
    </div>
  );
}

export default TestimonialCard;
