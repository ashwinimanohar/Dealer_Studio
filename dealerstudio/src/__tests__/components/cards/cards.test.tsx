import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Card } from '../../../app/components/cards/cards'

describe('Card Border Logic', () => {
  it('should apply active border styling when isActive is true', () => {
    render(
      <Card isActive={true} data-testid="test-card">
        <div>Test content</div>
      </Card>
    )

    const cardElement = screen.getByTestId('test-card')
    
    expect(cardElement).toHaveClass('ring-4')
    expect(cardElement).toHaveClass('ring-blue-500')
    expect(cardElement).toHaveClass('shadow-lg')
    expect(cardElement).toHaveClass('transform')
    expect(cardElement).toHaveClass('scale-[1.02]')
    expect(cardElement).toHaveClass('transition-all')
    expect(cardElement).toHaveClass('duration-500')
    expect(cardElement).toHaveClass('ease-out')
  })

  it('should apply hover border styling when isActive is false or not provided', () => {
    render(
      <Card isActive={false} data-testid="test-card-inactive">
        <div>Test content</div>
      </Card>
    )

    const cardElement = screen.getByTestId('test-card-inactive')
    
    expect(cardElement).toHaveClass('hover:ring-4')
    expect(cardElement).toHaveClass('hover:ring-blue-400')
    
    expect(cardElement).not.toHaveClass('ring-blue-500')
    expect(cardElement).not.toHaveClass('shadow-lg')
    expect(cardElement).not.toHaveClass('scale-[1.02]')
    
    render(
      <Card data-testid="test-card-default">
        <div>Test content</div>
      </Card>
    )

    const defaultCardElement = screen.getByTestId('test-card-default')
  
    expect(defaultCardElement).toHaveClass('hover:ring-4')
    expect(defaultCardElement).toHaveClass('hover:ring-blue-400')
    expect(defaultCardElement).not.toHaveClass('ring-blue-500')
    expect(defaultCardElement).not.toHaveClass('shadow-lg')
    expect(defaultCardElement).not.toHaveClass('scale-[1.02]')
  })
}) 