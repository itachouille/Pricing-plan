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
      <div className="w-[46px] h-[46px] border border-white flex justify-center">
        <img src={icon} alt="icon" width={26} height={26} />
      </div>
      <div>
        <span className="font-medium text-[33px]">{title}</span>
        {badge}
      </div>
      <div className="">${price} /month</div>
      <div className="mx-auto w-2/4 h-0.5 bg-white" />
      <div>
        <ul>
          {list.map((item, index) => (
            <li className="flex" key={index}>
              <img src="./check.svg" alt="check icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>{text}</div>

      <Button variant="btn" label="Je m'abonne" />
    </div>
  );
};

export default Card;
