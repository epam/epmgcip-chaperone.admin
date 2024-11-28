'use client';

import { useState, useRef, useEffect } from 'react';

import { clsx } from 'clsx';
import Image from 'next/image';

import IDropdownOption from '@/interfaces/IDropdownOption';

import styles from './Dropdown.module.scss';
import ArrowIcon from '../../../assets/svg/arrow.svg';
import assertIsNode from '../../../utils/assertIsNode';

interface Props<Option extends IDropdownOption> {
  options: Option[];
  onChange?: (optionId: Option) => void;
  defaultOptionId: string;
}

export default function Dropdown<Option extends IDropdownOption>({
  options,
  onChange,
  defaultOptionId,
}: Props<Option>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(defaultOptionId);
  const toggleContainer = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.id === selectedOptionId);

  const handleClickOutside = (event: Event) => {
    assertIsNode(event.target);

    if (toggleContainer.current && !toggleContainer.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOptionId(option.id);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div ref={toggleContainer} className={styles.dropdown}>
      <button type="button" className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.image} src={selectedOption?.image} alt={selectedOption?.text} />
        {selectedOption?.text}{' '}
        <ArrowIcon className={clsx(styles.arrow, isOpen && styles.arrowOpen)} />
      </button>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.id} className={styles.option}>
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
                className={styles.optionButton}
              >
                {option.image && (
                  <Image
                    className={styles.optionImage}
                    src={option.image}
                    height={18}
                    width={18}
                    alt={option.text}
                  />
                )}
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
