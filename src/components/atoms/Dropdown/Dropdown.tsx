import { useState, useRef, useEffect } from 'react'
import { clsx } from 'clsx'
import assertIsNode from '../../../utils/assertIsNode'
import styles from './Dropdown.module.scss'
import arrow from '../../../assets/svg/arrow.svg'

interface Option {
  id: string
  text: string
  image: string
}

interface Props {
  options: Option[]
  onChange?: (optionId: string) => void
  defaultOptionId: string
}

export default function Dropdown({
  options,
  onChange,
  defaultOptionId,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptionId, setSelectedOptionId] = useState(defaultOptionId)
  const toggleContainer = useRef<HTMLDivElement>(null)
  const selectedOption = options.find(
    (option) => option.id === selectedOptionId,
  )

  const handleClickOutside = (event: Event) => {
    assertIsNode(event.target)

    if (
      toggleContainer.current &&
      !toggleContainer.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  const handleOptionClick = (optionId: string) => {
    setSelectedOptionId(optionId)
    setIsOpen(false)
    if (onChange) {
      onChange(optionId)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true)
    return () => {
      window.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div ref={toggleContainer} className={styles.dropdown}>
      <button
        type='button'
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className={styles.image}
          src={selectedOption?.image}
          alt={selectedOption?.text}
        />
        {selectedOption?.text}{' '}
        <img
          src={arrow}
          alt='arrow'
          className={clsx(styles.arrow, isOpen && styles.arrowOpen)}
        />
      </button>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.id} className={styles.option}>
              <button
                type='button'
                onClick={() => handleOptionClick(option.id)}
                className={styles.optionButton}
              >
                <img
                  src={option.image}
                  alt={option.text}
                  className={styles.optionImage}
                />
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
