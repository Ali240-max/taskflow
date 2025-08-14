function FeaturesCard({ icon, title, description }) {
  return (
    <div className=" bg-gradient-to-br from-lc600 to-lb500 p-8 rounded-2xl hover:from-lc500 hover:to-lb400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-lc400 max-sm:max-w-100 max-xs:w-85 ">
      <div className="w-16 h-16 bg-gradient-to-br from-pc500 to-bg500 rounded-lg flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-federal_blue-500 mb-2">{title}</h3>
      <p className="text-marian_blue-400 leading-relaxed ">{description}</p>
    </div>
  );
}

export default FeaturesCard;
