'use client'
import Image from "next/image";
import posthog from "posthog-js";

function ExploreBtn() {
  return ( 
    <button type="button" id="explore-btn" className="mt-7 mx-auto"
    onClick={() => { console.log("Explore Button Clicked!"); posthog.capture("explore_button_clicked"); }}>
      
      <a href="#events">
        Explore Event
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
      </a>
    </button>
   );
}

export default ExploreBtn;