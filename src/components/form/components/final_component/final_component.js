import React from "react";
import BlackCard from "./components/black_card/BlackCard";
import WhiteCard from "./components/white_card/WhiteCard";
import "./final_component.css";

const FinalComponent = () => {
  return (
    <div className="final">
      <header className="final_header">
        <BlackCard
          text="هل انت طالب طب اسنان يبحث عن مرضى ؟"
          additionalText="الرجاء اكمال الاستمارة للتقديم "
        />
        <WhiteCard />
      </header>
    </div>
  );
};

export default FinalComponent;
