interface IInput {
  className?: string;
  label?: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: any) => void;
}

const Input = ({ className, label, type, name, value, placeholder, onChange }: IInput) => {
  const labelColor = value ? 'text-black' : 'text-[#8D8D8D]';
 
  return (
    <label className={`block ${className}`}>
      {label &&
        <div className={`text-xs font-medium transition-colors ${labelColor}`}>
          {label}
        </div>
      }
      <input
        className="base-input transition-colors"
        type={type ? type : 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;