import { useState } from "react";

const SubscriptionButton = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  function handleSubscription() {
    setIsAnnual(!isAnnual);
  }

  return (
    <div className="flex flex-col gap-5 mt-6 lg:flex-row">
      <button
        onClick={handleSubscription}
        className={isAnnual ? "btn-inactive" : "btn-active"}
      >
        Paiement Mensuel
      </button>
      <button
        onClick={handleSubscription}
        className={isAnnual ? "btn-active" : "btn-inactive"}
      >
        Paiement Annuel (-20%)
      </button>
    </div>
  );
};

export default SubscriptionButton;
