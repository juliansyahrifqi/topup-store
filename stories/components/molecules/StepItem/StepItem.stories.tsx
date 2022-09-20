import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem';

export default {
  title: 'Component/Molecules/StepItem',
  component: StepItem,
} as Meta;

function Template(args: StepItemProps) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  icon: 'step-1',
  title: '1. Start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
