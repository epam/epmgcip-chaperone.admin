export * from '@mantine/core';

declare module '@mantine/core' {
  export interface ModalBaseCloseButtonProps {
    'data-testid'?: string | null;
  }
}
