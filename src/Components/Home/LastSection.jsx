import React from "react";

function LastSection() {
  const SimilarCompo = ({ title, para }) => {
    return (
      <>
        <div className="text-zinc-600">
          <p className="my-5 font-bold text-lg">{title}</p>
          <p className="text-lg">{para}</p>
        </div>
      </>
    );
  };

  return (
    <section className="my-20 mb-80">
      <div className="w-11/12 m-auto">
        <p className="font-bold text-xl text-zinc-600 my-14">
          Shop Top-Quality Appliances, Tools & Other Products from Sears
        </p>
        <SimilarCompo
          title="Sophisticated Appliances for a Modern Home"
          para="Turn your home into the ultimate hosting place for guests by getting all the best . For house parties, celebrating holidays and birthdays cook your meals in a that can handle your delicious home cooked meals. Once you are done with your big party meals store your food in a classic French door refrigerator. In fact, you can choose from a variety of refrigerators, which includes compact refrigerators and . Your ultimate hosting kitchen is right around the corner! Make sure to shop Sears for all your appliance needs."
        />
        <SimilarCompo
          title="Sophisticated Appliances for a Modern Home"
          para="Turn your home into the ultimate hosting place for guests by getting all the best . For house parties, celebrating holidays and birthdays cook your meals in a that can handle your delicious home cooked meals. Once you are done with your big party meals store your food in a classic French door refrigerator. In fact, you can choose from a variety of refrigerators, which includes compact refrigerators and . Your ultimate hosting kitchen is right around the corner! Make sure to shop Sears for all your appliance needs."
        />
        <SimilarCompo
          title="Sophisticated Appliances for a Modern Home"
          para="Turn your home into the ultimate hosting place for guests by getting all the best . For house parties, celebrating holidays and birthdays cook your meals in a that can handle your delicious home cooked meals. Once you are done with your big party meals store your food in a classic French door refrigerator. In fact, you can choose from a variety of refrigerators, which includes compact refrigerators and . Your ultimate hosting kitchen is right around the corner! Make sure to shop Sears for all your appliance needs."
        />
      </div>
    </section>
  );
}

export default LastSection;
