import React, { useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import "./card.css"; // Import the CSS file for styling
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
  rules:string[];
  regdate : string;
}
// ... (previous imports)

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  startDate,
  endDate,
  registerUrl,
  description,
  rules,
  regdate
}) => {
  const [expanded, setExpanded] = useState(true);

  const handleRegisterClick = () => {
    window.location.href = registerUrl;
  };
  const handlDate = () =>{
    if (endDate) {
      return `${startDate} - ${endDate}`;
    } else {
      return `On ${startDate}`;
    }

  }
  const renderRulesList = () => {
    return (
      <ul className="list-disc ml-6">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    );
  };

  return (
    <article
      className={`event-card flex lg:flex-row gap-5 mb-20 lg:p-8 border-orange-500 border-2 rounded-lg lg:w-[90%] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFA500] ${
        expanded ? "lg:h-auto" : "lg:h-[30rem]"
      } event__card`}
    >
      <div className="image-container">
        <img
          src={img}
          alt={`Event: ${title}`}
          className="event-image lg:w-[12rem] rounded-md "
        />
      </div>
      <div className={`event-details-container w-[80%] h-auto`}>
        <header className="event-title text-3xl mb-3 font-bold">
          <h1 className="event-title">{title}</h1>
        </header>
        <div className="event-details">
          <Separator />
          <p className="event-dates lg:text-2xl mb-3">
            {handlDate()}
          </p>
          <p className="event-description text-justify lg:text-lg">
            {description}
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                
                More 
              </AccordionTrigger>
              <AccordionContent>
                <div className="expanded-content mt-4 lg:text-lg text-sm text-justify">
                  <div className=" font-bold lg:text-xl text-sm"> Rules</div>
                  <p>
                    {renderRulesList()}
                  </p>
                  <div className=" font-bold lg:text-xl text-sm"> Registration date</div>
                  <p>
                    {regdate}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          
            <div className="flex flex-row justify-end mt-[2vh] mb-[1vh]">
              <Button
                className="register-button lg:px-10 lg:py-7 lg:text-xl"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </div>
          
        </div>
      </div>
    </article>
  );
};

export default EventCard;
