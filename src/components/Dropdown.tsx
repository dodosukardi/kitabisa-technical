import React, { useState } from 'react';
import Image from 'next/image';

interface Option {
  label: string
  value: string
}

interface DropdownProps {
  placeholder?: string
  options: Array<Option>
  selectedOption?: Option | null
  icon?: string
  onClick: (item: Option) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  selectedOption,
  icon,
  onClick,
}) => {
  const [selected, setSelected] = useState(selectedOption)
  const [expanded, setExpanded] = useState(false)

  const onSelect = (item: any) => {
    setSelected(item);
    onClick(item);
  }

  return (
    <div className="relative inline-block text-left dropdown" onBlur={() => setExpanded(false)}>
      <span className="rounded-md shadow-sm">
        <button
          className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          onClick={() => setExpanded(true)}
          type="button"
        >
          {icon && (
            <Image src={icon} width={20} height={20} className="mr-2" alt="icon" />
          )}
          <span>{(selected && selected.label) || placeholder}</span>
        </button>
      </span>
      <div
        className={`${!expanded ? 'opacity-0 invisible' : ''} dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}
      >
        <div
          className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
        >
          <div className="py-1">
            {options?.map((item: Option, index: number) => (
              <a
                key={`options-${index}`}
                href="#"
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100"
                onClick={() => onSelect(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
