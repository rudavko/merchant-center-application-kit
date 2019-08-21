import React from 'react';
import { useIntl, MessageDescriptor, IntlShape } from 'react-intl';
import {
  PrimaryButton,
  SecondaryButton,
  IconButton,
  BinLinearIcon,
} from '@commercetools-frontend/ui-kit';
import buttonMessages from './button-messages';
import filterDataAttributes from './filter-data-attributes';

type Label = string | MessageDescriptor;
type Props = {
  label: Label;
  onClick: (event: React.SyntheticEvent) => void;
  isDisabled: boolean;
  dataAttributes: { [key: string]: string };
  children?: never;
};

const primaryDefaultProps: Pick<
  Props,
  'label' | 'isDisabled' | 'dataAttributes'
> = {
  label: buttonMessages.confirm,
  isDisabled: false,
  dataAttributes: {},
};

const getFormattedLabel = (label: Label, intl: IntlShape) =>
  typeof label === 'string' ? label : intl.formatMessage(label);

const FormPrimaryButton = (props: Props) => {
  const intl = useIntl();
  return (
    <PrimaryButton
      label={getFormattedLabel(props.label, intl)}
      onClick={props.onClick}
      isDisabled={props.isDisabled}
      {...filterDataAttributes(props.dataAttributes)}
    />
  );
};
FormPrimaryButton.displayName = 'FormPrimaryButton';
FormPrimaryButton.defaultProps = primaryDefaultProps;

const secondaryDefaultProps: Pick<
  Props,
  'label' | 'isDisabled' | 'dataAttributes'
> = {
  label: buttonMessages.cancel,
  isDisabled: false,
  dataAttributes: {},
};

const FormSecondaryButton = (props: Props) => {
  const intl = useIntl();
  return (
    <SecondaryButton
      label={getFormattedLabel(props.label, intl)}
      onClick={props.onClick}
      isDisabled={props.isDisabled}
      {...filterDataAttributes(props.dataAttributes)}
    />
  );
};
FormSecondaryButton.displayName = 'FormSecondaryButton';
FormSecondaryButton.defaultProps = secondaryDefaultProps;

const deleteDefaultProps: Pick<
  Props,
  'label' | 'isDisabled' | 'dataAttributes'
> = {
  label: buttonMessages.delete,
  isDisabled: false,
  dataAttributes: {},
};

const FormDeleteButton = (props: Props) => {
  const intl = useIntl();
  return (
    <IconButton
      icon={<BinLinearIcon />}
      label={getFormattedLabel(props.label, intl)}
      onClick={props.onClick}
      isDisabled={props.isDisabled}
      {...filterDataAttributes(props.dataAttributes)}
    />
  );
};
FormDeleteButton.displayName = 'FormDeleteButton';
FormDeleteButton.defaultProps = deleteDefaultProps;

export { FormPrimaryButton, FormSecondaryButton, FormDeleteButton };