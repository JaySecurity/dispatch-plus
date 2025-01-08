import styled from 'styled-components';

interface InputProps {
  errors?: string
  focus: boolean
  width?: string
  margin?: string
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '100%')};
  position: relative;
  margin: ${({ margin }) => (margin ? margin : '0.5rem 0')};
  min-height: 3.875rem;
`;

export const Input = styled.input<InputProps>`
  color: ${({ errors, theme }) =>
    errors && errors.length ? theme.errorColor : theme.inputFontColor};
  border: ${({ errors, focus, theme }) => {
    if (focus) return theme.inputActiveBorder;
    else if (errors && errors.length) return theme.errorBorder;
    else return theme.inputDefaultBorder;
  }};
  border-radius: 4px;
  background: none;
  width: 100%;
  padding: ${({ focus, value }) =>
    focus || value ? '1.25rem 1rem 0rem' : '1rem'};

  font: ${({ theme }) => theme.font.body};
  height: 3.875rem;

  &:focus {
    outline: none;
    border: ${({ theme }) => theme.inputActiveBorder};
    //background: ${({ theme }) => theme.inputActiveBackground};
  }

  // Autofill
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.primaryColor}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.fontColor};
  }

  // hide arrows if number type
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  position: absolute;
  display: inline-block;
  padding: 5px 0;
  font-size: ${({ focus, theme }) => (focus ? '14px' : theme.font.body)};
  letter-spacing: 1px;
  top: ${({ focus, value, errors }) =>
    focus || value || errors ? '0' : '50%'};
  left: 1rem;
  background: none;
  transform: ${({ focus, value, errors }) =>
    focus || value || errors ? 'translateY(10%)' : 'translateY(-50%)'};
`;

export const ErrorTag = styled.p`
  color: ${({ theme }) => theme.errorColor};
  font-size: 12px;
  margin-top: 4px;
`;

export const ShowIcon = styled.div`
  display: ${({ showIcon }) => (showIcon ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: ${({ showPassword }) =>
    showPassword
      ? 'url("/images/disable-eye.svg")'
      : 'url("/images/eye2.svg")'};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 1rem;
  top: 50%;
  width: 35px;
  height: 35px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  color: ${({ errors, theme }) =>
    errors && errors.length ? theme.errorColor : theme.inputFontColor};
  border: ${({ errors, focus, theme }) => {
    if (focus) return theme.inputActiveBorder;
    else if (errors && errors.length) return theme.errorBorder;
    else return theme.inputDefaultBorder;
  }};
  border-radius: 4px;
  background: none;
  width: 100%;
  padding: ${({ focus, value }) =>
    focus || value ? '1.75rem 1rem 0rem' : '1rem'};

  font: ${({ theme }) => theme.font.body};
  height: 3.875rem;

  &:focus {
    outline: none;
    border: ${({ theme }) => theme.inputActiveBorder};
    //background: ${({ theme }) => theme.inputActiveBackground};
  }

  // hide arrows if number type
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
