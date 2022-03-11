import React, { KeyboardEvent, useEffect, useState } from 'react'
import styles from './Rating.module.css'
import StarIcon from './star.svg'
import cn from 'classnames'
import RatingProps from './Rating.props'

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )

  const changeDisplay = (index: number): void => {
    if (!isEditable) {
      return
    }
    constructRating(index)
  }

  const handleClick = (index: number): void => {
    if (!isEditable || !setRating) {
      return
    }
    setRating(index)
  }

  const handleSpace = (
    index: number,
    event: KeyboardEvent<SVGElement>
  ): void => {
    if (event.code !== 'Space' || !setRating) {
      return
    }
    setRating(index)
  }

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number): void => {
    const newRating = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={(): void => changeDisplay(index + 1)}
          onMouseLeave={(): void => changeDisplay(rating)}
          onClick={(): void => {
            handleClick(index + 1)
          }}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>): any =>
              isEditable && handleSpace(index + 1, e)
            }
          />
        </span>
      )
    })
    setRatingArray(newRating)
  }

  return (
    <div {...props}>
      {ratingArray.map((ratingStar, index) => (
        <span key={index}>{ratingStar}</span>
      ))}
    </div>
  )
}
