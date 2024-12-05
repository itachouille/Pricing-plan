import Button from "./Button";

interface CardProps {
  icon: string;
  title: string;
  price: number;
  list: string[];
  text?: string;
  badge?: string;
}

const Card = ({ icon, title, price, list, text, badge }: CardProps) => {
  return (
    <div className="card">
      <img src={icon} alt="icon" width={46} height={46} />
      <div className="pt-4">
        <span className="align-middle font-bold text-3xl">{title}</span>
        {badge && (
          <span className="font-normal px-2 py-1 rounded text-sm bg-white/20 border border-white ml-2">
            {badge}
          </span>
        )}
      </div>
      <div className="my-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-base"> /month</span>
      </div>

      <img src="./line.svg" alt="line" />

      <ul className="mt-6">
        {list.map((item, index) => (
          <li className="flex gap-2 my-3" key={index}>
            <img src="./check.svg" alt="check icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <span>{text}</span>

      <div className="mt-7">
        {title === "Ultime" ? (
          <Button variant="btn" label="Je m'abonne" />
        ) : (
          <Button variant="btn-ghost" label="Je m'abonne" />
        )}
      </div>
    </div>
  );
};

export default Card;
