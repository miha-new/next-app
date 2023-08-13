interface IRadio {
  className?: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: any) => void;
}

const Radio = ({ className, label, name, value, onChange }: IRadio) => (
  <label className={`relative inline-block ${className}`}>
    <input
      className="base-radio"
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
    />
    <div className="base-radio-helper">
      {label}
    </div>
  </label>
);


export default Radio;