import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useIntl, MessageDescriptor } from 'react-intl';
import {
  Text,
  CloseIcon,
  FlatButton,
  AngleLeftIcon,
  SecondaryIconButton,
  customProperties,
} from '@commercetools-frontend/ui-kit';
import messages from './messages';

// Component to have a larger the clickable surface
const LargeIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    position: absolute;
    height: 35px;
    width: 48px;
    top: 0;
    right: 0;
  }
`;

type Label = string | MessageDescriptor;
type Props = {
  color: 'surface' | 'neutral';
  currentPathLabel?: string;
  previousPathLabel: Label;
  onClose: (event: React.SyntheticEvent) => void;
  children?: never;
};
const defaultProps: Pick<Props, 'color' | 'previousPathLabel'> = {
  color: 'surface',
  previousPathLabel: messages.back,
};

const ModalPageTopBar = (props: Props) => {
  const intl = useIntl();
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${customProperties.spacingS} ${customProperties.spacingM};
        background-color: ${props.color === 'neutral'
          ? customProperties.colorNeutral95
          : customProperties.colorSurface};
        border-bottom: 1px solid
          ${props.color === 'neutral'
            ? customProperties.colorSurface
            : customProperties.colorNeutral};
        & * + * {
          margin-left: ${customProperties.spacingS};
        }

        /* FIXME: these "dirty" styles should be removed when the new Breadcrumbs component is implemented */
        p {
          font-size: 12px !important;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          overflow: hidden;

          /*  specific selector for the svg of the FlatButton */
          button:first-of-type svg {
            height: 12px !important;
            width: 12px !important;
          }
        `}
      >
        <FlatButton
          tone="primary"
          label={
            typeof props.previousPathLabel === 'string'
              ? props.previousPathLabel
              : intl.formatMessage(props.previousPathLabel)
          }
          icon={<AngleLeftIcon size="medium" color="primary" />}
          onClick={props.onClose}
        />
        {props.currentPathLabel && (
          <React.Fragment>
            <Text.Detail isInline>/</Text.Detail>
            <Text.Detail title={props.currentPathLabel} isInline truncate>
              {props.currentPathLabel}
            </Text.Detail>
          </React.Fragment>
        )}
      </div>
      {props.onClose && (
        <SecondaryIconButton
          label={intl.formatMessage(messages.close)}
          onClick={props.onClose}
          icon={
            <LargeIconWrapper>
              <CloseIcon size="medium" />
            </LargeIconWrapper>
          }
        />
      )}
    </div>
  );
};
ModalPageTopBar.displayName = 'ModalPageTopBar';
ModalPageTopBar.defaultProps = defaultProps;

export default ModalPageTopBar;