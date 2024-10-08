import { Meta }              from '@storybook/react'
import { StoryObj }          from '@storybook/react'

import React                 from 'react'
import { PropsWithChildren } from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

import { Text as BaseText }  from './text'

interface TextStoryProps extends PropsWithChildren {
  fontWeight: number
  fontSize: number
  color: string
}

const meta: Meta<TextStoryProps> = {
  title: 'Components/Text',
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Контент',
      description: 'Основной контент, описание',
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      control: { type: 'inline-radio' },
      options: [400, 500, 600],
    },
    fontSize: {
      name: 'Размер шрифта',
      description: 'Размер шрифта текста',
    },
    color: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      control: { type: 'color' },
    },
  },
}

export default meta

export const Text: StoryObj<TextStoryProps> = {
  render: ({ children, fontWeight, fontSize, color }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseText style={{ fontWeight, fontSize, color }}>{children}</BaseText>
      <Layout flexBasis='50px' />
    </Column>
  ),
  args: {
    fontWeight: 400,
    children: 'Almost before we knew it, we had left the ground.',
    color: 'black',
    fontSize: 16,
  },
}
